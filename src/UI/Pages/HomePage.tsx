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
        <Section category="man" collection="hombres" />
        <PromotionLogin />
        <Section category="woman" collection="mujer" />
        <PromotionImage />
        <Section category="Sun" collection="sol" />
        <Section category="Vision" collection="vision" />
      </div>
    </>
  );
}
