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
        <h2 className="text-2xl italic font-semibold p-2 m-2">Main Title</h2>
      </div>

      {/*navigation */}
      <div className="px-2">
        <ul className="px-5">
          <Link
            className="p-2 mx-2 border-gray-400 shadow-lg rounded-lg font-semibold cursor-pointer hover:border-b-2"
            to="/"
          >
            Home
          </Link>
          <Link
            className="p-2 mx-2 border-gray-400 shadow-lg rounded-lg font-semibold cursor-pointer hover:border-b-2"
            to="/busschedules"
          >
            Bus schedules
          </Link>
          <Link
            className="p-2 mx-2 border-gray-400 shadow-lg rounded-lg font-semibold cursor-pointer hover:border-b-2"
            to="/managebooking"
          >
            Manage booking
          </Link>
          <Link
            className="p-2 mx-2 border-gray-400 shadow-lg rounded-lg font-semibold cursor-pointer hover:border-b-2"
            to="/contactus"
          >
            Contact us
          </Link>
          <Link
            className="p-2 mx-2 border-gray-400 shadow-lg rounded-lg font-semibold cursor-pointer hover:border-b-2"
            to="/about"
          >
            About
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default WowBusHeaderComponent;
