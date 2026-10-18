import { useState } from "react";

const API_URL = "http://localhost:5000";

const Cart = ({ cart, addToCart, decreaseQty, clearCart }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [placing, setPlacing] = useState(false);
  const [error, setError] = useState("");
  const [placedOrder, setPlacedOrder] = useState(null);

  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const closePanel = () => {
    setOpen(false);
    setPlacedOrder(null);
    setError("");
  };

  const placeOrder = async () => {
    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError("Enter a valid 10-digit phone number.");
      return;
    }

    setPlacing(true);
    try {
      const res = await fetch(`${API_URL}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: name.trim(),
          phone,
          items: cart.map((i) => ({ _id: i._id, qty: i.qty })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Could not place order");

      setPlacedOrder(data);
      clearCart();
    } catch (err) {
      setError(err.message);
    } finally {
      setPlacing(false);
    }
  };

  return (
    <>
      {/* Floating round cart button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-[#ffcb3d] text-3xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:cursor-pointer"
      >
        🛒
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
            {count}
          </span>
        )}
      </button>

      {/* Cart panel */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/60"
          onClick={closePanel}
        >
          <div
            className="w-full sm:w-96 h-full bg-[#1A1A19] text-white p-5 overflow-y-auto border-l border-[#6a4c2b] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-semibold">
                {placedOrder ? "Order confirmed" : "Your cart"}
              </h2>
              <button
                onClick={closePanel}
                className="text-3xl leading-none hover:text-[#ffcb3d] hover:cursor-pointer"
              >
                ×
              </button>
            </div>

            {/* Confirmation screen */}
            {placedOrder ? (
              <div className="flex flex-col gap-4">
                <p className="text-[#0DA30C] text-lg font-medium">
                  Thank you, {placedOrder.customerName}! Your order is placed.
                </p>

                <p className="text-gray-400">
                  Order ID:{" "}
                  <span className="text-white font-semibold">
                    #{placedOrder._id.slice(-6).toUpperCase()}
                  </span>
                </p>

                <div className="border border-dashed border-[#6a4c2b] rounded-xl p-3 flex flex-col gap-2">
                  {placedOrder.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>
                        {item.name} x {item.qty}
                      </span>
                      <span>Rs {item.price * item.qty}</span>
                    </div>
                  ))}
                  <div className="flex justify-between font-semibold border-t border-[#444444] pt-2 mt-1">
                    <span>Total</span>
                    <span className="text-[#ffcb3d]">Rs {placedOrder.total}</span>
                  </div>
                </div>

                <p className="text-gray-400">
                  Status:{" "}
                  <span className="text-[#ffcb3d]">{placedOrder.status}</span>
                </p>

                <button
                  onClick={closePanel}
                  className="w-full bg-white text-black py-2 rounded-xl font-medium hover:bg-[#ffcb3d] transition-colors duration-300 hover:cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                {/* Empty state */}
                {cart.length === 0 && (
                  <p className="text-gray-400 mt-10 text-center">
                    Your cart is empty. Add something tasty!
                  </p>
                )}

                {/* Items */}
                <div className="flex flex-col gap-4 flex-1">
                  {cart.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center gap-3 border border-dashed border-[#6a4c2b] rounded-xl p-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-[#ffcb3d] font-bold">
                          Rs {item.price * item.qty}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 border border-[#444444] rounded-lg px-2 py-1">
                        <button
                          onClick={() => decreaseQty(item._id)}
                          className="text-lg hover:text-[#ffcb3d] hover:cursor-pointer"
                        >
                          -
                        </button>
                        <span>{item.qty}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="text-lg hover:text-[#ffcb3d] hover:cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Checkout */}
                {cart.length > 0 && (
                  <div className="border-t border-[#444444] pt-4 mt-5 flex flex-col gap-3">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-[#ffcb3d]">Rs {total}</span>
                    </div>

                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-transparent border border-[#444444] rounded-xl px-3 py-2 outline-none placeholder:text-gray-400 focus:border-[#ffcb3d]"
                    />

                    <input
                      type="tel"
                      placeholder="Phone number (10 digits)"
                      value={phone}
                      onChange={(e) =>
                        setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                      }
                      className="bg-transparent border border-[#444444] rounded-xl px-3 py-2 outline-none placeholder:text-gray-400 focus:border-[#ffcb3d]"
                    />

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                      onClick={placeOrder}
                      disabled={placing}
                      className="w-full bg-white text-black py-2 rounded-xl font-medium hover:bg-[#ffcb3d] transition-colors duration-300 hover:cursor-pointer disabled:opacity-50"
                    >
                      {placing ? "Placing order..." : "Place order"}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;