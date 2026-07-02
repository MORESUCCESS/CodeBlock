import React, { useState } from "react";
import {
  ShoppingCart,
  Trash2,
  Minus,
  Plus,
  ArrowRight,
  Code2,
} from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Authentication Kit",
      stack: "React • Node.js • PostgreSQL",
      price: 29,
      quantity: 1,
    },

    {
      id: 2,
      title: "Dashboard UI Kit",
      stack: "React • Tailwind CSS",
      price: 25,
      quantity: 1,
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

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
        "
      >
        {/* Header */}

        <div>
          <h1
            className="
              text-5xl
              font-black
              text-gray-900
              dark:text-white
            "
          >
            Your Cart
          </h1>

          <p
            className="
              mt-3
              text-gray-500
              dark:text-gray-400
            "
          >
            Review your developer resources before checkout.
          </p>
        </div>

        <div
          className="
            mt-12
            grid
            lg:grid-cols-3
            gap-8
          "
        >
          {/* Cart Items */}

          <div
            className="
              lg:col-span-2
              space-y-5
            "
          >
            {cartItems.length === 0 ? (
              <div
                className="
                  bg-white
                  dark:bg-gray-900
                  rounded-3xl
                  p-10
                  text-center
                "
              >
                <ShoppingCart className="mx-auto" size={45} />

                <h2 className="mt-5 font-bold text-xl">Your cart is empty</h2>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="
                    bg-white
                    dark:bg-gray-900
                    rounded-3xl
                    p-6
                    flex
                    flex-col
                    md:flex-row
                    gap-5
                    md:items-center
                    justify-between
                  "
                >
                  <div className="flex gap-4">
                    <div
                      className="
                        w-20
                        h-20
                        rounded-2xl
                        bg-gray-100
                        dark:bg-gray-800
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Code2 size={32} />
                    </div>

                    <div>
                      <h2
                        className="
                          font-bold
                          text-xl
                          text-gray-900
                          dark:text-white
                        "
                      >
                        {item.title}
                      </h2>

                      <p
                        className="
                          text-sm
                          text-gray-500
                          mt-1
                        "
                      >
                        {item.stack}
                      </p>

                      <p className="mt-3 font-bold">${item.price}</p>
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-4
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
                        px-3
                        py-2
                      "
                    >
                      <button onClick={() => decreaseQuantity(item.id)}>
                        <Minus size={16} />
                      </button>

                      <span>{item.quantity}</span>

                      <button onClick={() => increaseQuantity(item.id)}>
                        <Plus size={16} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="
                        p-3
                        rounded-xl
                        bg-red-100
                        text-red-600
                        cursor-pointer
                      "
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary */}

          <div
            className="
              bg-white
              dark:bg-gray-900
              rounded-3xl
              p-8
              h-fit
            "
          >
            <h2
              className="
                text-2xl
                font-bold
              "
            >
              Summary
            </h2>

            <div
              className="
                mt-6
                flex
                justify-between
                text-gray-500
              "
            >
              <span>Subtotal</span>

              <span>${total}</span>
            </div>

            <div
              className="
                mt-4
                flex
                justify-between
                font-bold
                text-xl
              "
            >
              <span>Total</span>

              <span>${total}</span>
            </div>

            <button
              className="
                mt-8
                w-full
                py-4
                rounded-xl
                dark:bg-gray-950
                text-white
                font-bold
                flex
                items-center
                justify-center
                gap-2
                cursor-pointer
              "
            >
              Checkout
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
