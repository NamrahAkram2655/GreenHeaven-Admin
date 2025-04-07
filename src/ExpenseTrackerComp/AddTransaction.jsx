import { useContext, useState } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const { addExpense } = useContext(ExpenseContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim() || isNaN(amount) || amount === "") {
      alert("Enter valid data");
      return;
    }

    const formattedAmount =
      type === "expense" ? -Math.abs(Number(amount)) : Math.abs(Number(amount));

    await addExpense({ text, amount: formattedAmount, type });
    setText("");
    setAmount("");
    setType("income");
  };

  return (
    <div className="p-4 sm:p-6 shadow-md rounded-lg bg-white bg-opacity-90">
      <h1 className="text-lg sm:text-xl text-green-800 font-extrabold mb-4">
        Register Transaction
      </h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="w-full p-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter transaction name..."
        />
        <input
          className="w-full p-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
        />
        <select
          className="w-full p-2 text-sm border rounded bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button
          type="submit"
          className="w-full bg-green-800 text-white p-2 text-sm rounded hover:bg-green-700 font-semibold transition-colors"
        >
          Record Transaction
        </button>
      </form>
    </div>
  );
}
