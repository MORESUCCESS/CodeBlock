import React, { useState } from "react";
import {
  Search,
  Eye,
  ShoppingBag,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";

const Orders = () => {
  const [search, setSearch] = useState("");

  const orders = [
    {
      id: "#CB-1024",
      customer: "Alex Johnson",
      email: "alex@gmail.com",
      product: "Authentication Kit",
      amount: "$29",
      status: "Completed",
      date: "Jun 29, 2026",
    },

    {
      id: "#CB-1025",
      customer: "Sarah Smith",
      email: "sarah@gmail.com",
      product: "Dashboard UI Kit",
      amount: "$25",
      status: "Pending",
      date: "Jun 28, 2026",
    },

    {
      id: "#CB-1026",
      customer: "David Lee",
      email: "david@gmail.com",
      product: "SaaS Starter",
      amount: "$49",
      status: "Completed",
      date: "Jun 27, 2026",
    },

    {
      id: "#CB-1027",
      customer: "Michael Brown",
      email: "michael@gmail.com",
      product: "E-commerce Starter",
      amount: "$59",
      status: "Cancelled",
      date: "Jun 26, 2026",
    },
  ];

  const filteredOrders = orders.filter(
    (order) =>
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.product.toLowerCase().includes(search.toLowerCase()),
  );

  const statusIcon = (status) => {
    if (status === "Completed") return <CheckCircle size={15} />;

    if (status === "Pending") return <Clock size={15} />;

    return <XCircle size={15} />;
  };

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
          Orders
        </h1>

        <p
          className="
            mt-2
            text-gray-500
          "
        >
          Manage customer purchases and payments.
        </p>
      </div>

      {/* Search */}

      <div
        className="
          bg-white
          dark:bg-gray-900
          p-5
          rounded-3xl
          border
          border-gray-800
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
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
          border-gray-800
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
                border-b-gray-800
              "
            >
              <th className="p-5">Order</th>

              <th>Customer</th>

              <th>Product</th>

              <th>Amount</th>

              <th>Status</th>

              <th>Date</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="
                  border-b
                  border-b-gray-800
                "
              >
                <td className="p-5 font-bold">{order.id}</td>

                <td>
                  <p className="font-semibold">{order.customer}</p>

                  <p className="text-gray-500 text-xs">{order.email}</p>
                </td>

                <td>{order.product}</td>

                <td
                  className="
                    font-bold
                  "
                >
                  {order.amount}
                </td>

                <td>
                  <span
                    className={`
                      inline-flex
                      items-center
                      gap-1
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold


                      ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-red-100 text-red-600"
                      }

                    `}
                  >
                    {statusIcon(order.status)}

                    {order.status}
                  </span>
                </td>

                <td>{order.date}</td>

                <td>
                  <button
                    className="
                      p-2
                      rounded-xl
                      bg-gray-100
                      text-black
                      cursor-pointer
                    "
                  >
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}

      <div
        className="
          md:hidden
          space-y-4
        "
      >
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="
              bg-white
              dark:bg-gray-900
              p-5
              rounded-3xl
              border
            "
          >
            <div
              className="
                flex
                justify-between
              "
            >
              <div>
                <h2 className="font-bold">{order.id}</h2>

                <p className="text-gray-500 text-sm">{order.customer}</p>
              </div>

              <ShoppingBag />
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <p>
                Product:
                <b> {order.product}</b>
              </p>

              <p>
                Amount:
                <b> {order.amount}</b>
              </p>

              <p>
                Date:
                {order.date}
              </p>
            </div>

            <button
              className="
                mt-5
                w-full
                py-3
                rounded-xl
                bg-gray-900
                text-white
              "
            >
              View Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
