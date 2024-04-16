import { FaUser } from "react-icons/fa";
import { useSubmit } from "../Hooks/useSubmit";

export const Loggin = () => {
  const { username, email } = useSubmit();
  return (
    <div
      className="mt-24 md:mt-32 text-black dark:text-white flex flex-col gap-2 items-center justify-center w-[70%] m-auto h-auto
    "
    >
      <p>Tú perfil</p>
      <div className="p-2 flex justify-center items-center bg-black/70 dark:bg-white/70 rounded-xl text-white dark:text-black">
        <div className="py-5 px-8 border-[1px] border-black dark:border-white/30 rounded-xl bg-black dark:bg-white flex flex-col gap-1 justify-center items-center text-center">
          <div className="rounded-full size-32 border-[1px] border-white/30 dark:border-black/50 flex items-center justify-center text-white dark:text-black">
            <FaUser className="size-20" />
          </div>
          <p className="text-base md:text-xl font-bold">{username}</p>
          <p className="text-sm md:text-lg font-light">{email}</p>
        </div>
      </div>
    </div>
  );
};
export default Loggin;
