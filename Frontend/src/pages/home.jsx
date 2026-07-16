import React from "react";
import {
  Code2,
  Server,
  Layers,
  Settings,
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
    <div className="relative overflow-hidden bg-[#050505]">
      {/* Background */}

      <div className="absolute inset-0 z-10 overflow-hidden">
        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.1]
            [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

        {/* Center Glow */}

        <div
          className="
            absolute
            top-[-250px]
            left-1/2
            -translate-x-1/2
            h-[700px]
            w-[700px]
            rounded-full
            bg-violet-600/5
            blur-[180px]
            animate-pulse
          "
        />

        {/* Left Glow */}

        <div
          className="
            absolute
            top-40
            -left-32
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-500/5
            blur-[160px]
          "
        />

        {/* Right Glow */}

        <div
          className="
            absolute
            bottom-20
            -right-32
            h-[450px]
            w-[450px]
            rounded-full
            bg-purple-700/5
            blur-[180px]
          "
        />

        {/* <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.25),transparent_45%)]
          "
        /> */}

        {/* Floating Orb */}

        <div
          className="
            absolute
            top-1/3
            right-1/4
            h-56
            w-56
            rounded-full
            bg-indigo-500/5
            blur-[120px]
            animate-bounce
          "
          style={{
            animationDuration: "0s",
          }}
        />

        {/* Noise */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.1]
            mix-blend-soft-light
          "
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Radial Fade */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,transparent_0%,#050505_70%)]
          "
        />
      </div>
      <div className="relative z-10">
        <section className="px-6 lg:pt-17 pt-28 pb-25 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col lg:items-start items-center lg:text-start text-center space-y-6 lg:space-y-0">
            <h1 data-aos="fade-up" className="lg:text-7xl text-4xl font-black tracking-tight leading-tight text-white">
              Stop rebuilding
              <span className="block bg-gradient-to-r from-violet-400 via-white to-blue-400 bg-clip-text text-transparent">
                the same features.
              </span>
            </h1>

            <p data-aos="fade-up" className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              Get production-ready starter kits, reusable components, and
              developer resources to build projects faster.
            </p>

            <div data-aos="fade-right"className="flex gap-4 mt-10">
              <button
                className="
                  px-7
                  py-3
                  rounded-xl
                  bg-violet-600
                  hover:scale-105
                  transition
                  shadow-xl
                  shadow-violet-600/20
                  text-white
                  font-semibold
                  cursor-pointer
                "
              >
                Browse Kits
              </button>

              <button
                className="
                  px-7
                  py-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-md
                  hover:bg-white/10
                  transition
                  text-white
                  cursor-pointer
                "
              >
                My Collection
              </button>
            </div>
          </div>

          {/* CODE PREVIEW */}
          <div
            data-aos="fade-down"
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-7
              shadow-2xl
            "
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              <span className="text-xs text-gray-500">auth-kit.jsx</span>
            </div>

            {/* preview contents */}
            <div className="space-y-3 font-mono text-sm">
              <p className="text-violet-400">const auth = new Auth();</p>

              <p className="text-blue-400">auth.login(email,password);</p>

              <p className="text-green-400">✓ Protected Routes</p>

              <p className="text-green-400">✓ JWT Authentication</p>

              <p className="text-green-400">✓ Password Reset</p>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="px-6 py-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
            <div data-aos="fade-right">
              <h2 className="lg:text-4xl text-xl font-bold text-white lg:text-start text-center">
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
              ].map((item, index) => (
                <div
                  data-aos="fade-up"
                  key={index}
                  className="
                      flex
                      items-center
                      gap-4
                      p-5
                      rounded-2xl
                      border
                      border-red-500/10
                      bg-white/5
                      backdrop-blur-xl
                      hover:bg-white/10
                      duration-300
                      text-white
                    "
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
          <h2 data-aos="fade-up" className="lg:text-4xl text-xl font-bold text-white text-center">
            Your developer toolbox, ready when you are.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {["Starter Kits", "Components", "Developer Resources"].map(
              (item) => (
                <div
                  data-aos="fade-down"
                  key={item}
                  className="
                      p-8
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      hover:border-violet-500/30
                      hover:-translate-y-1
                      cursor-pointer
                    "
                >
                  <h3 className="font-bold text-xl text-white">{item}</h3>

                  <p className="mt-3 text-gray-500">
                    Reusable clean resources for modern developers.
                  </p>
                </div>
              ),
            )}
          </div>
        </section>

        {/* FEATURED */}
        <section className="px-6 py-24 text-white">
          <h2 data-aos="fade-left" className="text-center lg:text-4xl text-xl font-bold text-white">
            Featured CodeBlocks
          </h2>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mt-10">
            {resources.map((item) => (
              <div
                data-aos="zoom-in"
                key={item}
                className="
                  group
                  p-7
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  hover:border-violet-500/30
                  hover:-translate-y-2
                  duration-300
                  cursor-pointer
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-gradient-to-br
                    from-violet-600
                    to-blue-600
                  "
                >
                  <Code2 />
                </div>

                <h3 className="font-bold mt-5">{item}</h3>

                <p className="text-sm text-gray-500 mt-2">
                  React • Node.js • PostgreSQL
                </p>

                <button
                  className="
                    mt-6
                    text-violet-400
                    font-semibold
                    hover:text-violet-300
                    duration-300
                    cursor-pointer
                    hover:underline
                  "
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="px-6 py-20 max-w-7xl mx-auto text-white">
          <h2 data-aos="fade-up" className="lg:text-4xl text-xl font-bold text-white text-center">
            Browse by Category
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {categories.map((cat) => {
              const Icon = cat.icon;

              return (
                <div
                  data-aos="zoom-in"
                  key={cat.title}
                  className="
                    p-7
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    cursor-pointer
                    hover:-translate-y-2
                    hover:border-violet-500/30
                    duration-300
                  "
                >
                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      bg-gradient-to-br
                      from-violet-600
                      to-blue-600
                    "
                  >
                    <Icon />
                  </div>

                  <h3 className="font-bold mt-4">{cat.title}</h3>

                  <p className="text-sm text-gray-500 mt-2">{cat.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="px-6 py-24 text-white">
          <h2 data-aos="flip-left" className="lg:text-4xl text-xl font-bold text-center">
            Start building faster in 3 steps.
          </h2>

          <div data-aos="zoom-in" className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
            {["Discover", "Download", "Build"].map((step, index) => (
              <div
                key={step}
                className="
                  relative
                  p-10
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  hover:border-violet-500/30
                  hover:-translate-y-2
                  duration-300
                  cursor-pointer
                "
              >
                <h3 className="lg:text-2xl text-md font-bold">
                  {index + 1}. {step}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section className="px-6 py-20 max-w-7xl mx-auto text-white flex flex-col items-center">
          <h2 data-aos="fade-left" className="lg:text-4xl text-xl font-bold text-center mb-8">
            Built for developers who ship.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  data-aos="flip-right"
                  key={item.title}
                  className="
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      p-8
                      hover:border-violet-500/30
                      duration-300
                      cursor-pointer
                      hover:-translate-y-2
                    "
                >
                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      bg-gradient-to-br
                      from-violet-600
                      to-blue-600
                      mb-5
                    "
                  >
                    <Icon />
                  </div>

                  <h3 className="font-bold mt-4">{item.title}</h3>

                  <p className="text-gray-500">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="px-6 py-28 text-center text-white">
          <h2 data-aos="zoom-in" className="lg:text-4xl text-2xl font-bold">
            Built from real developer problems.
          </h2>

          <p data-aos="fade-up" className="max-w-2xl mx-auto mt-5 text-gray-500">
            CodeBlock started as a personal developer library to store reusable
            solutions and reduce repetitive work.
          </p>
        </section>

        {/* CTA */}
        <section
          data-aos="flip-left"
          className="
            relative
            overflow-hidden
            m-6
            rounded-[2rem]
            border
            border-violet-500/20
            bg-gradient-to-r
            from-violet-700/20
            via-indigo-700/20
            to-blue-700/20
            backdrop-blur-xl
            lg:p-16
            p-8
            text-center
            text-white
          "
        >

          <div
            className="
              absolute
              -top-20
              left-1/2
              -translate-x-1/2
              w-[500px]
              h-[500px]
              rounded-full
              bg-violet-600/20
              blur-[160px]
              -z-10
            "
          />
          <h2 className="lg:text-4xl text-2xl font-bold">
            Ready to build your next project faster?
          </h2>

          <p className="mt-4 text-gray-300">
            Get access to reusable starter kits and components.
          </p>

          <div className="mt-8 flex lg:flex-row flex-col justify-center gap-4">
            <button className="bg-violet-600 text-white transition shadow-xl px-6 py-3 rounded-xl cursor-pointer hover:scale-105 duration-300">
              Browse Resources
            </button>

            <button className="border text-md px-6 py-3 rounded-xl cursor-pointer border-gray-800 cursor-pointer hover:scale-105 duration-300">
              Start Building
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
