import CartMobileIcon from "./components/CartMobileIcon";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "PizzaPal",
  description:
    "Experience our restaurant's finest pizzas through PizzaPal, your convenient gateway to flavorful satisfaction.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <CartMobileIcon />
        {children}
      </body>
    </html>
  );
}
