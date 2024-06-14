import { useEffect, useState } from "react";
//import styles from "./Thumbs.module.css";
import ProductProp from "../interfaces/ProductProp";

// export default function Thumbnail({ product }) {
export default function Thumbs(props: ProductProp) {
  const { product } = props;
  const [thumb, setThumb] = useState(product.images[0] || "/mock1.jpg");
  useEffect(() => setThumb(product.images[0]),[product.id]);
  return (
    // <section className={styles["product-images-block"]}>
    //   <div className={styles["product-images"]}>
    <section className="w-[340px] p-[10px] m-[10px] flex">
      <div className="w-[40px] mr-[10px]">
        {product.images.map((each) => (
          <img
            // className={styles["mini-img"]}
            className="w-[40px] h-[30px] mb-[10px] object-cover"
            key={each}
            src={each}
            alt={product.title}
            onClick={() => setThumb(each)}
          />
        ))}
      </div>
      <img
        // className={styles["big-img"]}
        className="w-[280px] h-[280px] object-cover"
        id="big-img"
        src={thumb}
        alt={product.title}
      />
    </section>
  );
}
