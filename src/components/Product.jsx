import React from "react";
import mobile from "../images/image-product-mobile.jpg";
const Product = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen ">
        <div className="w-5/6 bg-white p-0">
          <img src={mobile} alt="" className="" />
          <div className="p-5">
            <h5 className="uppercase font-montserrat text-gray_blue">
              Perfume
            </h5>
            <h2 className="font-bold font-fraunces text-2xl text-dark_blue">
              Gabrielle Essence Eau De Parfum
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
