import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setThemeVariable } from "../store/slices/theme";
import Button from "./Button";

const DarkModeWrapper = ({ ...rest }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  // Initialize from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    dispatch(setThemeVariable(stored === "dark"));
  }, [dispatch]);

  // Persist when darkMode changes
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div
      className={`bg-background text-foreground min-h-screen ${
        darkMode ? "dark" : "light"
      }`}
      {...rest}
    />
  );
};

export const DarkModeButton = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <Button onClick={() => dispatch(setThemeVariable(!darkMode))}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
};

export default DarkModeWrapper;