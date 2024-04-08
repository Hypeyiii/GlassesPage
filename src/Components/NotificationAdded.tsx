import { BiCheckCircle } from "react-icons/bi";
import "./Animations.css";

export interface NotificacionAddedProps {
  isAdded: boolean;
  addedText: string;
}

const NotificationAdded: React.FC<NotificacionAddedProps> = ({ isAdded, addedText }) => {
  return (
    <div className="fixed bottom-0 right-0 left-0 mt-[65px] z-50">
      <div
        className={`${
        isAdded ? "slide-in-bottom visible" : "slide-out-bottom invisible"
        } z-50 bg-black dark:bg-white text-white transition-all
             dark:text-black p-2 flex flex-row gap-x-2 items-center justify-center w-fit mx-auto`}
      >
        <BiCheckCircle className="size-5" />
        <p className="font-bold font-sans text-sm">{addedText}</p>
      </div>
    </div>
  );
}
export default NotificationAdded;
