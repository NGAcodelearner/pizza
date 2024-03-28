import Image from "next/image";

const SizeSelect = ({ pizza, size, setSize }) => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-lg">Size</h2>
      <div className="flex items-center justify-start space-x-6">
        <label className="flex items-center cursor-pointer">
          <div className="flex flex-col items-center relative">
            <input
              type="radio"
              name="size"
              value="small"
              checked={size === "small"}
              onChange={(e) => setSize(e.target.value)}
              className="appearance-none w-3 h-3 border border-gray-400 rounded-full cursor-pointer checked:bg-secondary"
            />

            <span className="px-4 font-semibold text-sm">Small</span>
          </div>

          <Image
            src={pizza.image}
            width={50}
            height={50}
            alt={pizza.name}
            className={` ${
              size === "small"
                ? "border-2 border-secondary rounded-full"
                : "border-transparent filter saturate-50"
            }`}
          />
        </label>

        <label className="flex items-center cursor-pointer">
          <div className="flex flex-col items-center relative">
            <input
              type="radio"
              name="size"
              value="medium"
              checked={size === "medium"}
              onChange={(e) => setSize(e.target.value)}
              className="appearance-none w-3 h-3 border border-gray-300 rounded-full cursor-pointer checked:bg-secondary"
            />
            <span className="px-4 font-semibold text-sm">Medium </span>
          </div>

          <Image
            src={pizza.image}
            width={60}
            height={60}
            alt={pizza.name}
            className={` ${
              size === "medium"
                ? "border-2 border-secondary rounded-full"
                : "border-transparent filter saturate-50"
            }`}
          />
        </label>

        <label className="flex items-center cursor-pointer">
          <div className="flex flex-col items-center">
            <input
              type="radio"
              name="size"
              value="large"
              checked={size === "large"}
              onChange={(e) => setSize(e.target.value)}
              className="appearance-none w-3 h-3 border border-gray-300 rounded-full cursor-pointer checked:bg-secondary"
            />
            <span className="px-4 font-semibold text-sm">Large </span>
          </div>

          <Image
            src={pizza.image}
            width={70}
            height={70}
            alt={pizza.name}
            className={` ${
              size === "large"
                ? "border-2 border-secondary rounded-full"
                : "border-transparent filter saturate-50"
            }`}
          />
        </label>
      </div>
    </div>
  );
};

export default SizeSelect;
