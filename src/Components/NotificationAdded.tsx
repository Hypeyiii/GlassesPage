import { BiCheckCircle } from "react-icons/bi";
import "./NotificationAdded.css";

export default function NotificationAdded({ isAdded, addedText }) {
  return (
    <div className="fixed top-0 left-0 mt-[65px] z-40">
      <div
        className={`${
        isAdded ? "slide-in-left visible" : "slide-out-left visible"
        } z-50 bg-black dark:bg-white text-white
             dark:text-black p-2 flex flex-row gap-x-2 items-center justify-center w-fit mx-auto`}
      >
        <BiCheckCircle className="size-5" />
        <p className="font-bold font-sans text-sm">{addedText}</p>
      </div>
    </div>
  );
}
