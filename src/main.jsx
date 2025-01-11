import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import ProjectDetail from "./projectDetail/index.jsx";
import Navbar from "./components/sharedComponents/Navbar/Navbar.jsx";
import { ConfigProvider } from "antd";
import { theme } from "./theme/theme.js";
import { UserProvider } from "./context/context.jsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from '@tanstack/react-query';
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
  <UserProvider>
  <ConfigProvider theme = {theme}>
  <Navbar/>
    <Routes>
        <Route index element={<App />} />
        <Route path="/project-detail" element={<ProjectDetail />} />
    </Routes>
    </ConfigProvider>
    </UserProvider>
  </BrowserRouter>
  </QueryClientProvider>
);
