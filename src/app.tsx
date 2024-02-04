// @refresh reload
import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import "./app.scss";

export default function App() {
  return (
    <section class="section">
      <div class="container">
        <h2 class="title has-text-centered">
          <strong>Entity</strong>Decode
        </h2>
        <Router
          root={(props) => (
            <MetaProvider>
              <Title>EntityDecode</Title>
              <Suspense>{props.children}</Suspense>
            </MetaProvider>
          )}
        >
          <FileRoutes />
        </Router>
      </div>
    </section>
  );
}
