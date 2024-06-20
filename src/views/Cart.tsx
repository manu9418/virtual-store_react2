//import styles from "./Cart.module.css";
import {useEffect, useState} from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import Product from "../interfaces/Product";
import { useDispatch } from "react-redux";
import { calculateTotal } from "../store/actions/products";

function Cart() {
  const [productsOnCart, setProductsOnCart] = useState<Product[]>([]);

  const totalPrice = productsOnCart.reduce((acc, each: Product)=>acc+ each.price*each.units , 0);

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const products = JSON.parse(localStorage.getItem("cart") ?? "[]");
      setProductsOnCart(products);
      dispatch(calculateTotal({ products }));
    }
  }, []);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const products = localStorage.getItem("cart");
  //   if (products) {
  //     setProductsOnCart(JSON.parse(products));
  //     dispatch(calculateTotal({ products: JSON.parse(products) }));
  //   }
  // }, []);

  return (
    <>
      <NavBar />
      <Hero first="mi" second="carrito" />
      <main className="w-full flex flex-col md:flex-row justify-center items-center md:items-start p-[20px]">
        {/* <CartCard 
          title="Ipad"
          photo="https://i.postimg.cc/kX8PKZpq/ipad.jpg"
          description="description of the product"
          price="90"
          quantity="1"
          color="black"
        /> */}
        <section className="flex flex-col">
          {productsOnCart.map((each: Product) => (
              <CartCard key={each.id} product={each}
                // key={each.id}
                // id={each.id}
                // title={each.title}
                // images={each.images}
                // description={each.description}
                // price={each.price}
                // quantity={each.units}
                // colors={each.colors}
              />
            ))}
        </section>
        <CartResume 
          total={totalPrice}
        />
      </main>
      <Footer />
    </>
  );
}

export default Cart;
