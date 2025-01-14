import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Amazon NT</title>
      </Head>
      <Header/>
      <main className="max-w-screen-2x1 mx-auto">
        <Banner />
        <ProductFeed products={products}/>
      </main>
      
    </div>
  );
}
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then((res)  => res.json())
  return { props: {
    products,
  }

  }
}
//https://fakestoreapi.com/products
