import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000";
const STATUSES = ["Placed", "Preparing", "Ready"];
const CATEGORIES = ["Snacks", "Meals", "Beverages", "Desserts"];

const emptyForm = {
  name: "",
  price: "",
  category: "Snacks",
  type: "Veg",
  image: "",
  available: true,
};

const statusStyle = {
  Placed: "text-[#ffcb3d] border-[#ffcb3d]",
  Preparing: "text-orange-400 border-orange-400",
  Ready: "text-[#0DA30C] border-[#0DA30C]",
};

const inputClass =
  "bg-transparent border border-[#444444] rounded-xl px-3 py-2 outline-none placeholder:text-gray-400 focus:border-[#ffcb3d]";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");
  const adminName = localStorage.getItem("adminName");

  const [tab, setTab] = useState("orders");
  const [orders, setOrders] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [dishSearch, setDishSearch] = useState("");
  const [dishCategory, setDishCategory] = useState("All");
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 3000);
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminName");
    navigate("/");
  };

  // fetch helper that attaches the token and handles expired logins
  const authFetch = async (path, options = {}) => {
    const res = await fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...(options.headers || {}),
      },
    });

    if (res.status === 401) {
      logout();
      throw new Error("Session expired. Please log in again.");
    }

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Something went wrong");
    return data;
  };

  const loadOrders = async () => {
    try {
      setOrders(await authFetch("/api/orders"));
    } catch (err) {
      showMessage("error", err.message);
    }
  };

  const loadDishes = async () => {
    try {
      setDishes(await authFetch("/api/menu?all=true"));
    } catch (err) {
      showMessage("error", err.message);
    }
  };

  useEffect(() => {
    if (!token) return;
    Promise.all([loadOrders(), loadDishes()]).finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // not logged in? send to the first page
  if (!token) {
    return <Navigate to="/" replace />;
  }

  /* ---------- Orders ---------- */

  const changeStatus = async (id, status) => {
    try {
      const updated = await authFetch(`/api/orders/${id}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
      setOrders((prev) => prev.map((o) => (o._id === id ? updated : o)));
    } catch (err) {
      showMessage("error", err.message);
    }
  };

  const visibleOrders =
    statusFilter === "All"
      ? orders
      : orders.filter((o) => o.status === statusFilter);

  const newOrders = orders.filter((o) => o.status === "Placed").length;
  const totalSales = orders.reduce((sum, o) => sum + o.total, 0);

  /* ---------- Dishes ---------- */

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const startEdit = (dish) => {
    setForm({
      name: dish.name,
      price: String(dish.price),
      category: dish.category,
      type: dish.type || "",
      image: dish.image || "",
      available: dish.available !== false,
    });
    setEditingId(dish._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const saveDish = async (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      showMessage("error", "Dish name is required.");
      return;
    }
    if (!form.price || Number(form.price) <= 0) {
      showMessage("error", "Enter a valid price.");
      return;
    }

    const body = JSON.stringify({
      name: form.name.trim(),
      price: Number(form.price),
      category: form.category,
      type: form.type.trim(),
      image: form.image.trim(),
      available: form.available,
    });

    setSaving(true);
    try {
      if (editingId) {
        await authFetch(`/api/menu/${editingId}`, { method: "PUT", body });
        showMessage("success", "Dish updated.");
      } else {
        await authFetch("/api/menu", { method: "POST", body });
        showMessage("success", "Dish added.");
      }
      resetForm();
      await loadDishes();
    } catch (err) {
      showMessage("error", err.message);
    } finally {
      setSaving(false);
    }
  };

  const toggleAvailable = async (dish) => {
    try {
      const updated = await authFetch(`/api/menu/${dish._id}`, {
        method: "PUT",
        body: JSON.stringify({ available: !dish.available }),
      });
      setDishes((prev) => prev.map((d) => (d._id === dish._id ? updated : d)));
    } catch (err) {
      showMessage("error", err.message);
    }
  };

  const deleteDish = async (dish) => {
    if (!window.confirm(`Delete "${dish.name}"? This cannot be undone.`)) return;
    try {
      await authFetch(`/api/menu/${dish._id}`, { method: "DELETE" });
      setDishes((prev) => prev.filter((d) => d._id !== dish._id));
      if (editingId === dish._id) resetForm();
      showMessage("success", "Dish deleted.");
    } catch (err) {
      showMessage("error", err.message);
    }
  };

  const visibleDishes = dishes.filter(
    (d) =>
      (dishCategory === "All" || d.category === dishCategory) &&
      d.name.toLowerCase().includes(dishSearch.toLowerCase())
  );

  /* ---------- Screen ---------- */

  return (
    <div className="bg-[#1A1A19] min-h-screen text-white px-4 md:px-10 py-6">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Admin dashboard</h1>
          <p className="text-gray-400 text-sm">Welcome, {adminName}</p>
        </div>
        <div className="flex gap-3">
          <Link
            to="/home"
            className="border border-[#444444] rounded-xl px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300"
          >
            View website
          </Link>
          <button
            onClick={logout}
            className="border border-[#444444] rounded-xl px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300 hover:cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Message banner */}
      {message && (
        <div
          className={`mb-4 rounded-xl px-4 py-2 text-sm border ${
            message.type === "error"
              ? "text-red-400 border-red-500"
              : "text-[#0DA30C] border-[#0DA30C]"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="border border-dashed border-[#6a4c2b] rounded-2xl p-4">
          <p className="text-gray-400 text-sm">Total orders</p>
          <p className="text-2xl font-bold">{orders.length}</p>
        </div>
        <div className="border border-dashed border-[#6a4c2b] rounded-2xl p-4">
          <p className="text-gray-400 text-sm">New orders</p>
          <p className="text-2xl font-bold text-[#ffcb3d]">{newOrders}</p>
        </div>
        <div className="border border-dashed border-[#6a4c2b] rounded-2xl p-4">
          <p className="text-gray-400 text-sm">Total sales</p>
          <p className="text-2xl font-bold">Rs {totalSales}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-6">
        {[
          { key: "orders", label: "Orders" },
          { key: "menu", label: "Menu" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`py-2 px-5 rounded-xl border transition-all duration-300 hover:cursor-pointer ${
              tab === t.key
                ? "bg-white text-[#1A1A19] border-white"
                : "bg-transparent text-white border-[#444444] hover:bg-white hover:text-[#1A1A19]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {loading && <p className="text-gray-400">Loading...</p>}

      {/* ================= ORDERS TAB ================= */}
      {!loading && tab === "orders" && (
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            {["All", ...STATUSES].map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`py-1 px-4 rounded-full border text-sm hover:cursor-pointer ${
                  statusFilter === s
                    ? "bg-[#ffcb3d] text-black border-[#ffcb3d]"
                    : "border-[#444444] text-white"
                }`}
              >
                {s}
              </button>
            ))}
            <button
              onClick={loadOrders}
              className="ml-auto border border-[#444444] rounded-xl px-4 py-1 text-sm hover:bg-white hover:text-black transition-colors duration-300 hover:cursor-pointer"
            >
              Refresh
            </button>
          </div>

          {visibleOrders.length === 0 && (
            <p className="text-gray-400">No orders to show.</p>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {visibleOrders.map((order) => (
              <div
                key={order._id}
                className="border border-dashed border-[#6a4c2b] rounded-2xl p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">
                      #{order._id.slice(-6).toUpperCase()} - {order.customerName}
                    </p>
                    <p className="text-gray-400 text-sm">{order.phone}</p>
                    <p className="text-gray-400 text-sm">
                      {new Date(order.createdAt).toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </p>
                  </div>

                  <select
                    value={order.status}
                    onChange={(e) => changeStatus(order._id, e.target.value)}
                    className={`bg-[#1A1A19] border rounded-xl px-3 py-1 text-sm outline-none hover:cursor-pointer ${
                      statusStyle[order.status]
                    }`}
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1 text-sm mt-3">
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
      )}

      {/* ================= MENU TAB ================= */}
      {!loading && tab === "menu" && (
        <div className="flex flex-col gap-8">
          {/* Add / edit form */}
          <form
            onSubmit={saveDish}
            className="border border-dashed border-[#6a4c2b] rounded-2xl p-5 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <h2 className="md:col-span-2 text-xl font-semibold">
              {editingId ? "Edit dish" : "Add a new dish"}
            </h2>

            <input
              name="name"
              placeholder="Dish name"
              value={form.name}
              onChange={handleFormChange}
              className={inputClass}
            />
            <input
              name="price"
              type="number"
              min="1"
              placeholder="Price (Rs)"
              value={form.price}
              onChange={handleFormChange}
              className={inputClass}
            />

            <select
              name="category"
              value={form.category}
              onChange={handleFormChange}
              className={`${inputClass} bg-[#1A1A19]`}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <input
              name="type"
              placeholder="Type (for example Veg or Non-Veg)"
              value={form.type}
              onChange={handleFormChange}
              className={inputClass}
            />

            <input
              name="image"
              placeholder="Image link (https://...)"
              value={form.image}
              onChange={handleFormChange}
              className={`${inputClass} md:col-span-2`}
            />

            <label className="flex items-center gap-2 text-sm md:col-span-2">
              <input
                name="available"
                type="checkbox"
                checked={form.available}
                onChange={handleFormChange}
              />
              Available to customers
            </label>

            <div className="md:col-span-2 flex gap-3">
              <button
                type="submit"
                disabled={saving}
                className="bg-white text-black px-6 py-2 rounded-xl font-medium hover:bg-[#ffcb3d] transition-colors duration-300 hover:cursor-pointer disabled:opacity-50"
              >
                {saving ? "Saving..." : editingId ? "Update dish" : "Add dish"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="border border-[#444444] px-6 py-2 rounded-xl hover:bg-white hover:text-black transition-colors duration-300 hover:cursor-pointer"
                >
                  Cancel edit
                </button>
              )}
            </div>
          </form>

          {/* Dish list */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h2 className="text-xl font-semibold mr-auto">
                All dishes ({visibleDishes.length})
              </h2>
              <input
                placeholder="Search dishes"
                value={dishSearch}
                onChange={(e) => setDishSearch(e.target.value)}
                className={inputClass}
              />
              <select
                value={dishCategory}
                onChange={(e) => setDishCategory(e.target.value)}
                className={`${inputClass} bg-[#1A1A19]`}
              >
                {["All", ...CATEGORIES].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-3">
              {visibleDishes.map((dish) => (
                <div
                  key={dish._id}
                  className="border border-[#363636] rounded-xl p-3 flex flex-wrap items-center gap-4"
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-14 h-14 object-cover rounded-lg bg-[#2a2a29]"
                  />

                  <div className="flex-1 min-w-[160px]">
                    <p className="font-medium">{dish.name}</p>
                    <p className="text-gray-400 text-sm">
                      {dish.category} - {dish.type}
                    </p>
                  </div>

                  <p className="text-[#ffcb3d] font-bold">Rs {dish.price}</p>

                  <button
                    onClick={() => toggleAvailable(dish)}
                    className={`text-sm border rounded-full px-3 py-1 hover:cursor-pointer ${
                      dish.available
                        ? "text-[#0DA30C] border-[#0DA30C]"
                        : "text-gray-400 border-gray-500"
                    }`}
                  >
                    {dish.available ? "Available" : "Hidden"}
                  </button>

                  <button
                    onClick={() => startEdit(dish)}
                    className="text-sm border border-[#444444] rounded-xl px-3 py-1 hover:bg-white hover:text-black transition-colors duration-300 hover:cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteDish(dish)}
                    className="text-sm border border-red-500 text-red-400 rounded-xl px-3 py-1 hover:bg-red-500 hover:text-white transition-colors duration-300 hover:cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              ))}

              {visibleDishes.length === 0 && (
                <p className="text-gray-400">No dishes found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;