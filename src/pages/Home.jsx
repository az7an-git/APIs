import { useEffect, useState } from "react";
import { getAllRockets } from "../api/rockets";
import RocketCard from "../components/RocketCard";
import Loader from "../components/Loader";

const Home = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllRockets();
        setData(response);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, []);

  if (loader) return <Loader />;
  if (error)
    return (
      <h2 className="text-red-500 text-xl text-center">Failed to fetch data</h2>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {data.map((rocket) => (
          <RocketCard key={rocket.rocket_id} rocket={rocket} />
        ))}
      </div>
    </div>
  );
};

export default Home;
