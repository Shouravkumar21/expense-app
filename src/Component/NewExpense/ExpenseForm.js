import React from "react";
import { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dataChangeHandler = (event) => {
    setEnteredDate(event.target.value); ///it is used when we want to see input in consol
  };
  const submitHandler = (event) => {
    event.preventDefault();

    //store use state value as object which use to value in console
    const expanseData = {
      title: enteredTitle,
      amount: enteredAmount,
      Date: new Date(enteredDate),
    };
    console.log(expanseData);
    //to make blank when fill the foam it is called Two-way binding
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="Data" onChange={dataChangeHandler} />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expences</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
