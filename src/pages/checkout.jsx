import React, { useState } from "react";
import {
  CreditCard,
  Lock,
  Mail,
  User,
  MapPin,
  ShoppingBag,
} from "lucide-react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    card: "",
  });

  const [errors, setErrors] = useState({});

  const order = {
    items: [
      {
        title: "Authentication Kit",
        price: 29,
      },
      {
        title: "Dashboard UI Kit",
        price: 25,
      },
    ],
  };

  const total = order.items.reduce((sum, item) => sum + item.price, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.card.trim()) {
      newErrors.card = "Card details required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Checkout Values:", {
      ...formData,
      order,
      total,
    });

    // Payment integration goes here
  };

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
          grid
          lg:grid-cols-3
          gap-8
        "
      >
        {/* Checkout Form */}

        <form
          onSubmit={handleSubmit}
          className="
            lg:col-span-2
            bg-white
            dark:bg-gray-900
            rounded-3xl
            p-8
          "
        >
          <h1
            className="
              text-4xl
              font-black
              text-gray-900
              dark:text-white
            "
          >
            Checkout
          </h1>

          <p className="mt-2 text-gray-500">Complete your purchase.</p>

          {/* Name */}

          <div className="mt-8">
            <label className="font-semibold">Full Name</label>

            <div
              className="
                mt-2
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
              <User size={18} />

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="
                  w-full
                  outline-none
                  bg-transparent
                "
              />
            </div>

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}

          <div className="mt-5">
            <label className="font-semibold">Email</label>

            <div
              className="
                mt-2
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
              <Mail size={18} />

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="
                  w-full
                  outline-none
                  bg-transparent
                "
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Address */}

          <div className="mt-5">
            <label className="font-semibold">Address</label>

            <div
              className="
                mt-2
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
              <MapPin size={18} />

              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your address"
                className="
                  w-full
                  outline-none
                  bg-transparent
                "
              />
            </div>

            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          {/* Card */}

          <div className="mt-5">
            <label className="font-semibold">Card Details</label>

            <div
              className="
                mt-2
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
              <CreditCard size={18} />

              <input
                name="card"
                value={formData.card}
                onChange={handleChange}
                placeholder="**** **** **** ****"
                className="
                  w-full
                  outline-none
                  bg-transparent
                "
              />
            </div>

            {errors.card && (
              <p className="text-red-500 text-sm mt-1">{errors.card}</p>
            )}
          </div>

          <button
            type="submit"
            className="
              mt-8
              w-full
              py-4
              rounded-xl
              dark:bg-gray-950
              text-white
              font-bold
              flex
              justify-center
              items-center
              gap-2
              cursor-pointer
            "
          >
            <Lock size={18} />
            Complete Payment
          </button>
        </form>

        {/* Order Summary */}

        <div
          className="
            bg-white
            dark:bg-gray-900
            rounded-3xl
            p-8
            h-fit
          "
        >
          <div className="flex gap-3 items-center">
            <ShoppingBag />

            <h2 className="text-2xl font-bold">Order Summary</h2>
          </div>

          <div className="mt-6 space-y-4">
            {order.items.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  justify-between
                "
              >
                <span>{item.title}</span>

                <span>${item.price}</span>
              </div>
            ))}
          </div>

          <div
            className="
              mt-6
              border-t
              border-t-gray-800
              pt-5
              flex
              justify-between
              font-black
              text-xl
            "
          >
            <span>Total</span>

            <span>${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
