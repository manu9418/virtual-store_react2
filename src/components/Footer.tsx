// import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      {/* <footer> */}
        {/* <div id="footer" className={styles["footer-container"]}> */}
          {/* <ul className={styles["footer-ul"]}>
            <li className={styles["footer-main-item"]}>
              <a className={styles["footer-a"]} href="./index.html"> */}
      <footer className="w-full h-min-[250px] bg-[#7525a7] flex flex-col items-center">
      {/* <div id="footer" className="w-[1080px] flex justify-between p-[10px]"> */}
        <div id="footer" 
          className="w-full flex flex-col justify-between items-center p-[10px]
            sm:flex-row sm:items-start
            lg:w-[1080px]">
          <ul className="w-[170px] list-none p-[10px]">
            <li className="font-bold pb-[20px] text-center sm:text-start">
              <a className="text-white no-underline" href="/">
                Ofertas
              </a>
            </li>
            {/* <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="./index.html"> */}
            <li className="py-[5px] px-0 text-center sm:text-start">
              <a className="text-white no-underline" href="/">
                Laptops
              </a>
            </li>
            {/* <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="./index.html"> */}
            <li className="py-[5px] px-0 text-center sm:text-start">
              <a className="text-white no-underline" href="/">
                Audio
              </a>
            </li>
            {/* <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="./index.html"> */}
            <li className="py-[5px] px-0 text-center sm:text-start">
              <a className="text-white no-underline" href="/">
                Auriculares
              </a>
            </li>
          </ul>
          {/* <ul className={styles["footer-ul"]}>
            <li className={styles["footer-main-item"]}>
              <a className={styles["footer-a"]} href="./index.html"> */}
          <ul className="w-[170px] list-none p-[10px]">
            <li className="font-bold pb-[20px] text-center sm:text-start">
              <a className="text-white no-underline" href="/">
                Cómo comprar
              </a>
            </li>
            {/* <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="./index.html"> */}
            <li className="py-[5px] px-0 text-center sm:text-start">
              <a className="text-white no-underline" href="/">                
                Formas de pago
              </a>
            </li>
            {/* <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="./index.html"> */}
            <li className="py-[5px] px-0 text-center sm:text-start">
              <a className="text-white no-underline" href="/">
                Envios
              </a>
            </li>
            {/* <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="./index.html"> */}
            <li className="py-[5px] px-0 text-center sm:text-start">
            <a className="text-white no-underline" href="/">             
                Devoluciones
              </a>
            </li>
          </ul>
          {/* <ul className={styles["footer-ul"]}>
            <li className={styles["footer-main-item"]}>
              <a className={styles["footer-a"]} href="./index.html"> */}
          <ul className="w-[170px] list-none p-[10px]">
            <li className="font-bold pb-[20px] text-center sm:text-start">
              <a className="text-white no-underline" href="/">
                Costos y tarifas
              </a>
            </li>
            {/* <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="./index.html"> */}
            <li className="py-[5px] px-0 text-center sm:text-start">
            <a className="text-white no-underline" href="/">
                Impuestos
              </a>
            </li>
            {/* <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="./index.html"> */}
            <li className="py-[5px] px-0 text-center sm:text-start">
            <a className="text-white no-underline" href="/">
                Facturación
              </a>
            </li>
          </ul>
          {/* <ul className={styles["footer-ul"]}>
            <li className={styles["footer-main-item"]}>
              <a className={styles["footer-a"]} href="./index.html"> */}
          <ul className="w-[170px] list-none p-[10px]">
            <li className="font-bold pb-[20px] text-center sm:text-start">
              <a className="text-white no-underline" href="/">
                Mis pedidos
              </a>
            </li>
            {/* <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="./index.html"> */}
            <li className="py-[5px] px-0 text-center sm:text-start">
              <a className="text-white no-underline" href="/">
                Pedir nuevamente
              </a>
            </li>
            {/* <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="./index.html"> */}
            <li className="py-[5px] px-0 text-center sm:text-start">
              <a className="text-white no-underline" href="/">
                Lista de deseos
              </a>
            </li>
          </ul>
          {/* <ul className={styles["footer-ul"]}>
            <li className={styles["footer-main-item"]}>
              <a className={styles["footer-a"]} href="./index.html"> */}
          <ul className="w-[170px] list-none p-[10px] hidden md:inline-block">
            <li className="font-bold pb-[20px] text-center sm:text-start">
              <a className="text-white no-underline" href="/">
                Garantía
              </a>
            </li>
          </ul>
        </div>
        {/* <div className={styles["footer-copyright"]}> */}
        <div className="w-full lg:w-[1080px] text-center text-white font-bold py-[30px] px-0 border-t-[1px] border-t-[#ba53fb]">
          Curso de HTML + CSS 2023
        </div>
      </footer>
    </>
  );
}
