import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Loader } from "lucide-react";

// PAGES IMPORT
const LandingPage = React.lazy(() => import("./pages/Land"));
const SignupPage = React.lazy(() => import("./pages/Signup"));
const LoginPage = React.lazy(() => import("./pages/Login"));
const VerifyPage = React.lazy(() => import("./pages/Verify"));
const ResetPage = React.lazy(() => import("./pages/Reset"));
const ForgetPage = React.lazy(() => import("./pages/Forgot"));
const DashBoard = React.lazy(() => import("./pages/DashBoard"));
const NotFoundPage = React.lazy(() => import("./pages/NotFound"));

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

const App = () => {
  const { checkAuth, checkingAuth, isAuthenticated } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, []);

  if (checkingAuth) {
    return (
      <div className="h-screen flex justify-center items-center bg-black text-white">
        <Loader className="w-10 h-10 animate-spin" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />

      <Suspense
        fallback={
          <div className="h-screen flex justify-center items-center text-white bg-black">
            Loading...
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
            path="/reset-password/:token"
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
