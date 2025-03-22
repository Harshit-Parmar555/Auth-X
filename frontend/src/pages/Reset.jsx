import React from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Reset = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { resetPassword, resetting } = useAuthStore();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await resetPassword(token, data);
      if (response.success === true) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* Form Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold font-[Inter_Tight]">
          Reset Password
        </h1>

        {/* Form Fields */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 w-80 flex flex-col gap-6"
        >
          <Input
            type="password"
            placeholder="New Password"
            className="border border-zinc-700 h-12 text-xs"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}

          <Button
            disabled={resetting}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full"
          >
            {resetting ? "Wait. . ." : "Reset Password"}
          </Button>
        </form>
      </div>

      {/* Footer */}
      <div className="bg-black text-gray-500 text-xs py-3 text-center absolute bottom-8">
        <p>Privacy Policy • Terms of Service • Help Center</p>
      </div>
    </div>
  );
};

export default Reset;
