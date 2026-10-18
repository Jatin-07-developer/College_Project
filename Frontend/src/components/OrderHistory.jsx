import { useState } from "react";

const API_URL = "http://localhost:5000";

const statusColor = {
  Placed: "text-[#ffcb3d]",
  Preparing: "text-orange-400",
  Ready: "text-[#0DA30C]",
};

const OrderHistory = () => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const closePanel = () => {
    setOpen(false);
    setOrders([]);
    setError("");
    setSearched(false);
  };

  const findOrders = async () => {
    setError("");

    if (!/^\d{10}$/.test(phone)) {
      setError("Enter the 10-digit phone number you used while ordering.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/orders/history/${phone}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Could not load orders");

      setOrders(data);
      setSearched(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-40 bg-[#1A1A19] text-white border border-[#ffcb3d] rounded-full px-5 py-3 shadow-lg hover:bg-[#ffcb3d] hover:text-black transition-colors duration-300 hover:cursor-pointer"
      >
        My orders
      </button>

      {/* Panel */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={closePanel}
        >
          <div
            className="w-full max-w-lg max-h-[85vh] overflow-y-auto bg-[#1A1A19] text-white rounded-2xl border border-[#6a4c2b] p-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">My orders</h2>
              <button
                onClick={closePanel}
                className="text-3xl leading-none hover:text-[#ffcb3d] hover:cursor-pointer"
              >
                ×
              </button>
            </div>

            {/* Phone search */}
            <div className="flex gap-2 mb-2">
              <input
                type="tel"
                placeholder="Phone number (10 digits)"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
                onKeyDown={(e) => e.key === "Enter" && findOrders()}
                className="flex-1 bg-transparent border border-[#444444] rounded-xl px-3 py-2 outline-none placeholder:text-gray-400 focus:border-[#ffcb3d]"
              />
              <button
                onClick={findOrders}
                disabled={loading}
                className="bg-white text-black px-4 rounded-xl font-medium hover:bg-[#ffcb3d] transition-colors duration-300 hover:cursor-pointer disabled:opacity-50"
              >
                {loading ? "..." : searched ? "Refresh" : "Find"}
              </button>
            </div>

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            {/* No orders found */}
            {searched && orders.length === 0 && !error && (
              <p className="text-gray-400 text-center py-6">
                No orders found for this number.
              </p>
            )}

            {/* Orders list */}
            <div className="flex flex-col gap-4 mt-3">
              {orders.map((order) => (
                <div
                  key={order._id}
                  className="border border-dashed border-[#6a4c2b] rounded-xl p-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">
                      #{order._id.slice(-6).toUpperCase()}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        statusColor[order.status] || "text-white"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-3">
                    {new Date(order.createdAt).toLocaleString("en-IN", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>

                  <div className="flex flex-col gap-1 text-sm">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span>
                          {item.name} x {item.qty}
                        </span>
                        <span>Rs {item.price * item.qty}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between font-semibold border-t border-[#444444] pt-2 mt-3">
                    <span>Total</span>
                    <span className="text-[#ffcb3d]">Rs {order.total}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderHistory;