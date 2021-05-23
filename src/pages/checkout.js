import Header from "../components/Header";
import Image from 'next/image'
import CheckoutProduct from '../components/CheckoutProduct'
import Currency from 'react-currency-formatter'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import { useSession } from "next-auth/client";

function Checkout() {
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)
  const [session] = useSession()

  return (
    <div className='bg-gray-100'>
      <Header />

      <main className='lg:flex max-w-screen-2xl mx-auto'>
        {/* left */}
        <div className='flex-grow m-5 shadow-sm'>
          <Image
            src='https://links.papareact.com/ikj'
            width={1020}
            height={250}
            objectFit='contain'
          />

          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='border-b pb-4 text-3xl'>
              {
                items.length > 0 ?
                'Your Shoppong basket'
                :
                'Your Amazon Basket is empty'
              }
            </h1>

            {
              items.map((item) =>
                <CheckoutProduct
                  key={Date.now() + item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  rating={item.rating}
                  image={item.image}
                  hasPrime={item.hasPrime}
                  category={item.category}
                  amount={item.amount}
                />
              )
            }
          </div>
        </div>
        {/* right */}

        <div className='flex flex-col bg-white p-10 shadow-md'>
          {
            <>
              <h2>Subtotal ({items.length} items):
                <span className='font-bold ml-2'>
                  <Currency quantity={total} currency='GBP'/>
                </span>
              </h2>
              <button className={`button mt-2 ${(!session || items.length === 0 )&& 'disableBtn'}`}>
                { !session ? 'Sign in to checkout' : 'Go to checkout' }
              </button>
            </>
          }
        </div>
      </main>
    </div>
  )
}

export default Checkout
