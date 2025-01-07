import WowBusShimmerComponent from "./WowBusShimmerComponent";
import { getIdsAndDestinations } from "../utils/getIdsAndDestinations";
import getSourceDestinationMappers from "../utils/getSourceDestinationMappersndDestinations";
import WowBusEnterSourceComponent from "./WowBusEnterSourceComponent";
import { Provider, useDispatch, useSelector } from "react-redux";
import { LEFTRIGHT_IMG_URL } from "../utils/constants";
import {
  setMainRouteList,
  setsourcedestinationmapperlist,
} from "../store/routedataSlice";
import wowBusStore from "../store/wowBusStore";
import WowBusEnterDestinationComponent from "./WowBusEnterDestinationComponent";
const WowBusBodyComponent = () => {
  const routelist = getIdsAndDestinations();
  const busrcdesinationmapperlist = getSourceDestinationMappers();
  const dispatch = useDispatch();
  dispatch(setMainRouteList(routelist));
  dispatch(setsourcedestinationmapperlist(busrcdesinationmapperlist));
  return null === routelist || null == busrcdesinationmapperlist ? (
    <WowBusShimmerComponent />
  ) : (
    <Provider store={wowBusStore}>
      <div
        className="bg-gradient-to-b from-cyan-200 to-cyan-300 p-2 m-2
    rounded-lg bg-cover bg-no-repeat bg-fixed h-screen"
      >
        {/*source destination selection section */}
        <div className="flex justify-center  border-2 m-2 pb-3 bg-gradient-to-b from-orange-100 to-orange-200 rounded-lg shadow-2xl">
          <WowBusEnterSourceComponent data={routelist} />
          <img className="w-8 h-5 text-center" src={LEFTRIGHT_IMG_URL} />
          <WowBusEnterDestinationComponent />
        </div>
        {/*source destination selection section */}
      </div>
    </Provider>
  );
};
export default WowBusBodyComponent;
