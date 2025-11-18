import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-dvh text-xl">
      <h2 className="text-2xl">404 | Page not Found</h2>
      <button
        className="mt-6 w-fit bg-blue-600 hover:bg-blue-800 text-white p-2 rounded-lg transition"
        onClick={() => navigate("/")}
      >
        Go to Home Page
      </button>
    </div>
  );
};
