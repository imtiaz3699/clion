import React from "react";
import ShoppingCard from "../../components/ShoppingCard/ShoppingCard";
import { useSelector } from "react-redux";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

function Cart() {
  const cart = useSelector((state)=> state.cart);
  console.log(cart,'faldsfalsdhjfasdfasd')
  return (
    <div className="w-full flex items-center justify-center mt-[72px]">
      <div className="max-w-[1320px] w-full flex flex-row items-start gap-[24px]">
        <div className="max-w-[872px] w-full ">
          <ShoppingCard data = {cart?.items} />
        </div>
          <OrderSummary/>
      </div>  
    </div>
  );
}

export default Cart;
