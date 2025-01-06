import WowBusShimmerComponent from "./WowBusShimmerComponent";
import { getIdsAndDestinations } from "../utils/getIdsAndDestinations";
import WowBusEnterSourceDesinationComponent from "./WowBusEnterSourceDesinationComponent";
import { BUS_BG_URL } from "../utils/constants";
const WowBusBodyComponent = () => {
  const routlist = getIdsAndDestinations();
  return null === routlist ? (
    <WowBusShimmerComponent />
  ) : (
    <div>
      <WowBusEnterSourceDesinationComponent
        routeList={routlist}
        routetype="source"
        placeHolder="Enter source"
      />
      <WowBusEnterSourceDesinationComponent
        routeList={routlist}
        routetype="destination"
        placeHolder="Enter destination"
      />
    </div>
  );
};
export default WowBusBodyComponent;
