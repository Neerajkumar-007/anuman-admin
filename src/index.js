import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { store } from "./Redux/Store";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/bootstrap.css";
import "./assets/css/app.min.css";
import "./assets/css/style.css";
import "./assets/css/icons.min.css";
import "./assets/css/responsive.css";
import "./assets/fonts/css/font-awesome.min.css";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
