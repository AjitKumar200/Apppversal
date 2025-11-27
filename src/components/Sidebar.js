import React from "react";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const { currentRole } = useSelector(state => state.role);
  
  // Function to reload the page/simulate returning to the initial dashboard view
  const goToHome = () => {
    window.location.reload();
  };

  return (
    <aside className="w-64 h-screen bg-slate-900 text-gray-200 p-6 shadow-xl flex flex-col sticky top-0">
      
      {/* WRAPPED H1 IN A CLICKABLE DIV/BUTTON */}
      <div 
        onClick={goToHome} 
        className="cursor-pointer mb-10" // Added cursor-pointer for visual feedback
        title="Go to Dashboard Home"
      >
        <h1 className="text-2xl font-bold text-indigo-400">AppVersal</h1>
      </div>
      
      <nav className="flex flex-col gap-4">
        <span className="hover:text-indigo-300 cursor-pointer p-2 rounded">Dashboard</span>
        {currentRole === "lead" && <span className="hover:text-indigo-300 cursor-pointer p-2 rounded bg-slate-800 text-indigo-300">Assign Tasks</span>}
        {currentRole === "member" && <span className="hover:text-indigo-300 cursor-pointer p-2 rounded bg-slate-800 text-indigo-300">My Tasks</span>}
        <span className="hover:text-indigo-300 cursor-pointer p-2 rounded">Settings</span>
      </nav>
    </aside>
  );
}