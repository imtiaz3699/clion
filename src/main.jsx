import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import ProjectDetail from "./pages/projectDetail/index.jsx";
import Navbar from "./components/sharedComponents/Navbar/Navbar.jsx";
import { ConfigProvider } from "antd";
import { theme } from "./theme/theme.js";
import { UserProvider } from "./context/context.jsx";
import { UserProviderAuth } from "./context/userContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/sharedComponents/Footer/Footer.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ModalProvider } from "./context/productDetail.jsx";
import ProductListing from "./pages/productListing";
import WishList from "./pages/wishlist/WishList.jsx";
import Cart from "./pages/cart/index.jsx";
import Checkout from "./pages/checkout/index.jsx";
import Login from "./components/Auth/Login/index.jsx";
import Signup from "./components/Auth/Signup/index.jsx";
import AuthTabs from "./pages/AuthTabs/index.jsx";
// import ProfileSettings from "./pages/profileSettings/index.jsx";
import { MessageProvider } from "./context/messageContext.jsx";
import Signin from "./admin/pages/AuthPages/Signin.jsx";
import { ThemeProvider } from "./admin/adminContext/themeContext.jsx";
import ProfileSettings from "./pages/userSettings/ProfileSettings.jsx";
import ProductSettings from "./pages/userSettings/ProductSettings.jsx";
import User from "./pages/userSettings/UserSettings.jsx";
import ProductList from "./pages/userSettings/ProductList.jsx";
import ProtectedLayout, { AuthRoutes } from "./utils/utils.jsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <MessageProvider>
        <ModalProvider>
          <QueryClientProvider client={queryClient}>
            <UserProviderAuth>
              <UserProvider>
                <ConfigProvider theme={theme}>
                  <Navbar />
                  <Routes>
                    <Route index element={<App />} />
                    <Route path="/product_detail" element={<ProjectDetail />} />
                    <Route
                      path="/product_listing"
                      element={<ProductListing />}
                    />
                    <Route path="/wish_list" element={<WishList />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route element={<AuthRoutes />}>
                      <Route path="/auth" element={<AuthTabs />}>
                        {/* Nested routes */}
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                      </Route>
                    </Route>

                    <Route element={<ProtectedLayout />}>
                      <Route path="/user" element={<User />}>
                        <Route
                          path="profile_settings"
                          element={<ProfileSettings />}
                        />
                        <Route
                          path="product_settings"
                          element={<ProductSettings />}
                        />
                        <Route path="product_list" element={<ProductList />} />
                      </Route>
                    </Route>
                  </Routes>
                  <Footer />
                </ConfigProvider>
              </UserProvider>
            </UserProviderAuth>
          </QueryClientProvider>
        </ModalProvider>
      </MessageProvider>
    </Provider>
  </BrowserRouter>
);

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter, Route, Routes, useLocation } from "react-router";
// import { ConfigProvider } from "antd";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Provider } from "react-redux";

// import "./index.css";
// import App from "./App.jsx";
// import ProjectDetail from "./pages/projectDetail/index.jsx";
// import Navbar from "./components/sharedComponents/Navbar/Navbar.jsx";
// import Footer from "./components/sharedComponents/Footer/Footer.jsx";
// import { theme } from "./theme/theme.js";
// import { UserProvider } from "./context/context.jsx";
// import { UserProviderAuth } from "./context/userContext.jsx";
// import { ModalProvider } from "./context/productDetail.jsx";
// import { MessageProvider } from "./context/messageContext.jsx";
// import ProductListing from "./pages/productListing";
// import WishList from "./pages/wishlist/WishList.jsx";
// import Cart from "./pages/cart/index.jsx";
// import Checkout from "./pages/checkout/index.jsx";
// import Login from "./components/Auth/Login/index.jsx";
// import Signup from "./components/Auth/Signup/index.jsx";
// import AuthTabs from "./pages/AuthTabs/index.jsx";
// import ProfileSettings from "./pages/profileSettings/index.jsx";
// import store from "./redux/store";
// import SignIn from './admin/pages/AuthPages/Signin.jsx'
// import SignUp from './admin/pages/AuthPages/SignUp.jsx'

// const queryClient = new QueryClient();

// const RootApp = () => {
//   const location = useLocation();
//   const isAdminRoute = location.pathname.startsWith("/admin");

//   return isAdminRoute ? (
//     <Routes>
//       <Route path="/admin/signin" element={<SignIn />} />
//       <Route path="/admin/signup" element={<SignUp />} />
//     </Routes>
//   ) : (
//     <ConfigProvider theme={theme}>
//       <Navbar />
//       <Routes>
//         <Route index element={<App />} />
//         <Route path="/product_detail" element={<ProjectDetail />} />
//         <Route path="/product_listing" element={<ProductListing />} />
//         <Route path="/profile_settings" element={<ProfileSettings />} />
//         <Route path="/wish_list" element={<WishList />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/auth" element={<AuthTabs />}>
//           <Route path="login" element={<Login />} />
//           <Route path="signup" element={<Signup />} />
//         </Route>
//       </Routes>
//       <Footer />
//     </ConfigProvider>
//   );
// };

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <Routes>
//       {/* Admin Routes (Render Without Providers) */}
//       <Route path="/admin/*" element={<RootApp />} />

//       {/* Public Routes (Wrap with Providers) */}
//       <Route
//         path="/*"
//         element={
//           <Provider store={store}>
//             <MessageProvider>
//               <ModalProvider>
//                 <QueryClientProvider client={queryClient}>
//                   <UserProviderAuth>
//                     <UserProvider>
//                       <RootApp />
//                     </UserProvider>
//                   </UserProviderAuth>
//                 </QueryClientProvider>
//               </ModalProvider>
//             </MessageProvider>
//           </Provider>
//         }
//       />
//     </Routes>
//   </BrowserRouter>
// );

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter, Route, Routes, useLocation } from "react-router";
// import { ConfigProvider } from "antd";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Provider } from "react-redux";

// import "./index.css";
// import App from "./App.jsx";
// import ProjectDetail from "./pages/projectDetail/index.jsx";
// import Navbar from "./components/sharedComponents/Navbar/Navbar.jsx";
// import Footer from "./components/sharedComponents/Footer/Footer.jsx";
// import { theme } from "./theme/theme.js";
// import { UserProvider } from "./context/context.jsx";
// import { UserProviderAuth } from "./context/userContext.jsx";
// import { ModalProvider } from "./context/productDetail.jsx";
// import { MessageProvider } from "./context/messageContext.jsx";
// import ProductListing from "./pages/productListing";
// import WishList from "./pages/wishlist/WishList.jsx";
// import Cart from "./pages/cart/index.jsx";
// import Checkout from "./pages/checkout/index.jsx";
// import Login from "./components/Auth/Login/index.jsx";
// import Signup from "./components/Auth/Signup/index.jsx";
// import AuthTabs from "./pages/AuthTabs/index.jsx";
// import ProfileSettings from "./pages/profileSettings/index.jsx";
// import store from "./redux/store";
// import SignIn from './admin/pages/AuthPages/Signin.jsx';
// import SignUp from './admin/pages/AuthPages/SignUp.jsx';

// const queryClient = new QueryClient();

// const PublicRoutes = () => (
//   <ConfigProvider theme={theme}>
//     <Navbar />
//     <Routes>
//       <Route index element={<App />} />
//       <Route path="/product_detail" element={<ProjectDetail />} />
//       <Route path="/product_listing" element={<ProductListing />} />
//       <Route path="/profile_settings" element={<ProfileSettings />} />
//       <Route path="/wish_list" element={<WishList />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/checkout" element={<Checkout />} />
//       <Route path="/auth" element={<AuthTabs />}>
//         <Route path="login" element={<Login />} />
//         <Route path="signup" element={<Signup />} />
//       </Route>
//     </Routes>
//     <Footer />
//   </ConfigProvider>
// );

// const AdminRoutes = () => (
//   <Routes>
//     <Route path="/admin/signin" element={<SignIn />} />
//     <Route path="/admin/signup" element={<SignUp />} />
//   </Routes>
// );

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <Routes>
//       {/* Admin Routes (Render Without Providers) */}
//       <Route path="/admin/*" element={<AdminRoutes />} />

//       {/* Public Routes (Wrap with Providers) */}
//       <Route
//         path="/*"
//         element={
//           <Provider store={store}>
//             <MessageProvider>
//               <ModalProvider>
//                 <QueryClientProvider client={queryClient}>
//                   <UserProviderAuth>
//                     <UserProvider>
//                       <PublicRoutes />
//                     </UserProvider>
//                   </UserProviderAuth>
//                 </QueryClientProvider>
//               </ModalProvider>
//             </MessageProvider>
//           </Provider>
//         }
//       />
//     </Routes>
//   </BrowserRouter>
// );

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router";
// import { ConfigProvider } from "antd";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Provider } from "react-redux";

// import "./index.css";
// import App from "./App.jsx";
// import ProjectDetail from "./pages/projectDetail/index.jsx";
// import Navbar from "./components/sharedComponents/Navbar/Navbar.jsx";
// import Footer from "./components/sharedComponents/Footer/Footer.jsx";
// import { theme } from "./theme/theme.js";
// import { UserProvider } from "./context/context.jsx";
// import { UserProviderAuth } from "./context/userContext.jsx";
// import { ModalProvider } from "./context/productDetail.jsx";
// import { MessageProvider } from "./context/messageContext.jsx";
// import ProductListing from "./pages/productListing";
// import WishList from "./pages/wishlist/WishList.jsx";
// import Cart from "./pages/cart/index.jsx";
// import Checkout from "./pages/checkout/index.jsx";
// import Login from "./components/Auth/Login/index.jsx";
// import Signup from "./components/Auth/Signup/index.jsx";
// import AuthTabs from "./pages/AuthTabs/index.jsx";
// import ProfileSettings from "./pages/profileSettings/index.jsx";
// import store from "./redux/store";
// import SignIn from "./admin/pages/AuthPages/Signin.jsx";
// import SignUp from "./admin/pages/AuthPages/SignUp.jsx";
// import { ThemeProvider } from "./admin/adminContext/themeContext.jsx";

// const queryClient = new QueryClient();

// const PublicRoutes = () => (
//   <ConfigProvider theme={theme}>
//     <Navbar />
//     <Routes>
//       <Route index element={<App />} />
//       <Route path="/product_detail" element={<ProjectDetail />} />
//       <Route path="/product_listing" element={<ProductListing />} />
//       <Route path="/profile_settings" element={<ProfileSettings />} />
//       <Route path="/wish_list" element={<WishList />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/checkout" element={<Checkout />} />
//       <Route path="/auth" element={<AuthTabs />}>
//         <Route path="login" element={<Login />} />
//         <Route path="signup" element={<Signup />} />
//       </Route>
//     </Routes>
//     <Footer />
//   </ConfigProvider>
// );

// const AdminRoutes = () => (
//   <Routes>
//     <Route path="/admin/signin" element={<SignIn />} />
//     <Route path="/admin/signup" element={<SignUp />} />
//   </Routes>
// );

// createRoot(document.getElementById("root")).render(
//   <Router>
//     <Routes>
//       <Route
//         path="/*"
//         element={
//           <ThemeProvider>
//             <AdminRoutes />
//           </ThemeProvider>
//         }
//       />

//       <Route
//         path="/*"
//         element={
//           <Provider store={store}>
//             <MessageProvider>
//               <ModalProvider>
//                 <QueryClientProvider client={queryClient}>
//                   <UserProviderAuth>
//                     <UserProvider>
//                       <PublicRoutes />
//                     </UserProvider>
//                   </UserProviderAuth>
//                 </QueryClientProvider>
//               </ModalProvider>
//             </MessageProvider>
//           </Provider>
//         }
//       />
//     </Routes>
//   </Router>
// );

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router";
// import { ConfigProvider } from "antd";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Provider } from "react-redux";

// import "./index.css";
// import App from "./App.jsx";
// import ProjectDetail from "./pages/projectDetail/index.jsx";
// import Navbar from "./components/sharedComponents/Navbar/Navbar.jsx";
// import Footer from "./components/sharedComponents/Footer/Footer.jsx";
// import { theme } from "./theme/theme.js";
// import { UserProvider } from "./context/context.jsx";
// import { UserProviderAuth } from "./context/userContext.jsx";
// import { ModalProvider } from "./context/productDetail.jsx";
// import { MessageProvider } from "./context/messageContext.jsx";
// import ProductListing from "./pages/productListing";
// import WishList from "./pages/wishlist/WishList.jsx";
// import Cart from "./pages/cart/index.jsx";
// import Checkout from "./pages/checkout/index.jsx";
// import Login from "./components/Auth/Login/index.jsx";
// import Signup from "./components/Auth/Signup/index.jsx";
// import AuthTabs from "./pages/AuthTabs/index.jsx";
// import ProfileSettings from "./pages/profileSettings/index.jsx";
// import store from "./redux/store";
// import SignIn from "./admin/pages/AuthPages/Signin.jsx";
// import SignUp from "./admin/pages/AuthPages/SignUp.jsx";
// import { ThemeProvider } from "./admin/adminContext/themeContext.jsx";

// const queryClient = new QueryClient();

// const PublicRoutes = () => (
//   <ConfigProvider theme={theme}>
//     <Navbar />
//     <Routes>
//       <Route index element={<App />} />
//       <Route path="/product_detail" element={<ProjectDetail />} />
//       <Route path="/product_listing" element={<ProductListing />} />
//       <Route path="/profile_settings" element={<ProfileSettings />} />
//       <Route path="/wish_list" element={<WishList />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/checkout" element={<Checkout />} />
//       <Route path="/auth" element={<AuthTabs />}>
//         <Route path="login" element={<Login />} />
//         <Route path="signup" element={<Signup />} />
//       </Route>
//     </Routes>
//     <Footer />
//   </ConfigProvider>
// );

// const AdminRoutes = () => (
//   <Routes>
//     <Route path="/admin/signin" element={<SignIn />} />
//     <Route path="/admin/signup" element={<SignUp />} />
//   </Routes>
// );

// const root = createRoot(document.getElementById("root"));

// root.render(
//   <Router>
//     <ThemeProvider>
//       <Provider store={store}>
//         <MessageProvider>
//           <ModalProvider>
//             <QueryClientProvider client={queryClient}>
//               <UserProviderAuth>
//                 <UserProvider>
//                   <Routes>
//                     <Route path="/admin/*" element={<AdminRoutes />} />
//                     <Route path="/*" element={<PublicRoutes />} />
//                   </Routes>
//                 </UserProvider>
//               </UserProviderAuth>
//             </QueryClientProvider>
//           </ModalProvider>
//         </MessageProvider>
//       </Provider>
//     </ThemeProvider>
//   </Router>
// );
