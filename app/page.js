import Image from "next/image";
import Pizza from "./components/Pizza";
import { pizzas } from "./constants";

export default function Home() {
  return (
    <section className="font-quicksand">
      <div className="container mx-auto py-12 px-8 md:px-16 lg:px-24 gap-6 lg:gap-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {pizzas.map((pizza) => (
          <Pizza pizza={pizza} />
        ))}
      </div>
    </section>
  );
}
