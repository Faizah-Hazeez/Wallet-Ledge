import { summaryData } from "../data/SummaryData";

function Summary() {
  return (
    <section className="font-public">
      <h3 className="font-bold">Summary</h3>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 mt-2">
        {summaryData.map((item, index) => (
          <div className="bg-[#38677629] rounded-xl p-4 " key={index}>
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold">{item.label}</p>
              <img src="/div.svg" alt="three dots" />
            </div>
            <h3 className="font-bold text-2xl">{item.amount}</h3>
            <p className="text-[#3E7383] text-sm">{item.percentage}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Summary;
