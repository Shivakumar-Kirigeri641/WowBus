import WowBusShimmerComponent from "./WowBusShimmerComponent";
import { getIdsAndDestinations } from "../utils/getIdsAndDestinations";
import WowBusEnterSourceDesinationComponent from "./WowBusEnterSourceDesinationComponent";
const WowBusBodyComponent = () => {
  const routlist = getIdsAndDestinations();
  return null === routlist ? (
    <WowBusShimmerComponent />
  ) : (
    <div>
      <WowBusEnterSourceDesinationComponent
        routeList={routlist}
        placeHolder="Enter source"
      />
      <WowBusEnterSourceDesinationComponent
        routeList={routlist}
        placeHolder="Enter destination"
      />
    </div>
  );
};
export default WowBusBodyComponent;
