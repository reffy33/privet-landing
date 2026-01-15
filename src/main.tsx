import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router";
import BaseLayout from "./layouts/BaseLayout";
import ToStudents from "./pages/ToStudents/ToStudents";
import ToUniversities from "./pages/ToUniversities/ToUniversities";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<ToStudents />} />
          <Route path="/universities" element={<ToUniversities />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
