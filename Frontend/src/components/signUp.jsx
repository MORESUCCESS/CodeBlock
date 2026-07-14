import { React, useState} from "react";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/authContext";
import {useNavigate} from "react-router-dom";


const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const [backendError, setBackendError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  

  const {signUp} = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev)=>({
      ...prev,
      [name]: "",
    }));

    setBackendError("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Signup Values:", formData);

    // API integration
    setLoading(true); 
    try {
      await signUp(formData.name, formData.email, formData.password);
      navigate("/resources");
    } catch (error) {
        setBackendError(
          error.response?.data?.message ||
          error.message
        )
    }
    finally{
      setLoading(false);
    }
  };

  // clear backend error
  const clearBackendError = () =>{
    setBackendError("");
  }

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        bg-gray-50
        dark:bg-gray-950
        text-white
      "
    >
      <form
        onSubmit={handleSubmit}
        className="
          w-full
          max-w-md
          bg-white
          dark:bg-gray-900
          rounded-3xl
          shadow-xl
          p-8
          mt-20
          mb-20
        "
      >
        <h1
          className="
            text-3xl
            font-black
            text-gray-900
            dark:text-white
          "
        >
          Create Account
        </h1>

        <p
          className="
            mt-2
            text-gray-500
            dark:text-gray-400
          "
        >
          Join codeblock and start building faster.
        </p>

        {/* error message from the backend */}

        {
          backendError &&
          (<div className="text-xs bg-rose-200 text-rose-700 p-2 rounded-xl mt-2 relative px-3">
            {backendError}

            <p onClick={clearBackendError} className="absolute top-[3px] right-3 text-rose-700 font-bold text-lg cursor-pointer">x</p>
          </div>)
        }

        {/* Name */}
        <div className="mt-6">
          <label className="text-sm font-semibold">Name</label>

          <div
            className="
              mt-2
              flex
              items-center
              gap-3
              border
              rounded-xl
              px-4
              py-3
              dark:border-gray-700
            "
          >
            <User size={18} />

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="
                w-full
                outline-none
                bg-transparent
              "
            />
          </div>

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="mt-5">
          <label className="text-sm font-semibold">Email</label>

          <div
            className="
              mt-2
              flex
              items-center
              gap-3
              border
              rounded-xl
              px-4
              py-3
              dark:border-gray-700
            "
          >
            <Mail size={18} />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="
                w-full
                outline-none
                bg-transparent
              "
            />
          </div>

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mt-5">
          <label className="text-sm font-semibold">Password</label>

          <div
            className="
              mt-2
              flex
              items-center
              gap-3
              border
              rounded-xl
              px-4
              py-3
              dark:border-gray-700
            "
          >
            <Lock size={18} />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="
                w-full
                outline-none
                bg-transparent
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mt-5">
          <label className="text-sm font-semibold">Confirm Password</label>

          <div
            className="
              mt-2
              flex
              items-center
              gap-3
              border
              rounded-xl
              px-4
              py-3
              dark:border-gray-700
            "
          >
            <Lock size={18} />

            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              className="
                w-full
                outline-none
                bg-transparent
              "
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="text-gray-500"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {
          loading ?

           (<button
          type="submit"
          className="
            mt-8
            w-full
            py-3
            rounded-xl
            dark:bg-gray-500
            text-fade
            italic
            font-bold
            transition
            cursor-pointer
          "
        >
          please wait...
        </button>):

        (<button
          type="submit"
          className="
            mt-8
            w-full
            py-3
            rounded-xl
            dark:bg-gray-950
            text-white
            font-bold
            hover:scale-[1.02]
            transition
            cursor-pointer
          "
        >
          Create Account
        </button>)
           
        }

        <p
          className="
            text-center
            text-sm
            mt-5
            text-gray-500
          "
        >
          Already have an account?
          <a
            href="#"
            className="
              ml-1
              font-semibold
              text-black
              dark:text-white
            "
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
