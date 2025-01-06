import { useEffect, useState } from "react";
import { ROUTELIST_URL } from "./constants";
export const getIdsAndDestinations = () => {
  const [routes, setroutes] = useState(null);
  const fetchdata = async () => {
    const data = await fetch(ROUTELIST_URL, { method: "POST" });
    const jsondata = await data.json();
    const ids = jsondata?.destinations.map((x) => x[1]);
    const names = jsondata?.destinations.map((x) => x[0]);
    const listroutdata = ids.map((id, index) => ({
      id: id,
      name: names[index],
    }));
    setroutes(listroutdata);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return routes;
};
