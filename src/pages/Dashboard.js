import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar"; 
import StatusSelector from "../components/StatusSelector";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const { currentRole } = useSelector(state => state.role);

  return (
    <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <Navbar />
        
        {/* Use a single ternary operator OR two mutually exclusive blocks */}
        {currentRole === "member" ? (
            // --- MEMBER VIEW ---
            <div className="space-y-6">
              <StatusSelector /> 
              <TaskList />
            </div>
        ) : (
            // --- LEAD VIEW ---
            <div className="space-y-6">
              <TaskForm />
              <TaskList /> 
            </div>
        )}
        
        {/* DO NOT put any core content components outside the conditional block above */}
      </div>
    </div>
  );
}