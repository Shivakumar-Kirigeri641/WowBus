import { useState } from "react";
const WowBusEnterSourceDesinationComponent = (data) => {
  const { routeList, routetype, placeHolder } = data;
  const [searchtext, setsearchtext] = useState("");
  const [fitlerlist, setfilterlist] = useState([]);
  const [canShowRouteSuggession, setcanShowRouteSuggession] = useState(false);
  const HandleSelectedItem = (text) => {
    setsearchtext(text);
    setcanShowRouteSuggession(false);
  };
  return (
    <div>
      <h3></h3>
    </div>
  );
};
export default WowBusEnterSourceDesinationComponent;
