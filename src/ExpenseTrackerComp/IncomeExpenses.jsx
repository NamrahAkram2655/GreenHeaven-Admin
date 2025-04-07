import { useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";

export default function IncomeExpenses() {
  const { transactions, income, expense, earned } = useContext(ExpenseContext);

  if (!transactions || !Array.isArray(transactions)) {
    return (
      <div className="p-6 bg-white shadow-md rounded-lg text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between shadow-md p-4 sm:p-6 rounded-lg bg-white bg-opacity-90 divide-y sm:divide-y-0 sm:divide-x divide-green-700 text-center">
      <div className="flex-1 py-2 px-2">
        <h4 className="text-gray-900 text-base sm:text-lg font-bold">Income</h4>
        <p className="text-green-700 text-xl sm:text-2xl font-semibold">${income}</p>
      </div>

      <div className="flex-1 py-2 px-2">
        <h4 className="text-green-700 text-base sm:text-lg font-bold">Expense</h4>
        <p className="text-red-800 text-xl sm:text-2xl font-semibold">${expense}</p>
      </div>

      <div className="flex-1 py-2 px-2">
        <h4 className="text-blue-700 text-base sm:text-lg font-bold">Earned</h4>
        <p className="text-blue-500 text-xl sm:text-2xl font-semibold">${earned}</p>
      </div>
    </div>
  );
}
