import { Navigate, Route, Routes } from "react-router-dom";
import { WeekPage } from "../pages/WeekPage/WeekPage";
import { ListPage } from "../pages/ListPage/ListPage";
import { SettingPage } from "../pages/SettingsPage/SettingsPage";

export function AppRoutes() {
  return (
    <Routes>
      {/* path="/" = rota inicial (home) - Quando a URL é exatamente a raiz do app (/), você quer definir qual é a “página padrão”.*/}
      <Route path="/" element={<Navigate to="/week" replace />} /> <Route />
      <Route path="/week" element={<WeekPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/settings" element={<SettingPage />} />
      <Route path="/" element={<Navigate to="/week" replace />} />
      {/* path="*" = “pega tudo” (fallback / 404) - Quando a URL não bate com nenhuma rota existente, você precisa decidir o que fazer.*/}
    </Routes>
  );
}
