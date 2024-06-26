"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Topping = ({ topping, additionalTopping, setAdditionalTopping }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleTopping = () => {
    //add the topping to additionalTopping
    if (isChecked) {
      const newToppings = [...additionalTopping, { ...topping }];
      setAdditionalTopping(newToppings);
    } else {
      // remove the topping with matching name
      const newToppings = additionalTopping.filter((toppingObj) => {
        return toppingObj.name !== topping.name;
      });
      setAdditionalTopping(newToppings);
    }
  };

  useEffect(() => {
    handleTopping();
  }, [isChecked]);
  return (
    <div
      className={` ${
        isChecked ? "border-secondary  text-secondary" : "border-gray-200"
      } relative  border flex flex-col gap-2 items-center justify-center w-full max-w-[120px] p-1 rounded-xl`}
    >
      <Image src={topping.image} width={60} height={60} alt={topping.name} />
      <div className="text-sm font-medium text-center">{topping.name}</div>
      <input
        type="checkbox"
        checked={isChecked}
        className="w-full h-full opacity-0 absolute"
        onChange={handleCheckbox}
      />
    </div>
  );
};

export default Topping;
