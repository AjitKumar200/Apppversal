import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { assignTask } from "../redux/slices/membersSlice";

export default function TaskForm() {
  const dispatch = useDispatch();
  const members = useSelector(state => state.members.list);
  
  const [selectedMember, setSelectedMember] = useState(members[0] ? members[0].name : "");
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !dueDate || !selectedMember) return;
    
    dispatch(assignTask({ 
        name: selectedMember, 
        task: { title, progress: 0, dueDate } 
    }));
    
    setTitle("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow flex flex-col gap-4 mb-6 border border-indigo-200 dark:border-indigo-900">
      <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Assign New Task (Lead Only)</h3>
      
      <select 
        className="p-3 rounded border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:ring-indigo-500 focus:border-indigo-500" 
        value={selectedMember} 
        onChange={e => setSelectedMember(e.target.value)}
      >
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