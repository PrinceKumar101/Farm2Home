import { Leaf, Lock, Mail, Eye, EyeClosed } from "lucide-react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import usePasswordToggle from "../hooks/usePasswordToggle";

export const LoginPage = () => {
  const [showPassword, togglePasswordVisibility] = usePasswordToggle();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("LOGIN DATA:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center bg-background px-4"
    >
      {/* Logo */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
          <Leaf className="w-8 h-8 text-primary-foreground" />
        </div>

        <h1 className="text-3xl font-bold text-foreground mt-4">
          Welcome Back
        </h1>
        <p className="text-muted-foreground mt-1">
          Login to your Farm2Home account
        </p>
      </div>

      {/* Card */}
      <div className="bg-card w-full max-w-md p-8 rounded-2xl shadow-lg border border-border">
        {/* Email */}
        <label className="text-sm font-medium text-foreground">Email</label>
        <div className="flex items-center gap-2 mt-1 mb-4 border border-input bg-card rounded-xl px-3 py-2">
          <Mail className="text-muted-foreground w-5 h-5" />
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground text-foreground"
            {...register("email", { required: true })}
          />
        </div>

        {/* Password */}
        <label className="text-sm font-medium text-foreground">Password</label>
        <div className="flex items-center gap-2 mt-1 mb-4 border border-input bg-card rounded-xl px-3 py-2">
          <Lock className="text-muted-foreground w-5 h-5" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground text-foreground"
            {...register("password", { required: true })}
          />

          {showPassword ? (
            <Eye
              className="text-muted-foreground w-5 h-5 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <EyeClosed
              className="text-muted-foreground w-5 h-5 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>

        {/* Remember + Forgot */}
        <div className="flex justify-between items-center mb-6">
          <label className="flex items-center gap-2 text-sm text-foreground">
            <input
              type="checkbox"
              className="accent-primary w-4 h-4 cursor-pointer"
            />
            Remember me
          </label>

          <a className="text-primary text-sm hover:underline cursor-pointer">
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition">
          Login
        </button>

        {/* Signup link */}
        <p className="text-center text-sm text-muted-foreground mt-4">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-primary font-medium hover:underline cursor-pointer"
          >
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginPage;
