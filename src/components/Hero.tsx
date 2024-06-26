// import styles from "./Hero.module.css";

export default function Hero({ first, second }) {
  return (
    <>
      {/* <section className={styles["hero-section"]}> */}
      <section className="h-[200px] flex justify-center bg-[url('/hero_bg.png')] bg-cover bg-center"> 
        {/* <article className={styles["hero-title"]}> */}
        <article className="w-[1080px] flex flex-col items-start justify-center ps-[20px]">
          {/* <span className={styles["hero-span"]}>{first}</span> */}
          <span className="text-white font-bold text-[20px]">{first}</span>
          {/* <span className={styles["hero-span"]}>{second}</span> */}
          <span className="text-white font-bold text-[50px] leading-[30px]">{second}</span>
        </article>
      </section>
    </>
  );
}
