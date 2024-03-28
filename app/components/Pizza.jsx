"use client";

import Image from "next/image";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "react-modal";
import PizzaDetail from "./PizzaDetail";

//bind modal to body
Modal.setAppElement("body");

const Pizza = ({ pizza }) => {
  const { name, description, image, priceSm } = pizza;
  const [expand, setExpand] = useState(true);
  const toggleExpand = () => setExpand(!expand);

  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  return (
    <div className="group border shadow-xl rounded-lg flex flex-col space-y-4 justify-start  ">
      <div
        className="max-h-[150px] overflow-hidden object-cover "
        onClick={openModal}
      >
        <Image
          className=" w-full mx-auto p-6 group-hover:scale-110 cursor-pointer transition-all duration-300 bg-gray-100"
          src={image}
          alt={name}
          width={200}
          height={170}
        />
      </div>
      <div className="px-6">
        <h1 className="capitalize text-xl cursor-pointer font-bold ">{name}</h1>
        <div className="flex flex-wrap items-center mt-4">
          <p
            className={`text-gray-600 text-sm font-medium max-w-md mx-auto ${
              expand ? "truncate text-clip" : " "
            }`}
          >
            {description}
          </p>
          <span
            className="font-semibold text-sm hover:cursor-pointer text-black"
            onClick={toggleExpand}
          >
            {expand ? "...read more" : "hide"}
          </span>
        </div>

        <div className="flex justify-between items-center mt-2 mb-6">
          <div className="flex flex-wrap gap-1 items-center justify-start">
            <span className="hidden lg:block font-semibold text-sm ">
              starts at
            </span>
            <span className="text-primary font-bold text-base">
              {" "}
              ${priceSm}
            </span>
          </div>

          <button
            onClick={openModal}
            className="px-4 py-2 text-sm bg-primary text-white font-semibold rounded-xl hover:shadow-lg group-hover:bg-secondary transition "
          >
            ADD
          </button>
        </div>
      </div>

      {/* modal */}
      {modal && (
        <Modal
          isOpen={modal}
          onRequestClose={closeModal}
          contentLabel="Pizza modal"
          className="fixed inset-0 flex items-center justify-center bg-gray-400/50 bg-opacity-90"
        >
          <div className="relative bg-white w-[90%] h-[80%] rounded-xl lg:max-w-[800px] lg:max-h-[700px]">
            {/* icon close */}
            <div className="absolute top-2 z-10 right-2 hover:scale-110 duration-200">
              <IoCloseOutline
                onClick={closeModal}
                className="text-4xl text-tertiary cursor-pointer"
              />
            </div>
            {/* pizza detail */}
            <PizzaDetail pizza={pizza} modal={modal} setModal={setModal} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Pizza;
