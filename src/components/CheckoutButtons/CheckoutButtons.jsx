import React, { useEffect, useState } from "react";
import { CartIcon } from "../Icons/Icons";
import { FaMinus } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItemQuantity } from "../../redux/cartReducer";
import { ADD_TO_CART } from "../../api/cartApi";
function CheckoutButtons({ productId, product }) {
  const [quantity, setQuantity] = useState(product?.quantity ?? 1);
  const guestId = localStorage.getItem("guest_id") ?? "";
  console.log(guestId, "guestId");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const handleAddToCart = async () => {
    const payload = {
      guestId: guestId,
      productId: productId,
      quantity: quantity,
    };
    const addCart = {
          id: product?.id,
          name: product?.product_name,
          price: product?.price,
          quantity: quantity,
          image: product?.product_img,
          guestId:guestId,
    }
    try {
      const res = await ADD_TO_CART(payload);
      console.log(res,'fadslfjkashdlfkjad')
      // if (res?.status === 200) {
      //   console.log(res, "fasdfsda131fda3as1d3fs");
      // }
    }catch (e){
      console.log(e,'faldsjfhasdjk')
    }

    const productExists = cart?.items?.find((item) => item.id === productId);
    if (productExists) {
      dispatch(updateItemQuantity({ id: productId, quantity: quantity }));
      return;
    } else {
      dispatch(addItem(addCart));
    }
  };

  const handleQuantity = (increase) => {
    if (increase) {
      setQuantity((prev) => prev + 1);
    } else {
      if(quantity <= 1) return;
      setQuantity((prev) => prev - 1);
    }
  };
  useEffect(()=> {
    if(product?.id){
      cart?.items?.filter((item) => {
        if(item?.product?.id === product?.id){
          setQuantity(item?.quantity)
        }
      })
    }
  },[product])
  console.log(product,cart,'console.logcartfinal')
  
  return (
    <div className="flex flex-row items-center justify-between gap-[16px] w-full ">
      <div className="max-w-[164px] w-full flex flex-row items-center h-[56px] justify-between p-4 border-[3px] border-gray-300 rounded-[5px]">
        <FaMinus onClick={() => handleQuantity(false)} />
        <input
          value={quantity ?? 1}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-[20px] outline-none"
        />
        <LuPlus onClick={() => handleQuantity(true)} />
      </div>
      <button
      onClick={() => handleAddToCart()}
        className=" !h-[56px] text-[18px] text-white font-medium bg-[#FA8232] hover:bg-[#ea8f52] flex items-center justify-center gap-[12px] w-full rounded-[5px] "
        iconPosition="end"
        type="primary"
      >
        Add To Cart <CartIcon className="text-white " />
      </button>
      <button className="!h-[56px] text-[18px] text-[#FA8232] hover:text-[#da8b57]  font-medium max-w-[142px]  border-[1px] border-[#FA8232] hover:border-[#da8b57] flex items-center justify-center gap-[12px] w-full rounded-[5px]">
        Buy Now
      </button>
    </div>
  );
}

export default CheckoutButtons;
