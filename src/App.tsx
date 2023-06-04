import { Routes, Route, Navigate } from "react-router-dom";

import { BuildResumePage, ViewResumePage, PageNotFound } from "./pages";
import {
  BUILD_RESUME_PAGE_ROUTE,
  VIEW_RESUME_PAGE_ROUTE,
} from "./constants/routes";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path={BUILD_RESUME_PAGE_ROUTE} element={<BuildResumePage />} />
      <Route path={VIEW_RESUME_PAGE_ROUTE} element={<ViewResumePage />} />
      <Route
        path="/"
        element={<Navigate to={BUILD_RESUME_PAGE_ROUTE} replace />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
