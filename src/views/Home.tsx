// import styles from "./Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
//import products from "../assets/products";
import Product from "../interfaces/Product";
import { useSelector } from "react-redux";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const text = useSelector((store) => store.products.text);
  
  useEffect(() => {
    axios
      .get("/products.json")
      .then((res) => {
        // PARA VERIFICAR EL ENDPOINT - /products.json ESTA FUNCIONANDO CORRECTAMENTE
        // console.log("Products data:", res.data); // Añadir esta línea para verificar los datos
        // setProducts(res.data);
        const filterData = res.data.filter((each) =>
          each.title.toLowerCase().includes(text.toLowerCase())
        );
        setProducts(filterData);
      })
      .catch((err) => console.log(err));
  }, [text]);
  console.log(text);

  //console.log(text);
  // const filteredProducts = products.filter(product =>
  //   product.title.toLowerCase().includes(text.toLowerCase())
  // );

  return (
    <>
      <NavBar />
      <Hero first="tecnologia" second="renovada" />
      {/* <div className="w-full h-[50px] bg-purple-800 text-white text-center" > CAJA DE PRUEBA </div> */}
      {/* <main> */}
      <main className="w-full flex justify-center items-center p-[20px]">
        {/* <div className={styles["product-container"]} id="products"> */}
        <div 
          // className="w-[1080px] flex flex-wrap justify-between" 
          className="w-full lg:w-[1024px] flex flex-col sm:flex-row flex-wrap justify-between items-center"
          id="products"
          >
          {products.map((each: Product) => (
            <ProductCard
              key={each.id}
              id={each.id}
              title={each.title}
              price={each.price}
              colors={each.colors}
              images={each.images}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
