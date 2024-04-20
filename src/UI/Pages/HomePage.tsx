import {
  Carrousel,
  PromotionImage,
  PromotionLogin,
} from "../Components/Promotions";
import Section from "../Components/HomePage-Sections";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[75px] md:mt-32 gap-y-20 w-[80%] md:w-[70%] m-auto">
        <Carrousel />
        <Section category="hombre" collection="hombres" />
        <PromotionLogin />
        <Section category="mujer" collection="mujer" />
        <PromotionImage />
        <Section category="sol" collection="sol" />
        <Section category="vision" collection="vision" />
      </div>
    </>
  );
}
