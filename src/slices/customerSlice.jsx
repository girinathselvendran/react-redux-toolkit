import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer(state, action) {
      state.push(action.payload);
    },
    deleteCustomer(state, action) {
      const deleteIndex = action.payload;
      state.splice(deleteIndex, 1);
      // return state.filter((item, index) => index != deleteIndex);
    },
    editCustomer(state, action) {
      const editIndex = action.payload.editIndex;
      const editValue = action.payload.editValue;
      return state.map((item, index) => {
        if (index == editIndex) return (item = editValue);
        return item;
      });
      // const { editIndex, editValue } = action.payload;
      // debugger;
      // state[editIndex] = editIndex;
      // state[editValue] = editValue;
    },
    saveEdit(state) {
      if (state.editIndex !== null && state.editValue !== "") {
        state.customers[state.editIndex] = state.editValue;
        state.editIndex = null;
        state.editValue = "";
      }
    },
  },
});

export const { addCustomer, deleteCustomer, editCustomer, saveEdit } =
  customerSlice.actions;

export default customerSlice.reducer;
