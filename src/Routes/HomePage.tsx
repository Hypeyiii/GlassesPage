import {PromotionImage, PromotionLoggin} from "../Components/Promotions";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-32 gap-y-4">
        <h1 className="text-xl md:text-5xl font-bold text-black dark:text-white animate-fade-in">
          Página principal
        </h1>
        <p className="text-black dark:text-white">
          Introduccion a mi página de lentes
        </p>
          <PromotionLoggin />
        <div className="mt-32">
          <PromotionImage />
        </div>
      </div>
    </>
  );
}
