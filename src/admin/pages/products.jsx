import React, { useState } from "react";
import { Search, Plus, Edit, Trash2, Package } from "lucide-react";

const Products = () => {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Authentication Kit",
      category: "Starter Kit",
      price: "$29",
      status: "Published",
      sales: 120,
    },

    {
      id: 2,
      name: "Dashboard UI Kit",
      category: "Component",
      price: "$25",
      status: "Published",
      sales: 98,
    },

    {
      id: 3,
      name: "E-commerce Starter",
      category: "Starter Kit",
      price: "$49",
      status: "Draft",
      sales: 0,
    },

    {
      id: 4,
      name: "Portfolio Template",
      category: "Template",
      price: "$19",
      status: "Published",
      sales: 67,
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      className="
        space-y-8
        text-white
      "
    >
      {/* Header */}

      <div
        className="
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-4
        "
      >
        <div>
          <h1
            className="
              text-4xl
              font-black
              text-gray-900
              dark:text-white
            "
          >
            Products
          </h1>

          <p className="mt-2 text-gray-500">
            Manage CodeBlock resources and digital products.
          </p>
        </div>

        <button
          className="
            text-white  
            bg-gray-800
            py-3
            px-6
            flex 
            gap-2
            items-center
            rounded-xl
            cursor-pointer
            hover:scale-105
            duration-300
            transition-transform
          "
        >
          <Plus size={18} />
          Add Resource
        </button>
      </div>

      {/* Search */}

      <div
        className="
          bg-white
          dark:bg-gray-900
          rounded-3xl
          p-5
          border
          border-gray-200
          dark:border-gray-800
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
            border
            border-gray-800
            rounded-xl
            px-4
            py-3
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
      </div>

      {/* Desktop Table */}

      <div
        className="
          hidden
          md:block
          bg-white
          dark:bg-gray-900
          rounded-3xl
          border
          border-gray-200
          dark:border-gray-800
          overflow-hidden
        "
      >
        <table
          className="
            w-full
            text-sm
          "
        >
          <thead>
            <tr
              className="
                text-left
                text-gray-500
                border-b
              "
            >
              <th className="p-5">Product</th>

              <th>Category</th>

              <th>Price</th>

              <th>Sales</th>

              <th>Status</th>

              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((product) => (
              <tr
                key={product.id}
                className="
                  border-b
                  border-b-gray-800
                  last:border-none
                "
              >
                <td className="p-5">
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-gray-100
                        dark:bg-gray-800
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Package size={18} />
                    </div>

                    {product.name}
                  </div>
                </td>

                <td>{product.category}</td>

                <td className="font-bold">{product.price}</td>

                <td>{product.sales}</td>

                <td>
                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold

                      ${
                        product.status === "Published"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }
                    `}
                  >
                    {product.status}
                  </span>
                </td>

                <td>
                  <div
                    className="
                      flex
                      gap-2
                    "
                  >
                    <button
                      className="
                        p-2
                        rounded-lg
                        bg-gray-100
                        text-black
                        cursor-pointer
                      "
                    >
                      <Edit size={16} />
                    </button>

                    <button
                      className="
                        p-2
                        rounded-lg
                        bg-red-100
                        text-red-600
                        cursor-pointer
                      "
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}

      <div
        className="
          md:hidden
          space-y-4
        "
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="
              bg-white
              dark:bg-gray-900
              rounded-3xl
              p-5
            "
          >
            <h2 className="font-bold text-lg">{product.name}</h2>

            <p className="text-gray-500 mt-2">{product.category}</p>

            <div
              className="
                mt-4
                flex
                justify-between
              "
            >
              <span>{product.price}</span>

              <span>{product.sales} sales</span>
            </div>

            <div
              className="
                mt-5
                flex
                gap-2
              "
            >
              <button
                className="
                  flex-1
                  py-2
                  rounded-xl
                  bg-gray-100
                "
              >
                Edit
              </button>

              <button
                className="
                  px-4
                  rounded-xl
                  bg-red-100
                  text-red-600
                "
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
