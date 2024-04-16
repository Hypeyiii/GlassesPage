import SingIn from "./SingIn";
import Account from "./Account";
import { useSubmit } from "../Hooks/useSubmit";

const MyAccount = () => {
    const {isLogged} = useSubmit();
  return(
    <div className="mt-32 text-black dark:text-white">
       {
        isLogged ? <Account/> : <SingIn/>
       }
    </div>
  )
};
export default MyAccount;
