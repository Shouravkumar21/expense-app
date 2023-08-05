import "./ExpenseItem.css";
function ExpenseItem() {
  const expenseDate = new Date(28, 3, 2023);
  const expenseTitle = "carInsurance";
  const expenseAmount = 6889;
  return (
    <div className="expense-item">
      <div className="expense-item_dates">{expenseDate.toISOString()}</div>
      <div className="expense-item_price">${expenseAmount}</div>
      <div className="expense-item_description">
        <h1>{expenseTitle}</h1>
      </div>
    </div>
  );
}
export default ExpenseItem;
