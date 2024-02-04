import { A } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <div class="has-text-centered">
        <h1>Not Found</h1>
        <A class="button button-clear" href="/">
          &laquo; Back
        </A>
      </div>
    </main>
  );
}
