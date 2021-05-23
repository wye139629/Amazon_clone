import Image from 'next/image'
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon
} from '@heroicons/react/outline'
import { session, signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'

function Header() {
  const [ session ] = useSession();
  const router = useRouter()
  const items = useSelector(selectItems)

  return (
    <header>
      <div className="flex items-center bg-amazon_blue px-1 py-3 flex-grow">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={ ()=> router.push('/') }
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit="contain"
            className='cursor-pointer'
          />
        </div>

        {/* search bar */}
        <div className='hidden sm:flex items-center h-10 rounded-md cursor-pointer bg-yellow-400 flex-grow hover:bg-yellow-500'>
          <input type="text" className='p-2 h-full w-6 flex-shrink flex-grow rounded-l-md focus:outline-none'/>
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* right */}
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div onClick={!session? signIn : signOut} className='link'>
            <p>
              {
                session? `Hello ${session.user.name}`:  'Sign In'
              }
            </p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>

          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>

          <div className='relative link flex items-center' onClick={ ()=> router.push('/checkout') }>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
              { items.length }
            </span>
            <ShoppingCartIcon className="h-10"/>
            <p className='hidden font-extrabold md:text-sm md:block mt-2'>Basket</p>
          </div>
        </div>
      </div>

      <div className='flex items-center space-x-6 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
        <p className='link flex items-center'>
          <MenuIcon className='h-6 mr-1'/>
          All
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's deal</p>
        <p className='link hidden lg:inline-flex'>Electornics</p>
        <p className='link hidden lg:inline-flex'>Food & Grocery</p>
        <p className='link hidden lg:inline-flex'>Prime</p>
        <p className='link hidden lg:inline-flex'>Buy Again</p>
        <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header
