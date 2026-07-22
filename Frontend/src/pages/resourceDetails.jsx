import React, { useState } from "react";
import {
  Code2,
  Check,
  ShoppingCart,
  Star,
  ShieldCheck,
  Download,
} from "lucide-react";

const ResourceDetails = () => {
  const [quantity] = useState(1);

  const resource = {
    title: "Authentication Kit",

    description:
      "A production-ready authentication system designed for modern web applications. Includes login, signup, password reset, role management and protected routes.",

    price: 29,

    stack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],

    features: [
      "Complete Login System",
      "Signup & Validation",
      "Protected Routes",
      "User Roles",
      "Password Reset",
      "Clean Folder Structure",
    ],
  };

  return (
    <div
      className="
        min-h-screen
        bg-[#050505]/50
        bg-[#050505]
        px-6
        py-16
        text-white
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-12
        "
      >
        {/* Preview */}

        <div>
          <div
            className="
              h-[420px]
              rounded-3xl
              bg-white
              dark:bg-white/5
              flex
              items-center
              justify-center
              shadow-sm
            "
          >
            <Code2 size={90} />
          </div>

          <div
            className="
              mt-6
              grid
              grid-cols-3
              gap-4
            "
          >
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="
                  h-24
                  rounded-2xl
                  bg-white
                  dark:bg-white/5
                  cursor-pointer
                "
              />
            ))}
          </div>
        </div>

        {/* Details */}

        <div>
          <div
            className="
              flex
              items-center
              gap-2
              text-sm
              text-yellow-500
            "
          >
            <Star size={18} className="fill-current" />
            5.0 Rating
          </div>

          <h1
            className="
              mt-5
              text-5xl
              font-black
              text-gray-900
              dark:text-gray-200
            "
          >
            {resource.title}
          </h1>

          <p
            className="
              mt-5
              text-gray-600
              dark:text-gray-400
              leading-relaxed
            "
          >
            {resource.description}
          </p>

          {/* Stack */}

          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-3
            "
          >
            {resource.stack.map((item) => (
              <span
                key={item}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-white
                  dark:bg-white/5
                  text-sm
                  text-gray-300
                "
              >
                {item}
              </span>
            ))}
          </div>

          {/* Price */}

          <div
            className="
              mt-8
              flex
              items-center
              justify-between
            "
          >
            <div>
              <p
                className="
                  text-sm
                  text-gray-500
                "
              >
                Price
              </p>

              <h2
                className="
                  text-4xl
                  font-black
                "
              >
                ${resource.price}
              </h2>
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                text-green-600
                text-sm
              "
            >
              <ShieldCheck size={18} />
              Lifetime Access
            </div>
          </div>

          {/* Features */}

          <div
            className="
              mt-8
              text-gray-200
            "
          >
            <h3
              className="
                text-xl
                font-bold
              "
            >
              Includes
            </h3>

            <div
              className="
                mt-4
                space-y-3
              "
            >
              {resource.features.map((feature) => (
                <div
                  key={feature}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <Check size={18} className="text-green-500" />

                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}

          <div
            className="
              mt-10
              flex
              gap-4
            "
          >
            <button
              className="
                flex-1
                py-4
                rounded-xl
                dark:bg-violet-600
                shadow-violet-600/20
                shadow-xl
                text-gray-200
                font-bold
                flex
                justify-center
                items-center
                gap-2
                cursor-pointer
              "
            >
              <ShoppingCart size={18} />
              Add To Cart
            </button>

            <button
              className="
                px-6
                py-4
                rounded-xl
                border
                border-gray-800
                font-bold
                flex
                items-center
                gap-2
                cursor-pointer
              "
            >
              <Download size={18} />
              Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetails;
