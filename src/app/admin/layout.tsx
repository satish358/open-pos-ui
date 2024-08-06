import SideBar, { SideMenuItem } from "@/components/SideBar";
import type { Metadata } from "next";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Person4Icon from "@mui/icons-material/Person4";
export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Admin Panel",
};

const navItems: SideMenuItem[] = [
  {
    title: "Shop",
    icon: <ShoppingCartIcon />,
  },
  {
    title: "Product Category",
    icon: <AllInboxIcon />,
  },
  {
    title: "Product",
    icon: <ShoppingBasketIcon />,
  },
  {
    title: "Invoice",
    icon: <ReceiptIcon />,
  },
  {
    title: "Users",
    icon: <Person4Icon />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg">
      <SideBar menuItems={navItems}>{children}</SideBar>
    </div>
  );
}
