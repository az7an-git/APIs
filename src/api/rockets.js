export const getAllRockets = async () => {
  const res = await fetch("https://api.spacexdata.com/v3/rockets");
  return res.json();
};

export const getSingleRocket = async (id) => {
  const res = await fetch(`https://api.spacexdata.com/v3/rockets/${id}`);
  return res.json();
};
