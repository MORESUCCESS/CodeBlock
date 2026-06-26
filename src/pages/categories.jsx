import React from "react";
import { Code2, Server, Layers, Settings, ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    description:
      "Reusable UI components, layouts, animations, and frontend tools for modern web applications.",
    items: ["React Components", "Tailwind UI", "Landing Pages", "Animations"],
  },

  {
    title: "Backend",
    icon: Server,
    description:
      "Backend resources for building APIs, authentication systems, and scalable applications.",
    items: [
      "API Starters",
      "Authentication",
      "Database Setup",
      "Server Configs",
    ],
  },

  {
    title: "Full Stack",
    icon: Layers,
    description:
      "Complete application starters with frontend, backend, and database integration.",
    items: [
      "SaaS Starter",
      "E-commerce Starter",
      "Dashboard Apps",
      "Production Apps",
    ],
  },

  {
    title: "Developer Tools",
    icon: Settings,
    description:
      "Productivity tools and configurations that improve your development workflow.",
    items: ["Configs", "Snippets", "Developer Setup", "Utilities"],
  },
];

const Categories = () => {
  return (
    <div
      className="
        min-h-screen
        bg-gray-50
        dark:bg-gray-950
        px-6
        py-16
        text-white
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
      "
      >
        {/* Header */}

        <div>
          <h1
            className="
              text-5xl
              font-black
              text-gray-900
              dark:text-white
            "
          >
            Browse by Category
          </h1>

          <p
            className="
              mt-4
              max-w-xl
              text-gray-500
              dark:text-gray-400
            "
          >
            Find developer resources organized by technology and project needs.
          </p>
        </div>

        {/* Category Cards */}

        <div
          className="
            mt-12
            grid
            md:grid-cols-2
            gap-8
          "
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="
                  bg-white
                  dark:bg-gray-900
                  rounded-3xl
                  p-8
                  shadow-sm
                  hover:shadow-xl
                  transition
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-gray-100
                    dark:bg-gray-800
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon size={28} />
                </div>

                <h2
                  className="
                    mt-6
                    text-2xl
                    font-bold
                    text-gray-900
                    dark:text-white
                  "
                >
                  {category.title}
                </h2>

                <p
                  className="
                    mt-3
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  {category.description}
                </p>

                <div
                  className="
                    mt-6
                    space-y-3
                  "
                >
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        justify-between
                        text-sm
                        font-medium
                        text-gray-700
                        dark:text-gray-300
                      "
                    >
                      <span>{item}</span>

                      <ArrowRight size={16} />
                    </div>
                  ))}
                </div>

                <button
                  className="
                    mt-8
                    w-full
                    py-3
                    rounded-xl
                    dark:bg-gray-950
                    text-white
                    font-semibold
                    hover:scale-[1.02]
                    transition
                    cursor-pointer
                  "
                >
                  Explore Category
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
