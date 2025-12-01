import { useState } from "react";

const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible((prev) => !prev);

  return [visible, toggle];
};
export default usePasswordToggle;
