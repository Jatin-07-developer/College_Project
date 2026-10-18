import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const details = [
  { icon: MapPin, label: "Location", value: "Main Block, Ground Floor, Campus" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "hello@campusbites.com" },
  { icon: Clock, label: "Timings", value: "Mon to Sat, 8 AM to 6 PM (Sunday closed)" },
];

const inputClass =
  "bg-transparent border border-[#444444] rounded-xl px-3 py-2 outline-none placeholder:text-gray-400 focus:border-[#ffcb3d]";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all the fields.");
      return;
    }
    setError("");
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#1A1A19] text-white px-6 md:px-10 py-14">
      <h1 className="text-2xl font-semibold mb-8">Contact us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Details */}
        <div className="flex flex-col gap-4">
          {details.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="border border-dashed border-[#6a4c2b] rounded-2xl p-4 flex items-center gap-4"
            >
              <Icon size={26} color="#ffcb3d" />
              <div>
                <p className="text-gray-400 text-sm">{label}</p>
                <p>{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="border border-[#363636] rounded-2xl p-5 flex flex-col gap-4"
        >
          <h2 className="text-lg font-medium">Send us a message</h2>

          {sent ? (
            <div className="flex flex-col gap-4">
              <p className="text-[#0DA30C]">
                Thank you! Your message has been received. We will get back to
                you soon.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="border border-[#444444] rounded-xl px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300 hover:cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <input
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
                className={inputClass}
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                className="bg-white text-black py-2 rounded-xl font-medium hover:bg-[#ffcb3d] transition-colors duration-300 hover:cursor-pointer"
              >
                Send message
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;