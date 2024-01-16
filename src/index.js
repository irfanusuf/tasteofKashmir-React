import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Image from "./assets/onion.png";
import "./styles/App.scss";
const App = lazy(() => delayForDemo(import("./App")));

async function delayForDemo(promise) {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
  return promise;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense
    fallback={
      <div>
        <img className="spinner" src={Image} alt="no" width={200} />
      </div>
    }
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
