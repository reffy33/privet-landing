import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import BaseLayout from "./layouts/BaseLayout";
import ToStudents from "./pages/ToStudents/ToStudents";
import ToUniversities from "./pages/ToUniversities/ToUniversities";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<ToStudents />} />
          <Route path="/universities" element={<ToUniversities />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
