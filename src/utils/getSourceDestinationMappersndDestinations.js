import { useEffect, useState } from "react";
import { BUS_SOURC_DESTINATION_MAPPING_URL } from "./constants";
export const getSourceDestinationMappersndDestinations = () => {
  const [routes, setroutes] = useState(null);
  const fetchdata = async () => {
    const data = await fetch(BUS_SOURC_DESTINATION_MAPPING_URL, {
      method: "POST",
    });
    const jsondata = await data.json();
    setroutes(jsondata);
    //console.log(listroutdata);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return routes;
};
export default getSourceDestinationMappersndDestinations;
