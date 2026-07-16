import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const {logIn} = useAuth();

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
    }))
  };

  const validateForm = () => {
    const newErrors = {};

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

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Login Values:", formData);

    // Authentication API 

    setLoading(true);
    try {
      await logIn(formData.email, formData.password);
      navigate("/resources")
      
    } catch (error) {
      setBackendError(
        error.response?.data?.message || error.message
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
        bg-[#050505]
        dark:bg-[#050505]
        text-white
      "
    >
      <form
        data-aos="zoom-in"
        onSubmit={handleSubmit}
        className="
          w-full
          max-w-md
          bg-white
          dark:bg-[#050505]/70
          border
          border-violet-600/40
          backdrop-blur-xl
          rounded-3xl
          shadow-xl
          p-8
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
          Welcome Back
        </h1>

        <p
          className="
            mt-2
            text-gray-500
            dark:text-gray-400
          "
        >
          Login to your codeblock account.
        </p>

         {/* error message from the backend */}

        {
          backendError &&
          (<div className="text-xs bg-rose-200 text-rose-700 p-2 rounded-xl mt-2 relative px-3">
            {backendError}

            <p onClick={clearBackendError} className="absolute top-[3px] right-3 text-rose-700 font-bold text-lg cursor-pointer">x</p>
          </div>)
        }

        {/* Email */}

        <div className="mt-6">
          <label
            className="
              text-sm
              font-semibold
            "
          >
            Email
          </label>

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
            <p
              className="
                text-red-500
                text-sm
                mt-1
              "
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* Password */}

        <div className="mt-5">
          <label
            className="
              text-sm
              font-semibold
            "
          >
            Password
          </label>

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
            <p
              className="
                text-red-500
                text-sm
                mt-1
              "
            >
              {errors.password}
            </p>
          )}
        </div>

        {/* Forgot password */}

        <div
          className="
            mt-4
            flex
            justify-end
          "
        >
          <a
            href="#"
            className="
              text-sm
              font-semibold
              text-gray-600
              dark:text-gray-300
              hover:text-black
            "
          >
            Forgot password?
          </a>
        </div>

        {
          loading ? 
          (<button
          type="submit"
          className="
            mt-7
            w-full
            py-3
            rounded-xl
            dark:bg-gray-500
            text-white
            font-bold
            hover:scale-[1.02]
            transition
            italic
            cursor-pointer
          "
        >
          please wait...
        </button>):

        (<button
          type="submit"
        className="
                  px-7
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  to-blue-600
                  hover:scale-105
                  transition
                  shadow-xl
                  shadow-violet-600/20
                  text-white
                  font-semibold
                  cursor-pointer
                  w-full
                  mt-7
                  duration-300
                "
        >
          Login
        </button>)
        }

        <p
          className="
            text-center
            text-sm
            mt-7
            text-gray-500
          "
        >
          Don't have an account?
          <Link
            to={"/signup"}
            className="
              ml-1
              font-semibold
              text-black
              dark:text-white
            "
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
