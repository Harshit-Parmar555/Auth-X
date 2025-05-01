import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Loader } from "lucide-react";

// PAGES IMPORT
const LandingPage = React.lazy(() => import("./pages/Land_Page/Land"));
const SignupPage = React.lazy(() => import("./pages/Signup_Page/Signup.jsx"));
const LoginPage = React.lazy(() => import("./pages/Login_Page/Login.jsx"));
const VerifyPage = React.lazy(() => import("./pages/Verify_Email_Page/Verify"));
const ResetPage = React.lazy(() => import("./pages/Reset_Password_Page/Reset"));
const ForgetPage = React.lazy(() => import("./pages/Forget_Password_Page/Forgot"));
const DashBoard = React.lazy(() => import("./pages/Dashboard_Page/DashBoard.jsx"));
const NotFoundPage = React.lazy(() => import("./pages/Not_Found_Page/NotFound"));
const PrivacyPage = React.lazy(() => import("./pages/T&P_Page/Privacy.jsx"));
const TermsPage = React.lazy(() => import("./pages/T&P_Page/Terms.jsx"));

import { useAuthStore } from "./store/useAuthStore.js";

// PROTECTED ROUTE
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }
  return children;
};

//  AUTHENTICATED USER ROUTE
const RedirectAuthenticatedUser = ({ children }) => {
  const { user, isAuthenticated } = useAuthStore();
  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

// Load Spinner
import Spinner from "./customs/Spinner.jsx";

const App = () => {
  const { checkAuth, checkingAuth, isAuthenticated } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, []);

  if (checkingAuth) {
    return (
      <div className="h-screen flex justify-center items-center bg-black text-white">
        <Spinner />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          // Global styles for all toasts
          style: {
            background: "#111", // Matches your dark theme
            color: "#fff",
            border: "1px solid #333",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.875rem", // equivalent to text-sm
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "#4ade80", // green-400
              secondary: "#000",
            },
          },
          error: {
            iconTheme: {
              primary: "#f87171", // red-400
              secondary: "#000",
            },
          },
        }}
      />

      <Suspense
        fallback={
          <div className="h-screen flex justify-center items-center text-white bg-black">
            <Spinner />
          </div>
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <RedirectAuthenticatedUser>
                <LandingPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/signup"
            element={
              <RedirectAuthenticatedUser>
                <SignupPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/login"
            element={
              <RedirectAuthenticatedUser>
                <LoginPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/verify"
            element={
              <RedirectAuthenticatedUser>
                <VerifyPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/forgetpassword"
            element={
              <RedirectAuthenticatedUser>
                <ForgetPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/resetpassword/:token"
            element={
              <RedirectAuthenticatedUser>
                <ResetPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/privacy"
            element={
              <RedirectAuthenticatedUser>
                <PrivacyPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/terms"
            element={
              <RedirectAuthenticatedUser>
                <TermsPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
