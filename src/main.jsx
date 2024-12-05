import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      {" "}
      <Provider store={store}>
        <App />
        <Toaster position="top-center"  richColors />
      </Provider>
    </BrowserRouter>
);
