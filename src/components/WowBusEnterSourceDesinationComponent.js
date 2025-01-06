import { useState } from "react";
const WowBusEnterSourceDesinationComponent = (data) => {
  const { routeList, placeHolder } = data;
  const [searchtext, setsearchtext] = useState("");
  const [fitlerlist, setfilterlist] = useState([]);
  const [canShowRouteSuggession, setcanShowRouteSuggession] = useState(false);
  const HandleSelectedItem = (text) => {
    setsearchtext(text);
    setcanShowRouteSuggession(false);
  };
  return (
    <div>
      <input
        className="border-2 border-gray-500 p-2 rounded-md m-3 w-[98%] cursor-pointer"
        type="text"
        placeholder={placeHolder}
        onChange={(e) => {
          e.target.value;
          "" == searchtext
            ? setcanShowRouteSuggession(false)
            : setcanShowRouteSuggession(true);
          setsearchtext(e.target.value);
          setfilterlist(
            routeList.filter((x) =>
              x.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
          );
        }}
        onFocus={(e) => {
          e.target.select();
          setcanShowRouteSuggession(true);
          setfilterlist(routeList);
        }}
        value={searchtext}
      ></input>
      {canShowRouteSuggession && (
        <div className="overflow-y-scroll h-32 p-2 mx-4 border-2 border-blue-400 rounded-lg">
          <ul>
            {fitlerlist.map((x) => (
              <li className="cursor-pointer">
                <button
                  onClick={() => {
                    HandleSelectedItem(x.name);
                  }}
                >
                  {x.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default WowBusEnterSourceDesinationComponent;
