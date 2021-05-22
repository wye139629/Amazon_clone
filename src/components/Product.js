import Image from 'next/image'
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'


function Product({ id, title, price, description, category, image, rating, hasPrime }) {
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>

      <Image src={image} height={200} width={200} objectFit='contain'/>

      <h4 className='my-3'>{title}</h4>

      <div className='flex'>
        {
          Array(rating).fill().map((_, i) => <StarIcon key={Date.now() + i} className='h-4 text-yellow-500'/>)
        }
      </div>

      <p className='my-2 text-sm line-clamp-2'>{description}</p>

      <div className='mb-5'>
        <Currency quantity={price} currency='GBP'/>
      </div>

      {
        hasPrime &&
        <div className='flex items-center space-x-2 -mt-5'>
          <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
          <p className='text-xs'>FREE Next-day Delivery</p>
        </div>
      }

      <button className='button mt-auto'>
        Add to Basket
      </button>

    </div>
  )
}

export default Product
