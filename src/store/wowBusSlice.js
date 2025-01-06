import { createSlice } from "@reduxjs/toolkit";

const wowBusSlice = createSlice({
  name: "wowbusreservation",
  initialState: {
    reservationdata: [],
  },
  reducers: {
    createReservation: (state, action) => {
      console.log("createReservation");
    },
    cancelReservation: (state, action) => {
      console.log("cancelReservation");
    },
    viewReservationStatus: (state, action) => {
      console.log("viewReservationStatus");
    },
  },
});
export const { createReservation, cancelReservation, viewReservationStatus } =
  wowBusSlice.actions;
export default wowBusSlice.reducer;
