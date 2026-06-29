import React from "react";
import {
  DollarSign,
  Package,
  ShoppingCart,
  Users,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$12,540",
      growth: "+18%",
      icon: DollarSign,
    },

    {
      title: "Resources",
      value: "86",
      growth: "+12%",
      icon: Package,
    },

    {
      title: "Orders",
      value: "342",
      growth: "+24%",
      icon: ShoppingCart,
    },

    {
      title: "Users",
      value: "1,240",
      growth: "+9%",
      icon: Users,
    },
  ];

  const orders = [
    {
      id: "#CB1024",
      customer: "Alex Johnson",
      product: "Authentication Kit",
      amount: "$29",
      status: "Completed",
    },

    {
      id: "#CB1025",
      customer: "Sarah Smith",
      product: "Dashboard UI Kit",
      amount: "$25",
      status: "Pending",
    },

    {
      id: "#CB1026",
      customer: "David Lee",
      product: "SaaS Starter",
      amount: "$49",
      status: "Completed",
    },
  ];

  const resources = [
    "Authentication Kit",
    "E-commerce Starter",
    "Portfolio Builder",
    "Dashboard UI",
  ];

  return (
    <div
      className="
        space-y-8
        text-white
      "
    >
      {/* Header */}

      <div>
        <h1
          className="
            text-4xl
            font-black
            text-gray-900
            dark:text-white
          "
        >
          Dashboard
        </h1>

        <p
          className="
            mt-2
            text-gray-500
          "
        >
          Monitor your CodeBlock platform performance.
        </p>
      </div>

      {/* Stats */}

      <div
        className="
          grid
          sm:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
      >
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                bg-white
                dark:bg-gray-900
                rounded-3xl
                p-6
                border
                border-gray-200
                dark:border-gray-800
              "
            >
              <div
                className="
                  flex
                  justify-between
                  items-center
                "
              >
                <div
                  className="
                    p-3
                    rounded-xl
                    bg-gray-100
                    dark:bg-gray-800
                  "
                >
                  <Icon size={22} />
                </div>

                <span
                  className="
                    flex
                    items-center
                    gap-1
                    text-green-500
                    text-sm
                    font-semibold
                  "
                >
                  {item.growth}

                  <TrendingUp size={15} />
                </span>
              </div>

              <h3
                className="
                  mt-6
                  text-gray-500
                  text-sm
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-2
                  text-3xl
                  font-black
                  text-gray-900
                  dark:text-white
                "
              >
                {item.value}
              </p>
            </div>
          );
        })}
      </div>

      <div
        className="
          grid
          lg:grid-cols-3
          gap-6
        "
      >
        {/* Orders */}

        <div
          className="
            lg:col-span-2
            bg-white
            dark:bg-gray-900
            rounded-3xl
            p-6
            border
            border-gray-200
            dark:border-gray-800
          "
        >
          <div
            className="
              flex
              justify-between
              items-center
            "
          >
            <h2
              className="
                text-xl
                font-bold
              "
            >
              Recent Orders
            </h2>

            <button
              className="
                text-sm
                font-semibold
              "
            >
              View all
            </button>
          </div>

          <div
            className="
              mt-6
              overflow-x-auto
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
                  "
                >
                  <th className="pb-4">Order</th>

                  <th>Customer</th>

                  <th>Product</th>

                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="
                      border-t
                      border-gray-100
                      dark:border-gray-800
                    "
                  >
                    <td className="py-4">{order.id}</td>

                    <td>{order.customer}</td>

                    <td>{order.product}</td>

                    <td
                      className="
                        font-bold
                      "
                    >
                      {order.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Popular Resources */}

        <div
          className="
            bg-white
            dark:bg-gray-900
            rounded-3xl
            p-6
            border
            border-gray-200
            dark:border-gray-800
          "
        >
          <h2
            className="
              text-xl
              font-bold
            "
          >
            Popular Resources
          </h2>

          <div
            className="
              mt-6
              space-y-4
            "
          >
            {resources.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  justify-between
                  p-4
                  rounded-xl
                  bg-gray-100
                  dark:bg-gray-800
                  cursor-pointer
                "
              >
                <span>{item}</span>

                <ArrowUpRight size={17} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
