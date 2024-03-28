"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import CrustSelect from "./CrustSelect";
import SizeSelect from "./SizeSelect";
import Topping from "./Topping";

const PizzaDetail = ({ pizza }) => {
  const [size, setSize] = useState("small");
  const [crust, setCrust] = useState("thin");
  const [additionalTopping, setAdditionalTopping] = useState([]);
  const [toppingPrice, setToppingPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  //set price based on the pizza size
  useEffect(() => {
    size === "small"
      ? setTotalPrice(parseFloat(pizza.priceSm + toppingPrice).toFixed(2))
      : size === "medium"
      ? setTotalPrice(parseFloat(pizza.priceMd + toppingPrice).toFixed(2))
      : size === "large"
      ? setTotalPrice(parseFloat(pizza.priceLg + toppingPrice).toFixed(2))
      : null;
  });

  useEffect(() => {
    if (additionalTopping.length > 0) {
      const totalToppingPrice = additionalTopping.reduce((a, c) => {
        return a + c.price;
      }, 0);
      setToppingPrice(totalToppingPrice);
    } else {
      setToppingPrice(0);
    }
  }, [additionalTopping]);

  return (
    <div className="relative flex flex-col lg:flex-row lg:gap-x-8 h-full w-full pr-4 md:p-8">
      {/* image */}
      <div className="mx-auto max-h-[160px] lg:max-h-none lg:w-1/3 lg:flex lg:justify-center lg:items-center overflow-hidden object-cover">
        <Image width={400} height={400} src={pizza.image} alt={pizza.name} />
      </div>
      {/* detail */}
      <div
        className="flex flex-col flex-1 lg:w-2/3 mb-24 py-2 px-4 overflow-y-scroll 
      scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white gap-4"
      >
        <div>
          <h2 className="capitalize text-2xl font-bold text-primary ">
            {pizza.name}
          </h2>
          <div className="text-base font-bold">
            <span>
              {size === "small"
                ? "25cm"
                : size === "medium"
                ? "30cm"
                : size === "large"
                ? "35cm"
                : null}
            </span>
            <span>, {crust} crust</span>
          </div>
        </div>

        {/* size selection */}
        <SizeSelect pizza={pizza} size={size} setSize={setSize} />
        {/* crust selection */}
        <CrustSelect crust={crust} setCrust={setCrust} />
        <div className="mb-4">
          <div className="text-lg font-bold mb-2">Choose topping</div>
          <div className="flex flex-wrap justify-start items-center gap-4">
            {pizza.toppings?.map((topping, index) => {
              return (
                <Topping
                  key={index}
                  topping={topping}
                  additionalTopping={additionalTopping}
                  setAdditionalTopping={setAdditionalTopping}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* add to cart */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col bg-white border-t ">
        <div className="flex flex-row gap-x-2 items-center justify-center py-2">
          <div className="border font-bold bg-gray-200 p-2">
            <FaMinus size={18} />
          </div>
          <span className="p-1 text-lg font-bold">1</span>
          <div className="border font-bold bg-gray-200 p-2">
            <FaPlus size={18} />
          </div>
        </div>
        <button className="px-4 py-2 capitalize text-lg bg-primary text-white font-semibold hover:bg-orange-700 transition">
          Add to cart <span>$ {totalPrice}</span>
        </button>
      </div>
    </div>
  );
};

export default PizzaDetail;
