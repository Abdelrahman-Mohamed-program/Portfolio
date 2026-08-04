import { createRoot } from "react-dom/client";
import { ReducedMotionProvider } from "./components/ui/ReducedMotionProvider";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ReducedMotionProvider>
    <App />
  </ReducedMotionProvider>
);