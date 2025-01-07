import { createSlice } from "@reduxjs/toolkit";

const routedataSlice = createSlice({
  name: "routedata",
  initialState: {
    sourceid: 0,
    mainroutelist: [],
    destinationroutelist: [],
  },
  reducers: {
    setSourceId: (state, action) => {
      state.sourceid = action.payload;
      state.destinationroutelist = state.mainroutelist.filter(
        (x) => x.id == state.sourceid
      );
      //console.log(destinationroutelist);
    },
    setMainRouteList: (state, action) => {
      state.mainroutelist = action.payload;
    },
  },
});
export const { setSourceId, setMainRouteList } = routedataSlice.actions;
export default routedataSlice.reducer;
