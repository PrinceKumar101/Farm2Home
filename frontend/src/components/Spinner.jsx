import clsx from "clsx";

const Spinner = ({ color = "default", size = "md" }) => {
  return (
    <div
      className={clsx(
        "animate-spin rounded-full border-2 border-t-transparent",
        // Size variants
        {
          sm: "size-4",
          md: "size-5",
          lg: "size-6",
        }[size],

        // Color variants
        {
          default: "border-primary",
          ghost: "border-gray-400 dark:border-gray-600",
          danger: "border-foreground",
          white: "border-white",
        }[color]
      )}
    ></div>
  );
};

export default Spinner;
