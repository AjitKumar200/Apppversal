import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchRole } from "../redux/slices/roleSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { currentRole, currentUser } = useSelector(state => state.role);

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow rounded-xl mb-6">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
        {/* Dynamic header text */}
        {currentRole === "lead" ? "Team Lead Dashboard" : "Member Dashboard"}
      </h2>
      <div className="flex items-center gap-4">
        <span className="text-gray-600 dark:text-gray-300">{currentUser}</span>
        {/* Button to dispatch the switchRole action */}
        <button
          onClick={() => dispatch(switchRole())}
          className="px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded transition"
        >
          Switch to {currentRole === "member" ? "Lead" : "Member"} View
        </button>
      </div>
    </header>
  );
}