import React from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../store/useAuthStore.js";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const navigate = useNavigate();
  const { forgetPassword, requestingResetUrl } = useAuthStore();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await forgetPassword(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen flex flex-col justify-between bg-black text-white">
      {/* Form Section */}
      <div className="flex flex-col justify-center items-center flex-grow">
        <h1 className="text-4xl font-bold">Forgot Password</h1>

        {/* Form Fields */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 w-80 flex flex-col gap-6"
        >
          <Input
            type="email"
            placeholder="Email"
            className="border border-zinc-700 h-12"
            {...register("email")}
            required
          />

          <Button
            disabled={requestingResetUrl}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full"
          >
            {requestingResetUrl ? "Wait . . ." : "Request Reset Link"}
          </Button>
        </form>

        <div className="mt-4 text-gray-500">
          Remember your password?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 font-bold cursor-pointer"
          >
            Login
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-gray-500 text-sm py-3 text-center mb-8">
        <p>About • Privacy Policy • Terms of Service • Help Center</p>
      </div>
    </div>
  );
};

export default Forgot;
