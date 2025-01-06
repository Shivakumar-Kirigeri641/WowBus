import { configureStore } from "@reduxjs/toolkit";
import wowBusSliceReducer from "./wowBusSlice";

const wowBusStore = configureStore({
  reducer: {
    wowBusSlice: wowBusSliceReducer,
  },
});
export default wowBusStore;
