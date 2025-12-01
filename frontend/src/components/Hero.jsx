import { ArrowRight, Search } from "lucide-react";
import SearchBar from "../components/Search.jsx";
import Button from "./Button.jsx";
const Hero = () => {
  return (
    <section className="bg-linear-to-b from-background to-accent py-24 px-4 min-h-[calc(100vh-5rem)] sm:px-6 lg:px-8 ">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Fresh from
          <span className="text-green-600 block sm:inline">Farm to Home</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Connect directly with local farmers. Buy fresh produce, participate in
          live auctions.
        </p>

        <div className="relative w-full max-w-xl mx-auto mb-10">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>

          <input
            type="text"
            className="block w-full  border border-gray-300 rounded-full py-3 pl-12 pr-28 leading-5 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-md shadow-sm"
            placeholder="Search fresh produce..."
          />

          <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
            <Button className="rounded-xl">Search</Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all hover:gap-2">
            Browse Products
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </button>

          <button className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
            Start Selling
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
