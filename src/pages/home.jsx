import React from "react";
import {
  Code2,
  Server,
  Layers,
  Settings,
  Check,
  X,
  Zap,
  Puzzle,
  Rocket,
  BookOpen,
} from "lucide-react";
import Layout from "../components/layout";

const resources = [
  "Authentication Kit",
  "Dashboard UI Kit",
  "API Starter",
  "Portfolio Starter",
  "Database Kit",
  "E-commerce Starter",
];

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    text: "UI components and frontend tools.",
  },
  {
    title: "Backend",
    icon: Server,
    text: "APIs, databases, and backend systems.",
  },
  {
    title: "Full Stack",
    icon: Layers,
    text: "Complete application starters.",
  },
  {
    title: "Dev Tools",
    icon: Settings,
    text: "Configs and productivity tools.",
  },
];

const benefits = [
  {
    title: "Save Development Time",
    icon: Zap,
    text: "Avoid rebuilding common features.",
  },
  {
    title: "Reusable Code",
    icon: Puzzle,
    text: "Clean structures you can use repeatedly.",
  },
  {
    title: "Build Faster",
    icon: Rocket,
    text: "Focus on ideas instead of setup.",
  },
  {
    title: "Keep Learning",
    icon: BookOpen,
    text: "Improve your workflow with every resource.",
  },
];

const Home = () => {
  return (
    <>
      <section className="px-6 py-30 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col lg:items-start items-center lg:text-start text-center space-y-6 lg:space-y-0">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white">
            Stop rebuilding the same features.
          </h1>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Get production-ready starter kits, reusable components, and
            developer resources to build projects faster.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="hover:scale-105 transition-transform bg-gray-900 cursor-pointer text-white px-7 py-3 rounded-xl">
              Browse Kits
            </button>

            <button className="hover:scale-105 transition-transform border-gray-900 border hover:bg-gray-900 duration-300 px-7 py-3 rounded-xl cursor-pointer text-white">
              My Collection
            </button>
          </div>
        </div>

        {/* CODE PREVIEW */}
        <div className="bg-gray-900 rounded-3xl p-6 text-white shadow-xl">
          <div className="flex gap-2 mb-5">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>

          <div className="space-y-3 text-sm">
            <p>Authentication Kit</p>

            <p>✓ Login</p>
            <p>✓ Signup</p>
            <p>✓ Password Reset</p>
            <p>✓ Protected Routes</p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="lg:text-4xl text-2xl font-bold text-white lg:text-start text-center">
              Developers waste hours rebuilding what already exists.
            </h2>

            <p className="mt-5 text-gray-500 lg:text-start text-center">
              Every project requires the same setup. Start with reusable
              building blocks instead.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Build auth again",
              "Create dashboard again",
              "Setup APIs again",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 p-4 rounded-xl bg-gray-900 dark:bg-gray-900 text-white"
              >
                <X />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="lg:text-4xl text-2xl font-bold text-white text-center">
          Your developer toolbox, ready when you are.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {["Starter Kits", "Components", "Developer Resources"].map((item) => (
            <div key={item} className="p-8 rounded-3xl border border-gray-900">
              <h3 className="font-bold text-xl text-white">{item}</h3>

              <p className="mt-3 text-gray-500">
                Reusable clean resources for modern developers.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="px-6 py-20 bg-gray-100 dark:bg-gray-900 text-white">
        <h2 className="text-center lg:text-4xl text-2xl font-bold text-white">Featured CodeBlocks</h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mt-10">
          {resources.map((item) => (
            <div
              key={item}
              className="bg-white dark:bg-gray-950 p-6 rounded-3xl hover:scale-105 duration-300 cursor-pointer"
            >
              <Code2 />

              <h3 className="font-bold mt-5">{item}</h3>

              <p className="text-sm text-gray-500 mt-2">
                React • Node.js • PostgreSQL
              </p>

              <button className="mt-5 cursor-pointer hover:underline">View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-white">
        <h2 className="lg:text-4xl text-2xl font-bold text-white text-center">Browse by Category</h2>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {categories.map((cat) => {
            const Icon = cat.icon;

            return (
              <div key={cat.title} className="p-6 border rounded-3xl border-gray-900 cursor-pointer hover:scale-105 duration-300 transform-transition">
                <Icon />

                <h3 className="font-bold mt-4">{cat.title}</h3>

                <p className="text-sm text-gray-500 mt-2">{cat.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-20 bg-black text-white dark:bg-gray-900">
        <h2 className="lg:text-4xl text-2xl font-bold text-center">
          Start building faster in 3 steps.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          {["Discover", "Download", "Build"].map((step, index) => (
            <div key={step} className="p-8 border border-gray-800 rounded-3xl cursor-pointer">
              <h3 className="lg:text-2xl text-md font-bold">
                {index + 1}. {step}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-white flex flex-col items-center">
        <h2 className="lg:text-4xl text-2xl font-bold text-center mb-15">Built for developers who ship.</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title}>
                <Icon />

                <h3 className="font-bold mt-4">{item.title}</h3>

                <p className="text-gray-500">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="px-6 py-20 text-center text-white">
        <h2 className="lg:text-4xl text-2xl font-bold">
          Built from real developer problems.
        </h2>

        <p className="max-w-2xl mx-auto mt-5 text-gray-500">
          CodeBlock started as a personal developer library to store reusable
          solutions and reduce repetitive work.
        </p>
      </section>

      {/* CTA */}
      <section className="m-6 rounded-3xl bg-gray-900 text-white lg:p-16 p-8 text-center">
        <h2 className="lg:text-4xl text-2xl font-bold">
          Ready to build your next project faster?
        </h2>

        <p className="mt-4 text-gray-300">
          Get access to reusable starter kits and components.
        </p>

        <div className="mt-8 flex lg:flex-row flex-col justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-xl cursor-pointer hover:scale-105 duration-300">
            Browse Resources
          </button>

          <button className="border text-md px-6 py-3 rounded-xl cursor-pointer border-gray-800 cursor-pointer hover:scale-105 duration-300">
            Start Building
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
