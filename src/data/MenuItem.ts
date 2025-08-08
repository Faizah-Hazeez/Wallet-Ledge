export interface MenuItem {
  label: string;
  href: string;
}

export const menuItems: MenuItem[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Transactions", href: "/transactions" },
  { label: "Reports", href: "/reports" },
  { label: "Settings", href: "/settings" },
];
