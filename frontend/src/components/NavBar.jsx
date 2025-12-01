import { useState } from "react";
import { Link, NavLink } from "react-router"; // Assumed react-router-dom based on standard usage
import { DarkModeButton } from "./DarkMode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 1. Configuration Arrays
  // We separate data from UI to use .map() effectively
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Live Auctions", path: "/auctions" },
    { name: "Sell", path: "/sell" },
  ];

  const authLinks = [
    { name: "Login", path: "/login", variant: "ghost" },
    { name: "Sign Up", path: "/signup", variant: "primary" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <NavLink to="/" className="group flex items-center gap-2">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/images/logo.png"
                alt="Farm2Home"
                className="size-10 object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.target.style.display = "none";
                }} // Fallback if image missing
              />
              {/* Fallback Icon if image fails */}
              <div
                className="size-10 bg-primary/20 flex items-center justify-center text-primary rounded-lg"
                style={{ display: "none" }}
              >
                F2H
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Farm<span className="text-primary">2</span>Home
            </span>
          </NavLink>

          {/* Desktop Navigation - Mapped */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Right Section (Cart + Auth) - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {/* Cart Icon */}
            <button className="relative rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 8m10 0l2 8M9 21h6"
                />
              </svg>
              <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full border border-background bg-destructive"></span>
            </button>

            {/* Auth Buttons - Mapped */}
            <div className="flex items-center gap-2">
              {authLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <DarkModeButton />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <DarkModeButton />
            <button className="text-muted-foreground transition-colors hover:text-primary">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 8m10 0l2 8M9 21h6"
                />
              </svg>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-muted-foreground hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* We use the same arrays here to ensure consistency with Desktop */}
      {isOpen && (
        <div className="absolute w-full border-t border-border bg-background shadow-lg md:hidden">
          <div className="flex flex-col space-y-2 px-4 py-4">
            {/* Mobile Nav Links */}
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile Auth Links */}
            <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
              {authLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    // Mobile specific styling overrides
                    isActive
                      ? "block w-full rounded-lg bg-primary px-4 py-2 text-center font-medium text-primary-foreground hover:opacity-90"
                      : "block w-full rounded-lg border border-input px-4 py-2 text-center font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
