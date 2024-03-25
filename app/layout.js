import { EB_Garamond, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], variable: "nunito" });
const garamond = EB_Garamond({ subsets: ["latin"], variable: "eb-garamond" });

export const metadata = {
  title: "PizzaPal",
  description:
    "Experience our restaurant's finest pizzas through PizzaPal, your convenient gateway to flavorful satisfaction.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable}  ${garamond.variable} font-nunito`}>
        {children}
      </body>
    </html>
  );
}
