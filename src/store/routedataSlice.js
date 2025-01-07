import { createSlice } from "@reduxjs/toolkit";

const routedataSlice = createSlice({
  name: "routedata",
  initialState: {
    sourceid: 0,
    destinationid: 0,
    mainroutelist: [],
    templist: [],
    sourcedestinationmapperlist: [],
    destinationroutemapperlist: [],
  },
  reducers: {
    setDestinationId: (state, action) => {
      state.destinationid = action.payload;
    },
    setSourceId: (state, action) => {
      state.sourceid = action.payload;
      state.destinationroutemapperlist =
        state.sourcedestinationmapperlist.filter(
          (x) => x.origin.id === action.payload && null !== x.destination.name
        );
      state.destinationroutemapperlist = state.destinationroutemapperlist.map(
        (x) => ({ id: x.destination.id, name: x.destination.name })
      );
    },
    setMainRouteList: (state, action) => {
      state.mainroutelist = action.payload;
    },
    setsourcedestinationmapperlist: (state, action) => {
      state.sourcedestinationmapperlist = action.payload;
    },
  },
});
export const {
  setSourceId,
  setMainRouteList,
  setsourcedestinationmapperlist,
  setDestinationId,
} = routedataSlice.actions;
export default routedataSlice.reducer;
