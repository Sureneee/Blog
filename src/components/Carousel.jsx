import { useState } from "react";
import { CarouselContent } from "./CarouselContent";

const carouselImage1 = "https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fCLy5GghCAPtYF~~U28~GaAdAp88xIeWT8FSkxHLq4JKnZuK1Ax07wga4n6pArK3wCb0p3KuijpLEmUvLcVvF5JxOkJWk9AU1rXxAtZd4woX~Gpb6eSSvDZZqMcP8h-3zhg9ut2mf4VzWiIiDHKoa9NFXk8w0G04hXxZ2xt~73IMrGSXvFTz~kv0Vk4MPJFtZHNiElyvYHEdlUlU9HVpQZdHPzvhc2XEN6DiTGUzQFh~QgwOE1h-gKcycyMG3CwVSq-PGcJpBzOKf20idyHPjhXZtUuuqxXW56q6b~~6JJETVtLbxz~ERtCcjXI3euAOxRmG8ebg83eq01thZq~zEg__";
const carouselImage2 = "https://s3-alpha-sig.figma.com/img/7465/4a8f/67369b797c8fb2e96a533fd515fb2939?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eR9T678lH5NmwfDTe6yRWXlAe8zperPTHPCLwvB0HPZmNh3Lbkjj2Al9VbL9mZfDu5X2wQ-cESdyMqgtxd4tB~NoTvKnp~Wwk52Rjr5CiSeUX0bjJgI3VUcdFId1tkegx~Kid47O9763PMH~VfZXlISb2D37iLEWPWy-PmVEVONQBkdXWisXeidu7wjWNV3hkH4shYudzDQsM-73RaMiULbU3uVg0rHLKTYFtEx~0GG-os405KBI0U6J8yqlIka7EOHthEqwl07Te-DF9-gaS9B7XhbGBGszLwmRQO5M9fGYFBgZH8h1-zoaOKna53UZOWTzzgyL6ML~F~a4HjUUdg__";
const carouselImage3 = "https://s3-alpha-sig.figma.com/img/fd32/a56d/d484b871abb15e732abb0a69f2ccd525?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TvAb~4j1sPoNpZphDIOLanQv6HQgXkY~Jm3Xp6U3DTmrZC5Pn3zzYeNRzdoBajFrSozP-0W5zYFqc7ticVMrtq8Qzq45YW9Uk15sGMpTrXojeWAajnOkxcErUBYkhthMsPgNz6r-VWW0ZbDTil~SFng62eBcw-W~0~g03coYkdqCceJwjdRZ3xuu1LoGRhoZQCjLJ~6WO82X~px27EN31aZvbrj1sHikWowLRQE0Z67jU2NYhfjLeDt8zzZKaM09mYJdbM3y1ogeluQuvRec15NHSEv-9Oq1rzKwUPz1jCynvvUD~L9DAR2BUoM~t1fN~Izp9o4I7aK1r3kBUNKqdg__";

const styles = {
    imageStyle: "max-w-[1216px] h-[600px] shrink-0 rounded-xl",
    section: "max-w-[1200px] overflow-hidden",
    sliderContainer: "flex transition-transform duration-500 ease-out",
    buttonsContainer: "flex gap-[9px] mt-[11px] justify-end",
    button: "size-10 rounded-md border-[1px] border-solid border-[#696A75] flex items-center justify-center",
    
}
const backIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="17"
      viewBox="0 0 9 17"
      fill="none"
    >
      <path
        d="M8.5 16L1 8.5L8.5 1"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  const forwardIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="17"
      viewBox="0 0 9 17"
      fill="none"
    >
      <path
        d="M1 1L8.5 8.5L1 16"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
const mockData = [
    {
    image: carouselImage1,
    label: "Technology",
    title: "Grid system for better Design User Interface",
    date: "July 20, 2022",
    },
    {
    image: carouselImage2,
    label: "Technology",
    title: "Grid system for better Design User Interface",
    date: "July 20, 2022",
    },
    {
    mage: carouselImage3,
    label: "Technology",
    title: "Grid system for better Design User Interface",
    date: "July 20, 2022",
    },
]

export const Carousel = () => {
    let [currentIndex, setCurrentIndex] = useState(0);

  const handleClickBack = () =>
    setCurrentIndex(
      currentIndex === 0 ? mockData.length - 1 : currentIndex - 1,
    );

  const handleClickForward = () =>
    setCurrentIndex(
      currentIndex === mockData.length - 1 ? 0 : currentIndex + 1,
    );
    return (
      <section className={styles.section}>
      <div
        className={styles.sliderContainer}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {mockData.map((data, index) => {
          return <CarouselContent key={index} {...data} />;
        })}
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.button} onClick={handleClickBack}>
          {backIcon}
        </div>
        <div className={styles.button} onClick={handleClickForward}>
          {forwardIcon}
        </div>
      </div>
    </section>
    )
}