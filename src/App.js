import ExpenseItem from "./Component/ExpenseItem.js";
import NewExpense from "./Component/NewExpense/newExpense.js";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 87.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "new tV",
      amount: 737,
      date: new Date(2020, 8, 14),
    },
    {
      id: "e3",
      title: "car-insurance",
      amount: 8743.12,
      date: new Date(2020, 9, 14),
    },
  ];
  return (
    <div>
      <NewExpense />
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </div>
  );
};
export default App;
