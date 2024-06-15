import SingIn from "./SingIn";
import Account from "./Account";
import { useContext } from "react";
import { AuthContext } from "../Context/authContext";

const MyAccount = () => {
  const { isLogged } = useContext(AuthContext);
  return (
    <div className="mt-32 text-black dark:text-white">
      {isLogged ? <Account /> : <SingIn />}
    </div>
  );
};
export default MyAccount;
