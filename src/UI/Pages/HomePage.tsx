import { PromotionImage, PromotionLogin } from "../Components/Promotions";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-32 gap-y-4">
        <PromotionLogin />
        <div className="mt-20 md:mt-32">
          <PromotionImage />
        </div>
      </div>
    </>
  );
} 
