// import styles from "./Description.module.css"

//export default function Description({ product }) {
export default function Description(props: ProductProp) {
  const { product } = props;
    return (
      // <section className={styles["product-description-block"]}>
      //   <h1 className={styles["product-title"]}>{product.title}</h1>
      //   <form className={styles["product-selector"]}>
      //     <fieldset className={styles["product-fieldset"]}>
      //       <label className={styles["product-label"]} htmlFor="color">
      <section className="w-[340px] p-[10px] m-[10px] flex flex-col">
        <h1 className="text-[28px] font-bold mt-0 text-wrap">{product.title}</h1>
        <form className="mt-[30px]">
          <fieldset className="border-0 p-0 flex flex-col">
            <label className="text-[12px] font-bold" htmlFor="color">
              Color
            </label>
            {/* <select className={styles["product-select"]} id="color"> */}
            <select
            className="w-full h-[40px] bg-white rounded-[10px] border-1 border-[#eaeaea] m-0 mt-[10px] p-[10px]"
            id="color"
            >
              {product.colors.map((each) => (
                <option key={each} value="Silver">
                  {each}
                </option>
              ))}
            </select>
          </fieldset>
        </form>
        {/* <div className={styles["product-description"]}>
          <span className={styles["product-label"]}>Descripción</span>
          <p>{product.description}</p> */}
        <div className="mt-[30px]">
          <span className="text-[12px] font-bold">Descripción</span>
          <p className="text-[12px]">{product.description}</p>
        </div>
      </section>
    );
  }
  