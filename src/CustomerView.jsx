import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer, editCustomer } from "./slices/customerSlice";
export const CustomerView = () => {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  const handleDelete = (deleteIndex) => {
    dispatch(deleteCustomer(deleteIndex));
  };

  const handleEdit = (editIndex, editValue) => {
    // const newCustomerName = prompt("Enter the new customer name:", editValue);
    // if (newCustomerName !== null) {
    dispatch(editCustomer({ editIndex, editValue }));
    // }
  };

  return (
    <div>
      <h1>customer view </h1>
      {customers?.map((customer, index) => {
        return (
          <p key={index}>
            {customer}{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleEdit(index, customer)}>Edit</button>
          </p>
        );
      })}
    </div>
  );
};
