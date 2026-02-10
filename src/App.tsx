import { BrowserRouter } from "react-router-dom";
// import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { AppRoutes } from "./app/routes";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}
