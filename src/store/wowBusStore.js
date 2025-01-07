import { configureStore } from "@reduxjs/toolkit";
import routedataReducer from "./routedataSlice";
const wowBusStore = configureStore({
  reducer: {
    routedata: routedataReducer,
  },
});
export default wowBusStore;
