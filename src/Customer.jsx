import React, { useEffect, useState } from "react";
import { addCustomer, saveEdit } from "./slices/customerSlice";
import { useDispatch, useSelector } from "react-redux";

export const Customer = () => {
  const [value, setValue] = useState("");
  const [customers, SetCustomers] = useState([]);

  const editIndex = useSelector((state) => state.editIndex);
  const editValue = useSelector((state) => state.editValue);

  useEffect(() => {
    console.log("editValue", editIndex, editValue);
    if (editValue) {
      setValue(editValue);
    }
  }, [editValue]);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (editValue) dispatch(saveEdit());
    if (value) dispatch(addCustomer(value));
    // SetCustomers((previousValue) => [...previousValue, value]);
    setValue("");
  };

  return (
    <div>
      <p>React Redux toolkit</p>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
