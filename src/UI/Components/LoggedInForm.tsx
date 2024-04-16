import { useSubmit } from "../Hooks/useSubmit";

const LoggedInForm = () => {
  const {
    username,
    email,
    password,
    setUsername,
    setPassword,
    login,
  } = useSubmit();

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (username && email && password) {
      login();
    } else {
      alert("Please fill in all the fields");
    }
  };

  return (
    <div className="text-black dark:text-white flex flex-col justify-center items-center gap-2 h-full rounded-tr-xl rounded-br-xl w-full">
      <h1 className="text-sm md:text-xl text-black">Iniciar sesión</h1>
      <form
        className="flex flex-col gap-3 text-white dark:text-black [&>input]:px-4 [&>input]:py-2 [&>input]:rounded-full [&>input]:border-[1px] [&>input]:border-black/50"
        onSubmit={handleSubmit}
      >
        <input
          className="bg-gray-200 dark:bg-white"
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="bg-gray-200 dark:bg-white"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 border bg-gray-600 dark:bg-white"
        >
           Iniciar sesión
        </button>
      </form>
    </div>
  );
};
export default LoggedInForm;
