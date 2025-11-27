import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchRole } from "../redux/slices/roleSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const { currentRole, currentUser } = useSelector(state => state.role);

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow rounded-xl mb-6 sticky top-0 z-10">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
        {currentRole === "lead" ? "Team Lead Dashboard" : "Member Dashboard"}
      </h2>
      <div className="flex items-center gap-6">
        <span className="text-gray-600 dark:text-gray-300 font-medium">
            Logged in as: {currentUser}
        </span>
        <button
          onClick={() => dispatch(switchRole())}
          className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded font-semibold transition shadow-md"
        >
          Switch to {currentRole === "member" ? "Lead" : "Member"} View
        </button>
      </div>
    </nav>
  );
}