import React from "react";
import mobile from "../images/image-product-mobile.jpg";
const Product = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen ">
        <div className="w-5/6 bg-white p-2">
          <img src={mobile} alt="" className="" />
        </div>
      </div>
    </>
  );
};

export default Product;
