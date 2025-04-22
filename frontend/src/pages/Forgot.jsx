import React from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../store/useAuthStore.js";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="h-dvh flex flex-col items-center justify-center bg-black text-white">
      {/* Form Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold font-[Inter_Tight]">
          Forgot Password
        </h1>

        {/* Form Fields */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 w-80 flex flex-col gap-4"
        >
          <Input
            type="email"
            placeholder="Email"
            className="border border-zinc-700 h-12 text-xs"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}

          <Button
            disabled={requestingResetUrl}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full"
          >
            {requestingResetUrl ? "Wait . . ." : "Request Reset Link"}
          </Button>
        </form>

        <div className="mt-6 text-gray-500 text-xs">
          Remember your password?{" "}
          <Link to="/login" className="text-blue-600 font-bold cursor-pointer">
            Login
          </Link>
        </div>
      </div>

      <div className="bg-black text-gray-500 text-xs py-3 text-center absolute bottom-8">
        <p>Privacy Policy • Terms of Service • Help Center</p>
      </div>
    </div>
  );
};

export default Forgot;
