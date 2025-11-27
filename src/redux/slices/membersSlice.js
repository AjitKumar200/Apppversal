import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { name: "John Doe", status: "Working", tasks: [{ title: "Design Homepage", progress: 50, dueDate: "2025-12-05" }] },
    { name: "Jane Smith", status: "Break", tasks: [] },
    { name: "Bob Marley", status: "Meeting", tasks: [] },
  ],
};

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      const { name, status } = action.payload;
      const member = state.list.find((m) => m.name === name);
      if (member) member.status = status;
    },
    assignTask: (state, action) => {
      const { name, task } = action.payload;
      const member = state.list.find((m) => m.name === name);
      if (member) member.tasks.push(task);
    },
    updateProgress: (state, action) => {
      const { title, type, currentUser } = action.payload;
      const member = state.list.find((m) => m.name === currentUser);
      if (member) {
        const task = member.tasks.find((t) => t.title === title);
        if (task) {
          if (type === "inc") task.progress = Math.min(100, task.progress + 10);
          if (type === "dec") task.progress = Math.max(0, task.progress - 10);
        }
      }
    },
  },
});

export const { updateStatus, assignTask, updateProgress } = membersSlice.actions;
export default membersSlice.reducer;