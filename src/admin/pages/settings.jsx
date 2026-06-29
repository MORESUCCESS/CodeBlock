import React, { useState } from "react";
import { Save, User, Store, Bell, Shield } from "lucide-react";

const Settings = () => {
  const [formData, setFormData] = useState({
    storeName: "codeblock",

    email: "admin@codeblock.com",

    username: "Admin",

    notifications: true,

    twoFactor: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,

      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Settings Values:", formData);
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
          Settings
        </h1>

        <p
          className="
            mt-2
            text-gray-500
          "
        >
          Manage your CodeBlock admin preferences.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="
          space-y-6
        "
      >
        {/* Store Settings */}

        <section
          className="
            bg-white
            dark:bg-gray-900
            border
            border-gray-800
            rounded-3xl
            p-6
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              mb-6
            "
          >
            <Store />

            <h2 className="text-xl font-bold">Store Information</h2>
          </div>

          <div
            className="
              grid
              md:grid-cols-2
              gap-5
            "
          >
            <div>
              <label
                className="
                  text-sm
                  font-semibold
                "
              >
                Store Name
              </label>

              <input
                name="storeName"
                value={formData.storeName}
                onChange={handleChange}
                required
                className="
                  mt-2
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  border
                  border-gray-800
                  outline-none
                  bg-transparent
                "
              />
            </div>

            <div>
              <label
                className="
                  text-sm
                  font-semibold
                "
              >
                Support Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="
                  mt-2
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  border
                  border-gray-800
                  outline-none
                  bg-transparent
                "
              />
            </div>
          </div>
        </section>

        {/* Profile */}

        <section
          className="
            bg-white
            dark:bg-gray-900
            border
            border-gray-800
            rounded-3xl
            p-6
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              mb-6
            "
          >
            <User />

            <h2 className="text-xl font-bold">Admin Profile</h2>
          </div>

          <label
            className="
              text-sm
              font-semibold
            "
          >
            Username
          </label>

          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="
              mt-2
              w-full
              px-4
              py-3
              rounded-xl
              border
              border-gray-800
              outline-none
            "
          />
        </section>

        {/* Notifications */}

        <section
          className="
            bg-white
            dark:bg-gray-900
            border
            border-gray-800
            rounded-3xl
            p-6
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              mb-6
            "
          >
            <Bell />

            <h2 className="text-xl font-bold">Notifications</h2>
          </div>

          <label
            className="
              flex
              items-center
              justify-between
            "
          >
            <span>Email notifications</span>

            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleChange}
              className="w-5 h-5"
            />
          </label>
        </section>

        {/* Security */}

        <section
          className="
            bg-white
            dark:bg-gray-900
            border
            border-gray-800
            rounded-3xl
            p-6
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              mb-6
            "
          >
            <Shield />

            <h2 className="text-xl font-bold">Security</h2>
          </div>

          <label
            className="
              flex
              items-center
              justify-between
            "
          >
            <span>Enable two-factor authentication</span>

            <input
              type="checkbox"
              name="twoFactor"
              checked={formData.twoFactor}
              onChange={handleChange}
              className="w-5 h-5"
            />
          </label>
        </section>

        {/* Save Button */}

        <button
          type="submit"
          className="
            flex
            items-center
            justify-center
            gap-2
            px-8
            py-4
            rounded-xl
            bg-gray-900
            text-white
            font-bold
            cursor-pointer
          "
        >
          <Save size={18} />
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
