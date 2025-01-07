import WowBusShimmerComponent from "./WowBusShimmerComponent";
import { getIdsAndDestinations } from "../utils/getIdsAndDestinations";
import WowBusEnterSourceComponent from "./WowBusEnterSourceComponent";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setMainRouteList } from "../store/routedataSlice";
import wowBusStore from "../store/wowBusStore";
const WowBusBodyComponent = () => {
  const routelist = getIdsAndDestinations();
  const dispatch = useDispatch();
  dispatch(setMainRouteList(routelist));
  return null === routelist ? (
    <WowBusShimmerComponent />
  ) : (
    <Provider store={wowBusStore}>
      <div
        className="bg-gradient-to-b from-cyan-200 to-cyan-300 p-2 m-2
    rounded-lg bg-cover bg-no-repeat bg-fixed h-screen"
      >
        {/*source destination selection section */}
        <div className="flex justify-center bg-gradient border-2 m-2 pb-3">
          <WowBusEnterSourceComponent data={routelist} />
        </div>
        {/*source destination selection section */}
      </div>
    </Provider>
  );
};
export default WowBusBodyComponent;
