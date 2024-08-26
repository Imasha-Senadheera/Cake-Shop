import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SpecialsSection from "./components/SpecialsSection";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProductsPage from "./components/ProductsPage";
import CartPage from "./components/CartPage";
import AccountPage from "./components/AccountPage";
import AdminPage from "./components/AdminPage";
import StoreManagerPage from "./components/StoreManagerPage";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { CartProvider } from "./components/CartProvider";

function App() {
  const [user, setUser] = useState(null); // State to manage logged-in user
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleLogin = (userData) => {
    setUser(userData); // Set the logged-in user data including role
  };

  const handleLogout = () => {
    setUser(null); // Clear user data on logout
  };

  return (
    <CartProvider>
      <Header user={user} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <SpecialsSection />
              <AboutUs />
              <Contact />
            </>
          }
        />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/account"
          element={
            user ? (
              user.role === "customer" ? (
                <AccountPage />
              ) : user.role === "admin" ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="/store-manager" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin"
          element={
            user && user.role === "admin" ? <AdminPage /> : <Navigate to="/" />
          }
        />
        <Route
          path="/store-manager"
          element={
            user && user.role === "store manager" ? (
              <StoreManagerPage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
