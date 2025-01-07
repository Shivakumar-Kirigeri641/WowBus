import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
const WowBusHeaderComponent = () => {
  return (
    <div className="flex mb-4 justify-between align-middle items-center border-2 border-gray-200 shadow-lg">
      {/*logo */}
      <Link to="/">
        <div className="w-[5rem] m-1 cursor-pointer">
          <img
            className="z-0  rounded-lg border-2 border-blue-300"
            src={LOGO_URL}
          ></img>
        </div>
      </Link>

      {/*title */}
      <div>
        <h2 className="text-2xl italic font-semibold p-2 m-2">
          Welcome to{" "}
          <span className="text-2xl text-blue-600 font-bold">
            WOW BUS RESERVATION
          </span>
        </h2>
        <h3 className="italic text-purple-600 font-bold text-center pb-2">
          A perfect spot for your journey
        </h3>
      </div>

      {/*navigation */}
      <div className="px-2">
        <Link
          className="w-10 px-8 pb-3 pt-3 mx-2 border-gray-400 shadow-lg rounded-lg font-semibold cursor-pointer hover:border-b-2"
          to="/"
        >
          Home
        </Link>
        <Link
          className="px-8 pb-3 pt-3  mx-2 border-gray-400 shadow-lg rounded-lg font-semibold cursor-pointer hover:border-b-2"
          to="/busschedules"
        >
          Bus schedules
        </Link>
        <Link
          className="px-8 pb-3 pt-3  mx-2 border-gray-400 shadow-lg rounded-lg font-semibold cursor-pointer hover:border-b-2"
          to="/managebooking"
        >
          Manage booking
        </Link>
        <Link
          className="px-8 pb-3 pt-3  mx-2 border-gray-400 shadow-lg rounded-lg font-semibold cursor-pointer hover:border-b-2"
          to="/contactus"
        >
          Contact us
        </Link>
        <Link
          className="px-8 pb-3 pt-3  mx-2 border-gray-400 shadow-lg rounded-lg font-semibold cursor-pointer hover:border-b-2"
          to="/about"
        >
          About
        </Link>
      </div>
    </div>
  );
};
export default WowBusHeaderComponent;
