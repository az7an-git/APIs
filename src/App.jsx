import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.spacexdata.com/v3/rockets");
        const response = await res.json();

        setData(response);
        setLoader(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoader(false);
      }
    };

    const delay = setTimeout(() => {
      fetchData();
    }, 2000);
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">SpaceX Rockets</h1>

      {loader && <h2 className="text-center text-xl">Loading...</h2>}
      {error && (
        <h2 className="text-center text-red-500 text-xl">
          Failed to fetch data
        </h2>
      )}

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {data.map((rocket) => (
          <div
            key={rocket.rocket_id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-4"
          >
            <img
              src={rocket.flickr_images[1]}
              alt={rocket.rocket_name}
              className="h-48 w-full object-cover rounded-lg"
            />

            <h2 className="text-xl font-semibold mt-4">{rocket.rocket_name}</h2>

            <p className="text-gray-600 text-sm mt-2 line-clamp-3">
              {rocket.description}
            </p>

            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
