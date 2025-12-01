import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center bg-background px-4 text-center">
      <div className="space-y-4">
        {/* Large Decorative 404 */}
        <h1 className="text-9xl font-black text-muted/20 select-none">404</h1>
        
        <div className="relative -mt-16 sm:-mt-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Page not found</h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
          </p>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <NavLink
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Go back home
          </NavLink>
          <NavLink
            to="/contact" // Example link
            className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Contact support
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;