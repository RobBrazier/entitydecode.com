// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.scss";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>EntityDecode</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          async
          data-api="/stats/api/event"
          src="/stats/js/script.js"
        ></script>
      </Head>
      <Body>
        <Suspense>
          <section class="section">
            <div class="container">
              <ErrorBoundary>
                <h2 class="title has-text-centered">
                  <strong>Entity</strong>Decode
                </h2>
                <Routes>
                  <FileRoutes />
                </Routes>
              </ErrorBoundary>
            </div>
          </section>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
