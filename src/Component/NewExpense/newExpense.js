import React from "react";
import ExpenseForm from "./ExpenseForm";
const newExpense = (props) => {
  const onSaveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData={
        ...enterdExpenseData,
        id:Math.random().toString()
    }
    props. onAddExpense(expenseData);
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
      </div>
    </div>
  );
};
export default newExpense;
