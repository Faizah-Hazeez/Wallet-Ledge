import { useState } from "react";
import { menuItems } from "../data/MenuItem";

function Sidebar() {
  const [isActive, setIsActive] = useState("Dashboard");

  return (
    <aside className="pr-2 ">
      {menuItems.map((item, index) => (
        <li key={index} className="list-none">
          <a
            href="#"
            onClick={() => setIsActive(item.label)}
            className={`block mb-1 px-4 py-1 font-public text-[15px] rounded-full ${
              isActive === item.label
                ? "bg-[rgb(56,103,118,0.16)] text-[#3a6c7b]"
                : "bg-transparent text-[#1B2528]"
            }`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </aside>
  );
}

export default Sidebar;
