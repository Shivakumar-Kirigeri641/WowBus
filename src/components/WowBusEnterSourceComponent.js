import { useState, useRef, useEffect } from "react";
import isValidRouteSelected from "../utils/isValidRouteSelected";
import { useDispatch, useSelector } from "react-redux";
import { setSourceId } from "../store/routedataSlice";
const WowBusEnterSourceComponent = ({ data }) => {
  const dispatch = useDispatch();
  const [searchtext, setsearchtext] = useState("");
  const [showSuggessions, setshowSuggessions] = useState(false);
  const [IsValidRoute, setIsValidRoute] = useState(true);
  const suggessions = data.filter((x) =>
    x.name.toLowerCase().includes(searchtext.toLowerCase())
  );
  const autoCompleteRef = useRef();
  useEffect(() => {
    const HandleOutSideClick = (e) => {
      if (
        autoCompleteRef.current &&
        !autoCompleteRef.current.contains(e.target)
      ) {
        setshowSuggessions(false);
      }
    };
    document.addEventListener("click", HandleOutSideClick);
    return () => {
      document.removeEventListener("click", HandleOutSideClick);
    };
  }, []);
  return (
    <div ref={autoCompleteRef} className="p-3">
      <div>
        <div className="p-2">Source:</div>
        <input
          className="m-2 p-2 w-full rounded-lg bg-gradient-to-b from-yellow-100 to-yellow-200 outline-none border-2 border-gray-300 hover:border-3 hover:border-gray-400 hover:bg-gradient-to-t"
          type="text"
          value={searchtext}
          placeholder="Where you get-in?"
          onChange={(e) => {
            setsearchtext(e.target.value);
            setIsValidRoute(isValidRouteSelected({ data, searchtext }));
            if (IsValidRoute) {
              const routeidlist = data.filter(
                (route) =>
                  route.name.toLowerCase() == e.target.value.toLowerCase()
              );
              dispatch(setSourceId(routeidlist[0].id));
            }
          }}
          onFocus={() => {
            setshowSuggessions(true);
          }}
          onBlur={() => {
            //setIsValidRoute(isValidRouteSelected({ data, searchtext }));
          }}
        ></input>
        {!IsValidRoute && (
          <div className="text-sm font-semibold text-red-600">
            Invalid source
          </div>
        )}
        {showSuggessions && (
          <div className="border-2 border-gray-300 rounded-md mx-2 w-full bg-gradient-to-b from-yellow-100 to-yellow-200">
            <ul className="">
              {suggessions.map((x) => (
                <li
                  key={x.id}
                  className="p-2 cursor-pointer"
                  onClick={() => {
                    setshowSuggessions(false);
                    setIsValidRoute(true);
                    setsearchtext(x.name);
                    const routeidlist = data.filter(
                      (route) =>
                        route.name.toLowerCase() == x.name.toLowerCase()
                    );
                    dispatch(setSourceId(routeidlist[0].id));
                  }}
                >
                  {x.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default WowBusEnterSourceComponent;
