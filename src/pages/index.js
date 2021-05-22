import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed"

export default function Home({ products }) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className='max-w-screen-2xl mx-auto'>

      <Banner />

      <ProductFeed products={products}/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const Max_rating = 5
  const Min_rating = 1
  const products = await fetch('https://fakestoreapi.com/products')
  .then(res => res.json())

  products.forEach(product => {
    product.rating =  Math.floor(Math.random() * (Max_rating - Min_rating + 1)) + Min_rating
    product.hasPrime = Math.random() < 0.5
  })

  return {
    props: {
      products
    }, // will be passed to the page component as props
  }
}
