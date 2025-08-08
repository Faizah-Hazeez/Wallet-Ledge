import { summaryData } from "../data/SummaryData";

function Summary() {
  const formatAmount = (amount: number, label: string) => {
    const absoluteAmount = Math.abs(amount);
    if (label === "Transactions") {
      return absoluteAmount.toString();
    }
    return `$${absoluteAmount.toLocaleString("en-US")}`;
  };

  const formatPercentage = (percentage: number) => {
    const absolutePercentage = Math.abs(percentage);
    return `+${absolutePercentage}%`;
  };

  return (
    <section className="font-public">
      <h3 className="font-bold">Summary</h3>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 mt-2">
        {summaryData.map(({ label, amount, percentage }) => (
          <div className="bg-[#38677629] rounded-xl p-4 " key={label}>
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold">{label}</p>
              <img src="/div.svg" alt="three dots" />
            </div>
            <h3 className="font-bold text-2xl">
              {formatAmount(amount, label)}
            </h3>
            <p className="text-[#3E7383] text-sm">
              {formatPercentage(percentage)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Summary;
