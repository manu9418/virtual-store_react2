//import styles from "../views/Cart.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

// interface Props {
//     total: number;
//   }

// export default function CartResume({total}) {
//export default function CartResume() {
export default function CartResume(props: Props) {
    //const { total } = props;
    const { price } = props;

    const total = useSelector((store) => store.products.total);
    console.log(total);

    const formatter = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      // const formattedPrice = formatter.format(price);
      const formattedTotal = formatter.format(total);

    return (
      <>
        {/* <div className={styles["cart-resume"]}>
          <div className={styles["cart-data"]}>
            <h2 className={styles["cart-title"]}> */}
        <div className="w-[340px] h-[220px] flex flex-col justify-between rounded-md p-[30px] m-[10px] bg-[#f2f2f2]">
            <div className="flex-grow flex flex-col justify-between">
                <h2 className="flex justify-between text-[20px] font-bold">
                    <span>Resumen</span>
                    <span>del</span>
                    <span>pedido</span>
                </h2>
                {/* <div className={styles["cart-total"]}> */}
                <div className="flex justify-between items-center">
                    <h3>Total</h3>
                    <strong /*className={styles["cart-price"]}*/>
                        {/* //total} */}
                        ${formattedTotal}
                        {/* ${(product.price * quantity).toLocaleString()} */}
                    </strong>
                </div>
                {/* <small className={styles["cart-tax"]}> */}
                <small className="pb-[10px]">
                    Incluye impuesto PAIS y percepción AFIP.
                </small>
            </div>
            <button 
                // className={styles["cart-btn"]} 
                className="w-full h-[40px] bg-[#ff3b3c] text-white font-bold border-0 rounded-md hover:bg-[#ff5151]"
                id="buy" 
                type="button"
                >
                COMPRAR
            </button>
        </div>
      </>
    );
}
