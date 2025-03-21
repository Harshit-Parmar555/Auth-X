import React from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";

const Verify = () => {
  const { verifing, verify } = useAuthStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await verify(data);
      if (response.success === true) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen flex flex-col justify-between bg-black text-white">
      {/* Form Section */}
      <div className="flex flex-col justify-center items-center flex-grow">
        <h1 className="text-4xl font-bold">Verify Your Email</h1>

        {/* Form Fields */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 w-80 flex flex-col gap-6"
        >
          <Input
            type="text"
            placeholder="Enter Verification Code"
            className="border border-zinc-700 h-12"
            {...register("token")}
            required
          />

          <Button
            disabled={verifing}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full"
          >
            {verifing ? "Wait . . ." : "Verify"}
          </Button>
        </form>

        <div className="mt-4 text-gray-500">
          Didn't receive the code?{" "}
          <span className="text-blue-600 font-bold cursor-pointer">
            Resend Code
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

export default Verify;
