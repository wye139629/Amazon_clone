import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

function CheckoutProduct({ id, title, price, description, category, image, rating, hasPrime, amount }) {
  const dispatch = useDispatch()

  const addItem = () => {
    dispatch(addToBasket({id}))
  }

  const removeItem = () => {
    dispatch(removeFromBasket({id}))
  }

  return (
    <div className='grid grid-cols-6'>
      <Image
        src={image}
        width={200}
        height={200}
        objectFit='contain'
      />

      <div className='col-span-3 mx-5'>
        <p>{title}</p>

        <div className='flex'>
          {
            Array(rating).fill().map((_, i) => <StarIcon key={Date.now() + i} className='h-4 text-yellow-500'/>)
          }
        </div>

        <p className='text-sm my-2 line-clamp-3'>
          {description}
        </p>

        <Currency quantity={price} currency='GBP'/>

        {
          hasPrime &&
          <div className='flex items-center space-x-2'>
            <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>
        }

      </div>

      <div className='flex items-center mx-auto text-lg'>
        {amount}
      </div>

      <div className='flex flex-col space-y-2 my-auto'>
        <button className='button' onClick={addItem}>Add from Basket</button>
        <button className='button' onClick={removeItem}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
