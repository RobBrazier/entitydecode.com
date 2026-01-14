import { createSignal } from "solid-js";

export default function About() {
  const [open, setOpen] = createSignal(false);
  return (
    <>
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 px-4 py-2 mx-auto block cursor-pointer"
        onClick={() => setOpen((v) => !v)}
      >
        About
      </button>
      {open()}
      <div class="space-y-2" style={{ display: open() ? "block" : "none" }}>
        <p>
          <strong>Entity</strong>Decode is a tool to change any escaped
          characters, such as <code>%24</code>{" "}
          in URLs, and HTML entities such as <code>&amp;raquo;</code>{" "}
          into their proper characters (you can try both of those down below if
          you want!).
        </p>
        <p>
          You can use this to decode any HTML Entities, or URL Encodings, and
          make them more readable, by pasting/typing it into the{" "}
          <label
            for="encode"
            class="inline cursor-pointer text-primary hover:underline font-medium"
          >
            Encoded
          </label>{" "}
          Textbox.
        </p>
        <p>
          It also works the other way, you can paste/type anything you want to
          convert into an HTML Entity into the{" "}
          <label
            for="decode"
            class="inline cursor-pointer text-primary hover:underline font-medium"
          >
            Decoded
          </label>{" "}
          Textbox.
        </p>
        <p>
          If you have no idea what I'm on about, with{" "}
          <a
            target="_blank"
            class="text-primary hover:underline font-medium"
            href="https://en.wikipedia.org/wiki/Character_encodings_in_HTML#Character_references"
            rel="noopener"
          >
            HTML Entities
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            class="text-primary hover:underline font-medium"
            href="https://en.wikipedia.org/wiki/Percent-encoding"
            rel="noopener"
          >
            URL Encodings
          </a>
          , click the respective links to view more information about them.
        </p>
      </div>
    </>
  );
}
