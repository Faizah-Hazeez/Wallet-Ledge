// components/Table.tsx
import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoMdArrowDropup } from "react-icons/io";
import { useTransactionContext } from "../context/TransactionContext";

type SortColumn = "date" | "remark" | "amount" | "currency" | "type";
type SortDirection = "asc" | "desc";

function Table() {
  const { filteredTransaction } = useTransactionContext();
  const [sortColumn, setSortColumn] = useState<SortColumn>("date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const sortToggle = (column: SortColumn) => {
    if (sortColumn === column) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedData = [...filteredTransaction].sort((a, b) => {
    const valA = a[sortColumn];
    const valB = b[sortColumn];

    if (sortColumn === "date") {
      const dateA = new Date(valA as string).getTime();
      const dateB = new Date(valB as string).getTime();
      return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
    }

    if (typeof valA === "number" && typeof valB === "number") {
      return sortDirection === "asc" ? valA - valB : valB - valA;
    }
    return sortDirection === "asc"
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA));
  });

  const formatAmount = (amount: number) => {
    const isNegative = amount < 0;
    const absoluteAmount = Math.abs(amount);
    const formattedAmount = absoluteAmount.toLocaleString("en-US");
    return isNegative ? `-$${formattedAmount}` : `$${formattedAmount}`;
  };

  const renderSortIcon = (column: SortColumn) =>
    sortColumn === column ? (
      sortDirection === "asc" ? (
        <TiArrowSortedDown size={18} aria-hidden="true" />
      ) : (
        <IoMdArrowDropup size={18} aria-hidden="true" />
      )
    ) : (
      <TiArrowSortedDown size={18} className="opacity-30" aria-hidden="true" />
    );

  return (
    <div className="mt-6 font-public">
      {filteredTransaction.length === 0 ? (
        <div className="text-center text-[#1B2528] text-[15px] py-6">
          No results found for your search.
        </div>
      ) : (
        <table className="w-full border-separate border-spacing-y-3 border-spacing-x-3">
          <thead>
            <tr className="font-light text-[#1c31389e] text-[13px]">
              <th
                className="w-[55%] cursor-pointer border-b-[1.5px] border-[#49656E33]"
                onClick={() => sortToggle("date")}
              >
                <div className="flex items-center gap-1 pb-1">
                  Date
                  {renderSortIcon("date")}
                </div>
              </th>
              <th
                className="w-[15%] cursor-pointer border-b-[1.5px] border-[#49656E33]"
                onClick={() => sortToggle("remark")}
              >
                <div className="flex items-center gap-1">
                  Remark
                  {renderSortIcon("remark")}
                </div>
              </th>
              <th
                className="w-[10%] cursor-pointer border-b-[1.5px] border-[#49656E33]"
                onClick={() => sortToggle("amount")}
              >
                <div className="flex items-center gap-1">
                  Amount
                  {renderSortIcon("amount")}
                </div>
              </th>
              <th
                className="hidden lg:table-cell w-[10%] cursor-pointer border-b-[1.5px] border-[#49656E33]"
                onClick={() => sortToggle("currency")}
              >
                <div className="flex items-center gap-1">
                  Currency
                  {renderSortIcon("currency")}
                </div>
              </th>
              <th
                className="w-[10%] cursor-pointer border-b-[1.5px] border-[#49656E33]"
                onClick={() => sortToggle("type")}
              >
                <div className="flex items-center gap-1">
                  Type
                  {renderSortIcon("type")}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map(({ id, date, remark, amount, currency, type }) => (
              <tr
                key={id}
                className="text-[13px] text-[#1B2528] text-left last:[&>td]:border-b-0 pb-3"
              >
                <td className="border-b-[1.5px] border-[#49656E33]">{date}</td>
                <td className="border-b-[1.5px] border-[#49656E33]">
                  {remark}
                </td>
                <td className="border-b-[1.5px] border-[#49656E33]">
                  {formatAmount(amount)}
                </td>
                <td className="hidden lg:table-cell border-b-[1.5px] border-[#49656E33]">
                  {currency}
                </td>
                <td className="border-b-[1.5px] border-[#49656E33] pb-2">
                  <div className="flex items-center gap-2 bg-[#34616F17] w-fit px-3 py-1 rounded-full">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        type.toLowerCase() === "debit"
                          ? "bg-[#C6381B]"
                          : "bg-[#087A2E]"
                      }`}
                    ></div>
                    {type}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
