//import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import Product from "../interfaces/Product";

// export default function ProductCard({ id, title, price, color, image } : Product) {
export default function ProductCard(props: Product) {
  const { id, title, price, colors, images } = props;
  return (
    <Link
      // className={styles["product-card"]}
      className="bg-[#f0f0f0] text-[#383838] rounded-md w-[250px] m-[15px] no-underline"
      to={"/details/" + id}
    >
      <img 
        // className={styles["product-img"]} 
        className="w-full h-[250px] object-cover object-center rounded-t-md"
        src={images[0]} 
        alt={title} 
      />
      {/* <div className={styles["product-info"]}> */}
      <div className="p-[20px]">
        <span 
          // className={styles["product-title"]}
          className="text-[20px] font-bold leading-[25px] block">
            {title}
        </span>
        <span 
          // className={styles["product-description"]}
          className="text-[12px] text-[#383838] mb-[5px]"
          >
            {colors[0]}
        </span>
        <div 
          // className={styles["product-price-block"]}
          className="flex my-[5px] justify-between items-center">
          <span 
            // className={styles["product-price"]}
            className="text-[20px] font-bold text-[#428f13]">
            {price}
          </span>
          <span 
            // className={styles["product-discount"]}
            className="text-[14px]"
            >
            50% Off
          </span>
        </div>
        <div 
          //className={styles["product-tax-policy"]}
          className="text-[10px]">
          Includes Country tax and AFIP collection
        </div>
      </div>
    </Link>
  );
}
