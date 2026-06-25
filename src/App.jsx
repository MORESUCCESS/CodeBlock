import React from "react";
import Layout from "./components/layout";
import Home from "./pages/home";

function App() {
  return (
    // <Layout>
    //   <section className="min-h-screen flex items-center justify-center px-6">
    //     <div className="max-w-3xl text-center">
    //       <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-950 dark:text-white">
    //         Build Faster With
    //         <span className="block mt-2">CodeBlock</span>
    //       </h1>

    //       <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
    //         Get production-ready code blocks, starter kits, and developer
    //         resources for your next project.
    //       </p>

    //       <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
    //         <button
    //           className="
    //             px-8 py-3
    //             rounded-2xl
    //             bg-gray-900
    //             text-white
    //             font-semibold
    //             hover:scale-105
    //             transition
    //             cursor-pointer
    //           "
    //         >
    //           Explore Resources
    //         </button>

    //         <button
    //           className="
    //             px-8 py-3
    //             rounded-2xl
    //             border
    //             border-gray-300
    //             dark:border-gray-700
    //             text-gray-900
    //             dark:text-white
    //             font-semibold
    //             hover:bg-gray-100
    //             dark:hover:bg-gray-800
    //             transition
    //             cursor-pointer
    //           "
    //         >
    //           View Components
    //         </button>
    //       </div>
    //     </div>
    //   </section>
    // </Layout>

    <Home/>
  );
}

export default App;
