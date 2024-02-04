import { Title } from "@solidjs/meta";
import About from "~/components/About";
import Field from "~/components/Field";

import he from "he";
import { createSignal, createMemo } from "solid-js";

enum Trigger {
  ENCODE,
  DECODE,
  NONE,
}

enum Operation {
  ENCODE = "encode",
  DECODE = "decode",
}

type Processor<T> = (input: T) => T;

export default function Home() {
  const [encoded, setEncoded] = createSignal("");
  const [decoded, setDecoded] = createSignal("");

  let trigger = Trigger.NONE;
  let decodeHtml = true;
  let decodeURL = true;

  const setTrigger = (t: Trigger) => {
    trigger = t;
  };

  const wrapError = (
    func: Processor<string>,
    data: string,
    operation: string,
  ): string => {
    try {
      return func(data);
    } catch (e) {
      console.error(`unable to ${operation} ${data} due to ${e}`);
      return data;
    }
  };

  const encode: Processor<string> = (data) => {
    let operations: Processor<string>[] = [];
    if (decodeHtml) {
      operations.push((data) => he.encode(data, { useNamedReferences: true }));
    }
    return performOperations(operations, data, Operation.ENCODE);
  };

  let performOperations = (
    operations: Processor<string>[],
    data: string,
    operation: Operation,
  ) => {
    let input = data;
    operations.forEach((func) => {
      input = wrapError(func, input, operation);
    });
    return input;
  };

  const decode: Processor<string> = (data) => {
    let operations = [];
    if (decodeHtml) operations.push(he.decode);
    if (decodeURL) operations.push(decodeURIComponent);
    return performOperations(operations, data, Operation.DECODE);
  };

  const triggeredDecoded = createMemo<string>((value) => {
    let data = decoded();
    if (trigger == Trigger.DECODE) {
      return data;
    }
    return value;
  }, "");

  const triggeredEncoded = createMemo<string>((value) => {
    let data = encoded();
    if (trigger == Trigger.ENCODE) {
      return data;
    }
    return value;
  }, "");

  createMemo(() => {
    const data = triggeredDecoded();
    setEncoded(encode(data));
    setTrigger(Trigger.NONE);
  });

  createMemo(() => {
    const data = triggeredEncoded();
    setDecoded(decode(data));
    setTrigger(Trigger.NONE);
  });

  return (
    <main>
      <About />
      <Title>EntityDecode</Title>

      <div id="options" class="row has-text-centered">
        <label class="column">
          <input
            type="checkbox"
            onChange={() => (decodeHtml = !decodeHtml)}
            checked={decodeHtml}
          />{" "}
          HTML Entity Encode/Decode
        </label>
        <label
          class="column"
          title="Currently only Decoding is supported as Encoding causes too many problems"
        >
          <input
            type="checkbox"
            onChange={() => (decodeURL = !decodeURL)}
            checked={decodeURL}
          />{" "}
          URL Encoding Decode (?)
        </label>
      </div>
      <Field
        id="encode"
        label="Encoded"
        placeholder="e.g. &raquo;"
        value={encoded}
        setValue={(value) => {
          setTrigger(Trigger.ENCODE);
          setEncoded(value);
        }}
      />
      <Field
        id="decode"
        label="Decoded"
        placeholder="e.g. »"
        value={decoded}
        setValue={(value) => {
          setTrigger(Trigger.DECODE);
          setDecoded(value);
        }}
      />
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              <strong>Entity</strong>
              <span class="has-text-weight-light">Decode</span>
              {" by "}
              <a href="https://robbrazier.com">Rob Brazier</a>
              {" |"} Source on{" "}
              <a href="https://github.com/RobBrazier/entitydecode.com">
                GitHub
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
