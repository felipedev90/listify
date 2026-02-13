import { BrowserRouter } from "react-router-dom";
import { WeekProvider } from "./context/WeekProvider";
// import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { AppRoutes } from "./app/routes";

export function App() {
  return (
    <WeekProvider>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </WeekProvider>
  );
}
