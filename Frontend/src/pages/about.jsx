import React from "react";
import { Code2, Rocket, Users, Lightbulb, CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Build Faster",
      description:
        "Reduce development time with reusable resources and production-ready solutions.",
      icon: Rocket,
    },

    {
      title: "Clean Code",
      description:
        "Every resource is structured with scalable and maintainable development practices.",
      icon: Code2,
    },

    {
      title: "Developer First",
      description:
        "CodeBlock is designed around real problems developers face every day.",
      icon: Users,
    },

    {
      title: "Keep Improving",
      description:
        "Learn better workflows and discover tools that improve your skills.",
      icon: Lightbulb,
    },
  ];

  return (
    <div
      className="
        min-h-screen
        bg-gray-50
        dark:bg-gray-950
        px-6
        py-16
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
      "
      >
        {/* Hero */}

        <section
          className="
            text-center
            max-w-3xl
            mx-auto
          "
        >
          <h1
            className="
              text-5xl
              md:text-6xl
              font-black
              text-gray-900
              dark:text-white
            "
          >
            Built for developers who ship.
          </h1>

          <p
            className="
              mt-6
              text-lg
              text-gray-500
              dark:text-gray-400
            "
          >
            CodeBlock provides reusable starter kits, components, and developer
            resources that help you build projects faster.
          </p>
        </section>

        {/* Story */}

        <section
          className="
            mt-20
            grid
            md:grid-cols-2
            gap-10
            items-center
          "
        >
          <div
            className="
              bg-white
              dark:bg-gray-900
              rounded-3xl
              p-8
              shadow-sm
            "
          >
            <Code2 size={45} className="text-white"/>

            <h2
              className="
                mt-6
                text-3xl
                font-bold
                text-gray-900
                dark:text-white
              "
            >
              Our Story
            </h2>

            <p
              className="
                mt-4
                text-gray-600
                dark:text-gray-400
              "
            >
              CodeBlock started as a personal developer library created to store
              reusable solutions and avoid rebuilding the same features
              repeatedly.
            </p>

            <p
              className="
                mt-4
                text-gray-600
                dark:text-gray-400
              "
            >
              Today, it helps developers access clean, scalable resources and
              spend more time creating instead of configuring.
            </p>
          </div>

          <div
            className="
              dark:bg-gray-900
              text-white
              rounded-3xl
              p-8
            "
          >
            <h3
              className="
                text-2xl
                font-bold
              "
            >
              Why CodeBlock?
            </h3>

            <div
              className="
              mt-6
              space-y-4
            "
            >
              {[
                "Production-ready code",
                "Reusable components",
                "Modern technology stack",
                "Developer-focused resources",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <CheckCircle size={18} />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}

        <section
          className="
            mt-20
          "
        >
          <h2
            className="
              text-4xl
              font-bold
              text-gray-900
              dark:text-white
            "
          >
            Our Principles
          </h2>

          <div
            className="
              mt-10
              grid
              md:grid-cols-4
              gap-6
            "
          >
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="
                    dark:bg-gray-900
                    rounded-3xl
                    p-6
                    cursor-pointer
                  "
                >
                  <Icon size={30}  className="text-white"/>

                  <h3
                    className="
                      mt-5
                      font-bold
                      text-xl
                      text-gray-900
                      dark:text-white
                    "
                  >
                    {value.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      text-gray-500
                      dark:text-gray-400
                    "
                  >
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}

        <section
          className="
            mt-20
            bg-white
            dark:bg-gray-900
            rounded-3xl
            p-10
            text-center
          "
        >
          <h2
            className="
              text-4xl
              font-black
              text-gray-900
              dark:text-white
            "
          >
            Build your next project with confidence.
          </h2>

          <p
            className="
              mt-4
              text-gray-500
              dark:text-gray-400
            "
          >
            Explore resources built to help developers move from idea to
            production faster.
          </p>

          <button
            className="
              mt-8
              px-8
              py-3
              rounded-xl
              dark:bg-gray-950
              text-white
              font-semibold
              cursor-pointer
            "
          >
            Browse Resources
          </button>
        </section>
      </div>
    </div>
  );
};

export default About;
