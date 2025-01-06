import ReactDOM from "react-dom/client";
const { createBrowserRouter, RouterProvider, Outlet } = require("react-router");
import WowBusHeaderComponent from "./components/WowBusHeaderComponent";
import WowBusAboutUsComponent from "./components/WowBusAboutUsComponent";
import WowBusBodyComponent from "./components/WowBusBodyComponent";
import WowBusContactUsComponent from "./components/WowBusContactUsComponent";
import WowBusErrorComponent from "./components/WowBusErrorComponent";
import { Provider } from "react-redux";
import wowBusStore from "./store/wowBusStore";
const WowBusAppLayout = () => {
  return (
    <Provider store={wowBusStore}>
      <div>
        <WowBusHeaderComponent />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <WowBusAppLayout />,
    children: [
      {
        path: "/",
        element: <WowBusBodyComponent />,
      },
      {
        path: "/aboutus",
        element: <WowBusAboutUsComponent />,
      },
      {
        path: "/contactus",
        element: <WowBusContactUsComponent />,
      },
    ],
    errorElement: <WowBusErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
