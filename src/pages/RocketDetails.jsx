import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleRocket } from "../api/rockets";
import Loader from "../components/Loader";

const RocketDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rocket, setRocket] = useState(null);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRocket = async () => {
      try {
        const data = await getSingleRocket(id);
        setRocket(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    fetchRocket();
  }, [id]);

  if (loader) return <Loader />;
  if (error)
    return (
      <h2 className="text-red-500 text-3xl grid place-items-center h-dvh">
        Failed to fetch rocket details
      </h2>
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
      >
        &larr; Back
      </button>
      <h1 className="text-3xl font-bold mb-4">{rocket.rocket_name}</h1>

      <img
        src={rocket.flickr_images[0]}
        className="rounded-xl shadow-lg w-full h-80 object-cover mb-6"
      />

      <p className="text-gray-700 leading-relaxed">{rocket.description}</p>

      <div className="mt-6 space-y-1">
        <p>
          <strong>Cost per launch:</strong> ${rocket.cost_per_launch}
        </p>
        <p>
          <strong>First flight:</strong> {rocket.first_flight}
        </p>
        <p>
          <strong>Country:</strong> {rocket.country}
        </p>
      </div>
    </div>
  );
};

export default RocketDetails;
