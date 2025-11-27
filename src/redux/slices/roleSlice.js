import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentRole: "member",  // 'member' or 'lead'
  currentUser: "John Doe",
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    switchRole: (state) => {
      state.currentRole = state.currentRole === "member" ? "lead" : "member";
    },
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { switchRole, setUser } = roleSlice.actions;
export default roleSlice.reducer;