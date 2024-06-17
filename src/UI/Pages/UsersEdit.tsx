import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Users } from "../Interface/Users";

const UsersEdit = () => {
  const { id } = useParams();
  const [user, setUser] = useState<Users | null>(null);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://glasses-page-api-rest-production.up.railway.app/users/${id}`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener producto", error);
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  const handleEdit = async () => {
    try {
      setLoading(true);
      await fetch(`https://glasses-page-api-rest-production.up.railway.app/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      setSuccess("Producto editado correctamente!");
      setLoading(false);
    } catch (error) {
      console.error("Error al editar producto", error);
      setLoading(false);
      setSuccess("Error al editar producto");
    }
  };

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="mt-32 text-black dark:text-white flex flex-col justify-center items-center gap-2 w-[90%] md:w-[85%] px-4 mx-auto">
      <h1>Edit User</h1>
      {success && <span className="text-green-300">{success}</span>}
      {loading ? (
        <div className="size-40 flex flex-col gap-2 text-black dark:text-white items-center justify-center">
          <AiOutlineLoading3Quarters className="spin size-32 text-black dark:text-white" />
          Loading...
        </div>
      ) : (
        <>
          <span className="flex flex-col md:flex-row gap-2 justify-start md:justify-between w-full md:w-1/3 items-start md:items-center">
            <label>Brand</label>
            <input
              className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-full md:w-[80%] text-sm"
              type="text"
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, email: e.target.value })
              }
            />
          </span>
          <span className="flex flex-col md:flex-row gap-2 justify-start md:justify-between w-full md:w-1/3 items-start md:items-center">
            <label>Username</label>
            <input
              className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-full md:w-[80%] text-sm"
              type="text"
              value={user.username}
              onChange={(e) =>
                setUser({ ...user, username: e.target.value })
              }
            />
          </span>
          <span className="flex flex-col md:flex-row gap-2 justify-start md:justify-between w-full md:w-1/3 items-start md:items-center">
            <label>Password</label>
            <input
              className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-full md:w-[80%] text-sm"
              type="password"
              value={user.password}
              onChange={(e) =>
                setUser({ ...user, password: e.target.value })
              }
            />
          </span>
          <span className="flex flex-col md:flex-row gap-2 justify-start md:justify-between w-full md:w-1/3 items-start md:items-center">
            <label>Role</label>
            <input
              className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-full md:w-[80%] text-sm"
              type="text"
              value={user.role}
              onChange={(e) =>
                setUser({ ...user, role: e.target.value })
              }
            />
          </span>
        </>
      )}
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default UsersEdit;
