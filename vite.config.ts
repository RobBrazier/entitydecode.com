import solid from "solid-start/vite";
import { defineConfig } from "vite";
// @ts-ignore
import staticAdapter from "solid-start-static";

export default defineConfig({
  plugins: [
    solid({ prerenderRoutes: ['/'] , adapter: staticAdapter()})
  ],
});
