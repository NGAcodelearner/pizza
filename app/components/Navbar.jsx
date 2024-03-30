import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute w-full py-6 px-10 lg:px-24">
      <div className="container mx-auto flex justify-between items-center gap-y-3">
        {/* logo */}
        <Link href="#">
          <div className="text-white text-4xl lg:text-5xl lilita-one">
            PizzaPal
          </div>
        </Link>
        <div className="flex gap-x-10">
          {/* phone number */}
          <div className="flex items-center gap-x-3">
            <Image src="/phone.svg" alt="phone" width={30} height={30} />
            <div className="font-semibold text-white">
              <div className="uppercase font-medium leading-none text-sm">
                24/7 delivery service
              </div>
              <div className="font-bold tracking-wider text-xl">
                094 5589 123
              </div>
            </div>
          </div>
          {/* cart  */}
          <div className="relative cursor-pointer hidden lg:flex">
            <Image src="/bag.svg" alt="bag" width={30} height={30} />
            <div className="text-primary absolute -top-2 left-4 font-bold bg-white w-5 h-5 flex justify-center items-center rounded-full">
              3
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
