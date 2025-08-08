// context/TransactionContext.tsx
import { createContext, useContext, useState } from "react";
import { transactions } from "../data/Transaction";
import type { Transaction } from "../types";

interface TransactionContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredTransaction: Transaction[];
}

const TransactionContext = createContext<TransactionContextType | undefined>(
  undefined
);

export function TransactionProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredTransaction = transactions.filter((transaction) =>
    Object.values(transaction)
      .map((value) => String(value).toLowerCase())
      .some((value) => value.includes(searchQuery.toLowerCase()))
  );

  return (
    <TransactionContext.Provider
      value={{ searchQuery, setSearchQuery, filteredTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactionContext() {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useTransactionContext must be used within Transaction");
  }
  return context;
}
