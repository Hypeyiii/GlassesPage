import { useSubmit } from "../Hooks/useSubmit";

const Account = () => {
    const {username} = useSubmit();
    return (
        <div>
            <h1>Nombre de usuario: {username}</h1>
        </div>
    );
}
export default Account;