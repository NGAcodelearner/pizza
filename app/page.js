import Image from "next/image";
import Pizza from "./components/Pizza";
import { pizzas } from "./constants";

export default function Home() {
  return (
    <section>
      <div className="container mx-auto ">
        {pizzas.map((pizza) => (
          <Pizza pizza={pizza} />
        ))}
      </div>
    </section>
  );
}
