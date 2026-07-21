import React, { useState } from "react";
import { Search, Code2, ShoppingCart, Star, Filter } from "lucide-react";

const resources = [
  {
    id: 1,
    title: "Authentication Kit",
    stack: "React • Node.js • PostgreSQL",
    description:
      "Complete authentication system with login, signup, roles and protected routes.",
    price: "$29",
  },

  {
    id: 2,
    title: "Dashboard UI Kit",
    stack: "React • Tailwind",
    description: "Modern admin dashboard components ready for production.",
    price: "$25",
  },

  {
    id: 3,
    title: "API Starter",
    stack: "Node.js • Express",
    description: "Backend starter with clean API architecture.",
    price: "$35",
  },

  {
    id: 4,
    title: "Portfolio Starter",
    stack: "React • Tailwind",
    description: "Developer portfolio starter template.",
    price: "$19",
  },

  {
    id: 5,
    title: "Database Kit",
    stack: "PostgreSQL • Prisma",
    description: "Database structure and configuration templates.",
    price: "$30",
  },

  {
    id: 6,
    title: "E-commerce Starter",
    stack: "React • Node.js",
    description: "Full-stack ecommerce foundation.",
    price: "$49",
  },
];

const Resources = () => {
  const [search, setSearch] = useState("");

  const filteredResources = resources.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      className="
      min-h-screen
      bg-[#050505]
      dark:bg-[#050505]
      px-6
      py-16
      text-white
    "
    >
      {/* Header */}

      <div
        className="
        max-w-7xl
        mx-auto
      "
      >
        <h1
          className="
          text-5xl
          font-black
          text-gray-900
          dark:text-gray-200
        "
        >
          Browse Resources
        </h1>

        <p
          className="
          mt-4
          text-gray-500
          dark:text-gray-400
          max-w-xl
        "
        >
          Explore production-ready starter kits, components and developer tools.
        </p>

        {/* Search */}

        <div
          className="
          mt-10
          flex
          flex-col
          md:flex-row
          gap-4
        "
        >
          <div
            className="
            flex
            items-center
            gap-3
            bg-[#050505]
            dark:bg-white/5
            backdrop-blur-xl
            border
            border-violet-600/10
            rounded-xl
            px-4
            py-3
            flex-1
          "
          >
            <Search size={20} />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search resources..."
              className="
                w-full
                outline-none
                bg-transparent
              "
            />
          </div>

          <button
            className="
              flex
              items-center
              justify-center
              gap-2
              px-6
              py-3
              rounded-xl
              bg-white/5
              cursor-pointer
              text-gray-200
              cursor-pointer
            "
          >
            <Filter size={18} />
            Filter
          </button>
        </div>
      </div>

      {/* Cards */}

      <div
        className="
        max-w-7xl
        mx-auto
        mt-12
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
      "
      >
        {filteredResources.map((item) => (
          <div
            key={item.id}
            className="
              bg-[#050505]
              dark:bg-white/5
              rounded-3xl
              p-6
              shadow-sm
              hover:shadow-xl
              transition
              text-gray-200
            "
          >
            <div
              className="
              h-40
              rounded-2xl
              bg-white
              dark:bg-[#050505]
              flex
              items-center
              justify-center
            "
            >
              <Code2 size={45} />
            </div>

            <div
              className="
              flex
              justify-between
              mt-6
            "
            >
              <h2
                className="
                font-bold
                text-xl
                text-gray-900
                dark:text-gray-300
              "
              >
                {item.title}
              </h2>

              <span
                className="
                font-bold
                text-gray-200
              "
              >
                {item.price}
              </span>
            </div>

            <p
              className="
              text-sm
              text-gray-400
              mt-2
            "
            >
              {item.stack}
            </p>

            <p
              className="
              mt-4
              text-gray-600
              dark:text-gray-300
            "
            >
              {item.description}
            </p>

            <div
              className="
              mt-5
              flex
              justify-between
              items-center
            "
            >
              <div className="flex gap-1">
                <Star size={16} className="fill-current" />

                <span className="text-sm">5.0</span>
              </div>

              <button
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-xl
                  bg-[#050505]
                  text-gray-300
                  text-sm
                  cursor-pointer
                  cursor-pointer
                "
              >
                <ShoppingCart size={16} />
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
