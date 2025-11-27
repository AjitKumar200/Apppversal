import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { assignTask } from "../redux/slices/membersSlice";

export default function TaskForm() {
  const dispatch = useDispatch();
  const members = useSelector(state => state.members.list);
  
  // New state for the Lead's manually typed name
  const [leadName, setLeadName] = useState(""); 

  const [selectedMember, setSelectedMember] = useState(members[0] ? members[0].name : "");
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    
    // VALIDATION: Ensure all fields, including the Lead's name, are filled
    if (!title || !dueDate || !selectedMember || !leadName.trim()) {
      alert("Please ensure you enter your Lead Name, Task Title, Due Date, and select a member.");
      return;
    }
    
    // Dispatch action to assign a task
    dispatch(assignTask({ 
        name: selectedMember, 
        task: { 
          title, 
          progress: 0, 
          dueDate, 
          assignedBy: leadName.trim() // <-- Added Lead's Name to the task object
        } 
    }));
    
    // Reset form fields after successful assignment
    setTitle("");
    setDueDate("");
    setLeadName(""); // Reset the lead name field for the next assignment
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow flex flex-col gap-4 mb-6 border border-indigo-200 dark:border-indigo-900">
      <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Assign New Task (Lead Only)</h3>
      
      {/* 🛑 NEW: Input for Lead's Manual Name 🛑 */}
      <input 
        type="text" 
        placeholder="Type Your Lead Name (for accountability)" 
        value={leadName} 
        onChange={e => setLeadName(e.target.value)} 
        className="p-3 rounded border border-red-400 dark:bg-gray-700 dark:border-red-600 dark:text-gray-200 focus:ring-red-500 focus:border-red-500 font-semibold"
      />
      
      <select 
        className="p-3 rounded border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:ring-indigo-500 focus:border-indigo-500" 
        value={selectedMember} 
        onChange={e => setSelectedMember(e.target.value)}
      >
        <option value="" disabled>Select Team Member</option>
        {members.map(m => <option key={m.name} value={m.name}>{m.name}</option>)}
      </select>
      
      <input 
        type="text" 
        placeholder="Task Title" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        className="p-3 rounded border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
      />
      
      <input 
        type="date" 
        value={dueDate} 
        onChange={e => setDueDate(e.target.value)} 
        className="p-3 rounded border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
      />
      
      <button 
        type="submit" 
        className="bg-indigo-600 text-white px-4 py-3 rounded font-semibold hover:bg-indigo-700 transition"
      >
        Assign Task
      </button>
    </form>
  );
}