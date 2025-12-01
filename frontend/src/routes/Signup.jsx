import {
  ChevronDown,
  Eye,
  EyeClosed,
  Leaf,
  Lock,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import usePasswordToggle from "../hooks/usePasswordToggle";

const SignUp = () => {
  const [showPassword, togglePasswordVisibility] = usePasswordToggle();
  const { register, handleSubmit, watch } = useForm();
  const selectedRole = watch("role", "consumer"); // default value

  const onSubmit = (data) => {
    console.log("FORM DATA:", data);
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center bg-background px-4">
      {/* Header */}
      <div className="flex flex-col items-center mb-3">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-200">
          <Leaf className="w-7 h-7 text-primary-foreground" />
        </div>

        <h1 className="text-2xl font-bold text-foreground mt-2">
          Join Farm2Home
        </h1>

        <p className="text-muted-foreground mt-1 text-sm">
          Create your account and start your journey
        </p>
      </div>

      {/* Card */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-card w-full max-w-2xl p-4 rounded-2xl shadow-lg border border-border"
      >
        {/* Role Selector */}
        {/* Role Selector */}
        <div className="grid grid-cols-2 rounded-xl border border-border overflow-hidden mb-6">
          {/* Consumer Button */}
          <Button
            asChild
            className="p-0 transition-all"
            variant={selectedRole === "consumer" ? "default" : "ghost"}
          >
            <label className="w-full py-2 text-center font-medium text-sm cursor-pointer">
              <input
                type="radio"
                value="consumer"
                {...register("role")}
                defaultChecked
                className="sr-only"
              />
              Consumer
            </label>
          </Button>

          {/* Farmer Button */}
          <Button
            asChild
            className="p-0 transition-all"
            variant={selectedRole === "farmer" ? "default" : "ghost"}
          >
            <label className="w-full py-2 text-center font-medium text-sm cursor-pointer">
              <input
                type="radio"
                value="farmer"
                {...register("role")}
                className="sr-only"
              />
              Farmer
            </label>
          </Button>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="transition-transform duration-200 hover:scale-[1.01]">
            <label className="text-sm font-medium text-foreground">
              Full Name
            </label>
            <div className="flex items-center gap-2 mt-0.5 border border-input bg-card rounded-xl px-3 py-1.5">
              <User className="text-muted-foreground w-5 h-5" />
              <input
                {...register("fullName")}
                type="text"
                placeholder="John Doe"
                className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground text-foreground text-sm"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="transition-transform duration-200 hover:scale-[1.01]">
            <label className="text-sm font-medium text-foreground">
              Phone Number
            </label>
            <div className="flex items-center gap-2 mt-0.5 border border-input bg-card rounded-xl px-3 py-1.5">
              <Phone className="text-muted-foreground w-5 h-5" />
              <input
                {...register("phone")}
                type="tel"
                placeholder="+91 9876543210"
                className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground text-foreground text-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div className="md:col-span-2 transition-transform duration-200 hover:scale-[1.01]">
            <label className="text-sm font-medium text-foreground">Email</label>
            <div className="flex items-center gap-2 mt-0.5 border border-input bg-card rounded-xl px-3 py-1.5">
              <Mail className="text-muted-foreground w-5 h-5" />
              <input
                {...register("email")}
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground text-foreground text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div className="md:col-span-2 transition-transform duration-200 hover:scale-[1.01]">
            <label className="text-sm font-medium text-foreground">
              Password
            </label>
            <div className="flex items-center gap-2 mt-0.5 border border-input bg-card rounded-xl px-3 py-1.5">
              <Lock className="text-muted-foreground w-5 h-5" />
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground text-foreground text-sm"
              />
              {showPassword ? (
                <Eye
                  className="text-muted-foreground w-5 h-5 cursor-pointer transition-transform duration-200 hover:scale-110"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <EyeClosed
                  className="text-muted-foreground w-5 h-5 cursor-pointer transition-transform duration-200 hover:scale-110"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>

          {/* State */}
          <div className="transition-transform duration-200 hover:scale-[1.01]">
            <label className="text-sm font-medium text-foreground">State</label>
            <div className="flex items-center justify-between mt-0.5 border border-input bg-card rounded-xl px-3 py-1.5">
              <select
                {...register("state")}
                className="flex-1 bg-transparent outline-none text-sm appearance-none"
              >
                <option value="">Select state</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="DL">Delhi</option>
              </select>
              <ChevronDown className="text-muted-foreground w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* City */}
          <div className="transition-transform duration-200 hover:scale-[1.01]">
            <label className="text-sm font-medium text-foreground">City</label>
            <div className="flex items-center justify-between mt-0.5 border border-input bg-card rounded-xl px-3 py-1.5">
              <select
                {...register("city")}
                className="flex-1 bg-transparent outline-none text-foreground text-sm appearance-none"
              >
                <option value="">Select city</option>
              </select>
              <ChevronDown className="text-muted-foreground w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full mt-6 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 active:scale-[0.98] transition">
          Create Account
        </button>

        {/* Login Redirect */}
        <p className="text-center text-sm text-muted-foreground mt-3">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary font-medium hover:underline cursor-pointer"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
