import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./Utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import Watchpage from "./components/Watchpage";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "watch",
        element: <Watchpage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <>
        <Head />
        <RouterProvider router={approuter} />
      </>
    </Provider>
  );
}

export default App;
