import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import ProjectDetail from "./pages/projectDetail/index.jsx";
import Navbar from "./components/sharedComponents/Navbar/Navbar.jsx";
import { ConfigProvider } from "antd";
import { theme } from "./theme/theme.js";
import { UserProvider } from "./context/context.jsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import Footer from "./components/sharedComponents/Footer/Footer.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ModalProvider } from "./context/productDetail.jsx";
import ProductListing from "./pages/productListing";
import WishList from "./pages/wishlist/WishList.jsx";
import Cart from "./pages/cart/index.jsx";
import Checkout from "./pages/checkout/index.jsx";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <ModalProvider>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <UserProvider>
        <ConfigProvider theme={theme}>
          <Navbar />
          <Routes>
            <Route index element={<App />} />
            <Route path="/product_detail" element={<ProjectDetail />} />
            <Route path="/product_listing" element={<ProductListing />} />
            <Route path="/wish_list" element={<WishList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer/>
        </ConfigProvider>
      </UserProvider>
    </BrowserRouter>
  </QueryClientProvider>
  </ModalProvider>
  </Provider>
);
