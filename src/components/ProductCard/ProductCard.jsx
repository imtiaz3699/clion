import React from "react";
import { FaStar } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { LuHeart } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';
import { removeItem,addItem } from "../../redux/cartReducer";


function ProductCard({
  product,
  showFunction = false,
  handleFunctionality,
  showFunctionality,
}) {

  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-[248px] hover:shadow-xl h-full min-h-[296px] p-3 relative border-[1px] border-gray-200">
      <div
        onMouseEnter={() => showFunction&& handleFunctionality(product?.id)}
        onMouseLeave={() => showFunction && handleFunctionality("")}
        className="h-[188px] w-full relative"
      >
        <img
          src={product?.images[0]}
          className="w-full h-full object-contain"
        />
        {showFunction && showFunctionality === product?.id && (
          <div className="absolute top-0 w-full h-full bg-black bg-opacity-10 z-10 transition-opacity delay-200 duration-150 flex flex-row items-center justify-center gap-2 ">
              <div className = 'bg-white w-[48px] h-[48px] rounded-full flex items-center justify-center group hover:bg-[#FA8232] cursor-pointer'> <LuHeart className = 'text-[20px] group-hover:text-white'/> </div> 
              <div className = 'bg-white w-[48px] h-[48px] rounded-full flex items-center justify-center group hover:bg-[#FA8232] cursor-pointer'> <BsCart2 className = 'text-[20px] group-hover:text-white'/> </div> 
              <div className = 'bg-white w-[48px] h-[48px] rounded-full flex items-center justify-center group hover:bg-[#FA8232] cursor-pointer'><FiEye className = 'text-[20px] group-hover:text-white' /></div> 
          </div>
        )}
      </div>
      {showFunction && (
        <div className="flex flex-row items-center text-[14px] text-gray-500 ">
          {Array(5)
            .fill(0)
            .map((element, idx) => {
              return (
                <FaStar className="text-[#EBC80C] text-[14px] " key={idx} />
              );
            })}
          <span className="ml-2">(55,777)</span>
        </div>
      )}
      <div className="flex flex-col gap-2 mt-2 w-full">
        <p className="text-[14px] font-medium text-gray-900 w-full">
          {product?.description?.slice(0, 50)}...
        </p>
        <p className="text-[#2DA5F3] text-[18px] font-medium">$2,300</p>
      </div>
      <div className="absolute w-[80px] rounded-[2px] bg-gray-500 text-[14px] text-center font-medium top-2 left-2 text-white ">
        SOLD OUT
      </div>
    </div>
  );
}

export default ProductCard;
