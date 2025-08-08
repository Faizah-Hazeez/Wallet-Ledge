import { menuItems } from "../data/MenuItem";

function Sidebar() {
  return (
    <aside className="pr-2 lg:block hidden">
      {menuItems.map((item, index) => (
        <li key={index} className="list-none">
          <a
            href={item.href}
            className="block mb-1 px-4 py-1 font-public text-[15px]  hover:bg-[rgb(56,103,118,0.16)] hover:text-[#3a6c7b] rounded-full focus:ouline-none focus:ring-2 focus:ring-[#3a6979] text-[#1B2528]"
          >
            {item.label}
          </a>
        </li>
      ))}
    </aside>
  );
}

export default Sidebar;
