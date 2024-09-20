import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./app/store"; // No curly braces for default export

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
