import "@/lib/theme/variable.css"
import "./app.postcss";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
