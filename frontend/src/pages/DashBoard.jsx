import React from "react";
import { Button } from "../components/ui/button";
import { useAuthStore } from "../store/useAuthStore.js";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../lib/date";

const DashBoard = () => {
  const { logout, loggingout } = useAuthStore();
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center bg-black text-white px-4">
      <div className="w-[90%] sm:w-[75%] md:w-[50%] lg:w-[30%] p-6 bg-zinc-950 rounded-lg shadow-lg flex flex-col items-center gap-6 border border-zinc-800">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-4">
          Dashboard
        </h1>

        <div className="space-y-3 sm:space-y-4 text-center">
          <p className="text-base sm:text-lg">
            <span className="font-semibold">Username:</span> {user.username}
          </p>
          <p className="text-base sm:text-lg">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="text-base sm:text-lg">
            <span className="font-semibold">Join Date:</span>{" "}
            {formatDate(user.updatedAt)}
          </p>
        </div>

        <Button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-full text-sm sm:text-base"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default DashBoard;
