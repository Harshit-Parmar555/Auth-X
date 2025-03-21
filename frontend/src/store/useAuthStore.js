import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set, get) => ({
  user: null,
  isAuthenticated: false,
  signing: false,
  verifing: false,
  logging: false,
  loggingout: false,
  requestingResetUrl: false,
  resetting: false,
  checkingAuth: true,

  // functions
  signup: async (data) => {
    try {
      set({ signing: true });
      const response = await axiosInstance.post("/users/signup", data);
      toast.success("Sign Up Successfull");
      return { success: true, message: "Sign Up Successfull" };
    } catch (error) {
      toast.error(error.response.data.message);
      return { success: false, message: error.response.data.message };
    } finally {
      set({ signing: false });
    }
  },

  verify: async (data) => {
    try {
      set({ verifing: true });
      const response = await axiosInstance.post("/users/verifyemail", data);
      toast.success("Email Verified Successfully");
      return { success: true, message: "Email Verified Successfully" };
    } catch (error) {
      toast.error(error.response.data.message);
      return { success: false, message: error.response.data.message };
    } finally {
      set({ verifing: false });
    }
  },

  login: async (data) => {
    try {
      set({ logging: true });
      const response = await axiosInstance.post("/users/login", data);
      toast.success("Login Successfull");
      set({ isAuthenticated: true, user: response.data.resUser });
      return { success: true, message: "Login Successfull" };
    } catch (error) {
      toast.error(error.response.data.message);
      return { success: false, message: error.response.data.message };
    } finally {
      set({ logging: false });
    }
  },

  checkAuth: async () => {
    try {
      const response = await axiosInstance.get("/users/checkAuth");
      set({ isAuthenticated: true, user: response.data.user });
    } catch (error) {
      return error;
    } finally {
      set({ checkingAuth: false });
    }
  },

  logout: async () => {
    try {
      set({ loggingout: true });
      const response = await axiosInstance.get("/users/logout");
      toast.success("Logout Successfull");
      set({ user: null, isAuthenticated: false });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ loggingout: false });
    }
  },

  forgetPassword: async (data) => {
    try {
      set({ requestingResetUrl: true });
      const response = await axiosInstance.post("/users/forgetpassword", data);
      toast.success("Email Sent !");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ requestingResetUrl: false });
    }
  },

  resetPassword: async (token, date) => {
    try {
      set({ resetting: true });
      const response = await axiosInstance.post(
        `/users/resetpassword/${token}`,
        date
      );
      toast.success("Password Changed");
      return { success: true, message: "Password Reset Successfully" };
    } catch (error) {
      toast.error(error.response.data.message);
      return { success: false };
    } finally {
      set({ resetting: false });
    }
  },
}));
