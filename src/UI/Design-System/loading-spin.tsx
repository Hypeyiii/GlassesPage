import { IoGlassesOutline } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "../Components/Animations.css";

interface LoadingSpinProps {
  smallSize: number;
  mediumSize: number;
  gSmallSize: number;
  gMediumSize: number;
  text: string;
}

const LoadingSpin = ({ smallSize, mediumSize, gSmallSize, gMediumSize, text }: LoadingSpinProps) => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="flex items-center justify-center">
        <AiOutlineLoading3Quarters
          className={`spin absolute size-[${smallSize}px] md:size-[${mediumSize}px]`}
        />
        <IoGlassesOutline
          className={`size-[${gSmallSize}px] md:size-[${gMediumSize}px] items-center justify-center flex`}
        />
      </div>
      {text}
    </div>
  );
};
export default LoadingSpin;
