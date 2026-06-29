import React, { useState } from "react";
import {
  Search,
  Eye,
  Trash2,
  Users as UsersIcon,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const Users = () => {
  const [search, setSearch] = useState("");

  const users = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@gmail.com",
      role: "Customer",
      status: "Active",
      joined: "Jun 29, 2026",
      orders: 5,
    },

    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah@gmail.com",
      role: "Customer",
      status: "Active",
      joined: "Jun 28, 2026",
      orders: 3,
    },

    {
      id: 3,
      name: "David Lee",
      email: "david@gmail.com",
      role: "Admin",
      status: "Active",
      joined: "Jun 20, 2026",
      orders: 12,
    },

    {
      id: 4,
      name: "Michael Brown",
      email: "michael@gmail.com",
      role: "Customer",
      status: "Blocked",
      joined: "Jun 15, 2026",
      orders: 1,
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()),
  );

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
          Users
        </h1>

        <p className="mt-2 text-gray-500">
          Manage CodeBlock customers and administrators.
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
            placeholder="Search users..."
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
              <th className="p-5">User</th>

              <th>Role</th>

              <th>Orders</th>

              <th>Status</th>

              <th>Joined</th>

              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="
                  border-b
                  border-b-gray-800
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
                        rounded-full
                        bg-gray-100
                        dark:bg-gray-800
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <UserRound size={18} />
                    </div>

                    <div>
                      <p className="font-semibold">{user.name}</p>

                      <p
                        className="
                          text-xs
                          text-gray-500
                        "
                      >
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td>
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1
                      px-3
                      py-1
                      rounded-full
                      bg-blue-100
                      text-blue-600
                      text-xs
                      font-semibold
                    "
                  >
                    {user.role === "Admin" && <ShieldCheck size={14} />}

                    {user.role}
                  </span>
                </td>

                <td>{user.orders}</td>

                <td>
                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold


                      ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }

                    `}
                  >
                    {user.status}
                  </span>
                </td>

                <td>{user.joined}</td>

                <td>
                  <div className="flex gap-2">
                    <button
                      className="
                        p-2
                        rounded-xl
                        bg-gray-100
                        text-black
                        cursor-pointer
                      "
                    >
                      <Eye size={16} />
                    </button>

                    <button
                      className="
                        p-2
                        rounded-xl
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
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="
              bg-white
              dark:bg-gray-900
              rounded-3xl
              p-5
              border
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-gray-100
                  flex
                  items-center
                  justify-center
                "
              >
                <UserRound />
              </div>

              <div>
                <h2 className="font-bold">{user.name}</h2>

                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>

            <div
              className="
                mt-5
                flex
                justify-between
              "
            >
              <span>{user.role}</span>

              <span>{user.orders} orders</span>
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
              View User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
