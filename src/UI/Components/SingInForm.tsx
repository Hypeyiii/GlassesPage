import { useSubmit } from "../Hooks/useSubmit";

const SingInForm = () => {
  const {
    username,
    email,
    password,
    setUsername,
    setEmail,
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
    <div className="text-black dark:text-white flex flex-col justify-center items-center gap-2 h-full rounded-tr-xl rounded-br-xl">
      <div className="my-5 text-black flex flex-col gap-1">
      <h1 className="text-sm md:text-2xl">Crear una cuenta</h1>
      <p className="text-xs md:text-base">
        ¡Disfrutarás de ofertas exclusivas, acceso prioritario y servicios
        especiales!
      </p>
      </div>
      <form
        className="flex flex-col gap-3 w-fit text-white dark:text-black [&>input]:px-4 [&>input]:py-2 [&>input]:rounded-full [&>input]:border-[1px] [&>input]:border-black/50"
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
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          Registrarte
        </button>
      </form>
    </div>
  );
};
export default SingInForm;
