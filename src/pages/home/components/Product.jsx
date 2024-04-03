import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../../../store/cartSlice'
import { fetchProducts } from '../../../store/productSlice'

const Product = () => {

  const dispatch = useDispatch()
  const {data : products ,status} = useSelector((state)=>state.product)




  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

   const addToCart = (product)=>{
      dispatch(add(product))
   }

   if(status == "loading"){
    return <h1>Loading</h1>
   }

   if(status == "error"){
    return <h1>Error:Something went wrong</h1>
   }

  return (
   <>

   <div className='relative bg-white-50'>
    <div className='container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7'>
      <h1 className='text-2xl font-bold text-yellow-900 md:text-3xl lg:w-10/12'>Our Popular Products</h1>
 
 <div className='flex flex-wrap justify-between'>

{
  products.map((product)=>{
    return(
      <div key={product._id}  className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg ">
      <img className="h-48 w-full object-cover object-center" src={product.productImage} alt="Product Image" />
      <div className="p-4 flex-row">
      <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{product.productName}</h2>
      <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{product.productDescription}</p>
      <div className="flex items-center">
        <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${product.productPrice}</p>
        <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
        <button onClick={()=>addToCart(product)} className='px-4 py-2 mx-6 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-600'>Add to Cart</button> 
        <p className="ml-auto text-base font-medium text-green-500">20% off</p>
      </div>
    </div>
    </div>
    )
  })
 
}
</div>
</div>
</div>

   </>
  )
}

export default Product