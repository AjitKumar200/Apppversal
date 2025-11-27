import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStatus } from "../redux/slices/membersSlice";

export default function StatusSelector() {
  const { currentUser } = useSelector(state => state.role);
  const members = useSelector(state => state.members.list);
  const dispatch = useDispatch();

  const user = members.find(m => m.name === currentUser);
  const statuses = ["Working", "Break", "Meeting", "Offline"];

  if (!user) return null; 

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow flex flex-wrap items-center gap-4 mb-6">
      <p className="text-gray-600 dark:text-gray-300 font-semibold">Update Status:</p>
      {statuses.map(status => (
        <button
          key={status}
          onClick={() => dispatch(updateStatus({ name: currentUser, status }))}
          className={`px-4 py-2 rounded font-semibold transition ${
            user.status === status 
              ? "bg-indigo-500 text-white shadow-md" 
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
          } hover:scale-[1.02]`}
        >
          {status}
        </button>
      ))}
    </div>
  );
}