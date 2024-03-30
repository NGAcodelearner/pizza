import Image from "next/image";

const Banner = () => {
  return (
    <section>
      <div className=" bg-primary bg-pattern lg:pt-8 pt-24">
        <div className="container mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center min-h-[700px]">
          <div className="flex-1  text-center lg:text-left">
            <h1 className="text-2xl lg:text-3xl tracking-wide text-gray-800 font-semibold ">
              Welcome to{" "}
              <span className="text-white text-3xl lg:text-5xl lilita-one">
                PizzaPal
              </span>
            </h1>
            <h2 className="text-5xl lg:text-7xl text-white lilita-one drop-shadow-2xl">
              The best pizza to share with friends
            </h2>
          </div>

          <div className="flex-1">
            <Image
              src="/pizza-banner.png"
              width={500}
              height={500}
              alt="pizza-banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
