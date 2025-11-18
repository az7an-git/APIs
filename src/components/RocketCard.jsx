import { useNavigate } from "react-router-dom";

const RocketCard = ({ rocket }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-4">
      <img
        src={rocket.flickr_images[1]}
        alt={rocket.rocket_name}
        className="h-48 w-full object-cover rounded-lg"
      />

      <h2 className="text-xl font-semibold mt-4">{rocket.rocket_name}</h2>

      <p className="text-gray-600 text-sm mt-2 line-clamp-3">
        {rocket.description}
      </p>

      <button
        onClick={() => navigate(`/rocket/${rocket.rocket_id}`)}
        className="mt-6 w-full border border-blue-700 hover:bg-blue-600 text-blue-700 hover:text-white py-2 rounded-lg transition ease-in-out focus:bg-blue-800"
      >
        Read More...
      </button>
    </div>
  );
};

export default RocketCard;
