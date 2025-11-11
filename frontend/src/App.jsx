import { Provider } from "react-redux";
import Routes from "./routes/BrowserRouter";
import { RouterProvider } from "react-router";
import store from "./store/store";
import DarkModeWrapper from "./components/DarkMode";

const App = () => {
  return (
    <>
      <Provider store={store}>
        {/* Redux provider wrapper uncomment when using redux */}
        <DarkModeWrapper id="dark-mode-wrapper">
          <RouterProvider router={Routes} />
        </DarkModeWrapper>
      </Provider>
    </>
  );
};
export default App;
