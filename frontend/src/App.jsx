import { Provider } from "react-redux";
import Routes from "./routes/BrowserRouter";
import { RouterProvider } from "react-router";

const App = () => {
  return (
    <>
      {/* <Provider store={store}> */}  // Redux provider wrapper uncomment when using redux
        <RouterProvider router={Routes} />
      {/* </Provider> */}
    </>
  );
};
export default App;
