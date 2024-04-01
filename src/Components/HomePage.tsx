import { PromotionImage, PromotionLoggin } from "./Promotions";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-32 gap-y-4">
        <PromotionLoggin />
          <div className="mt-32">
          <PromotionImage />
        </div>
      </div>
    </>
  );
}
