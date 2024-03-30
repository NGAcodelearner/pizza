import { BsHandbagFill } from "react-icons/bs";

const CartMobileIcon = () => {
  return (
    <div
      className="bg-tertiary p-3 rounded-full flex justify-center items-center
     text-white fixed right-[3%] bottom-[5%] z-20 "
    >
      <BsHandbagFill size={32} />
      <span className="absolute bottom-2 font-bold text-lg text-primary">
        3
      </span>
    </div>
  );
};

export default CartMobileIcon;
