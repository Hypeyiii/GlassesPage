import { BiCheckCircle } from "react-icons/bi";
import "../Components/Animations.css";
import { useSetMobile } from "../Hooks/useSetMobile";

export interface NotificacionAddedProps {
  isAdded: boolean;
  addedText: string;
}

const NotificationAdded: React.FC<NotificacionAddedProps> = ({
  isAdded,
  addedText,
}) => {
  const { isMobile } = useSetMobile();
  return (
    <div className="fixed top-0 md:top-auto md:bottom-0 right-0 left-0 w-fit m-auto z-[5000]">
      <div
        className={`${
          isAdded
            ? isMobile
              ? "slide-in-top visible"
              : "slide-in-bottom visible"
            : isMobile
            ? "slide-out-top invisible"
            : "slide-out-bottom invisible"
        } z-50 bg-black dark:bg-white text-white transition-all
             dark:text-black p-2 flex flex-row gap-x-2 items-center justify-center w-fit mx-auto`}
      >
        <BiCheckCircle className="size-5" />
        <p className="font-bold font-sans text-sm">{addedText}</p>
      </div>
    </div>
  );
};
export default NotificationAdded;
