import React from "react";
import mobile from "../images/image-product-mobile.jpg";
import cart from "../images/icon-cart.svg";
const Product = () => {
  return (
    <>
      <div className="flex justify-center items-center h-full ">
        <div className="w-5/6 md:w-2/5 bg-white p-0 rounded-2xl flex flex-col md:flex-row">
          <div className="rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl h-80 md:h-auto w-full md:w-1/2 bg-mobile md:bg-desk bg-cover"></div>
          <div className="p-5 flex flex-col  gap-5 md:w-1/2">
            <h5 className="uppercase font-montserrat text-gray_blue">
              Perfume
            </h5>
            <h2 className="font-bold font-fraunces text-2xl text-dark_blue">
              Gabrielle Essence Eau De Parfum
            </h2>
            <p className="font-montserrat text-gray_blue text-sm">
              A floral, solar an voulptuous inerpretation composed by Oliver
              Polge, Perfumer-Creator for the Houde of CHANEL.
            </p>
            <div className=" flex items-center flex-row gap-5">
              <span className="text-3xl font-fraunces text-dark_cyan ">
                $149.99
              </span>
              <span className="line-through text-gray_blue text-xs font-montserrat">
                $169.99
              </span>
            </div>
            <button className="bg-dark_cyan flex p-4 justify-center gap-4 items-center rounded-lg hover:bg-dark_blue transition-colors duration-300">
              <img src={cart}></img>
              <span className="text-white font-montserrat font-bold text-sm ">
                Add to Cart
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
