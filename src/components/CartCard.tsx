//import styles from "../views/Cart.module.css";
import { useRef } from "react";
import Product from "../interfaces/Product";
import ProductProp from "../interfaces/ProductProp";

// export default function CartCard({ product }) {
    // id, title, price, colors, images, description, quantity
    // title,
    // photo,
    // description,
    // price,
    // quantity,
    // color }) {

export default function CartCard(props: ProductProp) {
    const { product } = props;
    const { id, title, price, colors, images, description, units } = product;
    //const unitsRef = useRef(quantity);
    const unitsRef = useRef(units); // Renombrar la ref para evitar conflicto
    const manageUnits = () => {
        let productsOnCart = JSON.parse(localStorage.getItem("cart")) || [];
        const one = productsOnCart?.find((each: Product) => each.id === id);
        if (one) {
            one.units = Number(unitsRef.current.value);
            localStorage.setItem("cart", JSON.stringify(productsOnCart));
        }
    };

    return (
        <>
            {/* <article className={styles["product-cart"]}> */}
            <article className="w-[340px] lg:w-[680px] md:h-[220px] flex justify-between items-center rounded-md px-[30px] py-[15px] lg:py-[30px] m-[10px] bg-[#f2f2f2]">
                <img
                // className={styles["product-img"]}
                className="hidden lg:inline-block w-[140px] h-[140px] rounded-sm"
                // src="https://i.postimg.cc/kX8PKZpq/ipad.jpg"
                src={images[0]} //{photo}
                alt={title}
                />
                {/* <div className={styles["product-details"]}> */}
                <div className="flex flex-col justify-start flex-grow">
                    <div className="lg:h-[120px] flex flex-col justify-between flex-grow p-[10px]">
                        <span>
                            <strong className="block lg:inline-block text-[16px]">
                            {/* <strong className={styles["product-title"]}> */}
                                {title}
                            </strong>
                            {/* <span className={styles["product-description"]}> */}
                            <span className="block lg:inline-block text-[12px]">
                                - {colors[0]} 
                                {/* - {color} */}
                            </span>
                        </span>
                        {/* <p className={styles["product-description"]}> */}
                        <p className="hidden lg:inline-block w-[340px] truncate text-[12px]">
                            {description}
                        </p>
                        <input
                            // className={styles["product-input"]}
                            className="w-[70px] rounded-sm border-1 border-[#eaeaea] p-[5px] pl-[15px] text-[14px]"
                            type="number"
                            name="quantity"
                            defaultValue={units}
                            //defaultValue={quantity}
                            ref={unitsRef}
                            onChange={manageUnits}
                            min="1"
                            // id="P7Q8R90"
                            id={id}
                        />
                    </div>
                </div>
                {/* <strong className={styles["price"]}> */}
                <div className="flex flex-col">
                    <strong className="text-start lg:text-end text-[14px] px-[10px]">
                        <p>Precio unitario:</p> 
                        AR$ ${price}
                    </strong>
                    <p className="mt-[10px]"></p>
                    <strong className="text-start lg:text-end text-[14px] px-[10px]">
                        <p>Precio:</p>
                        AR$ ${price * units}
                    </strong>
                </div>
            </article>
        </>
    );
}