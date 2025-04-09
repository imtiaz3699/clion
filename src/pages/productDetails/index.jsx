import React from 'react'
import { getRequest } from '../../api/api'
import { useQuery } from "@tanstack/react-query";
import { useParams } from 'react-router';
function ProductDetails() {
    const {id} = useParams()
    const product = useQuery(
        ["singleProduct", id], 
        () => getRequest(`/api/product/get-single-product/${id}`), 
        {
          staleTime: 1000 * 60 * 60,
        }
      );
      console.log(product?.data?.data,'fasldjfhlasdjfh44535')
  return (
    <div>
      Product Details
    </div>
  )
}

export default ProductDetails
