import { Leaf, ShieldCheck, Star, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "2,000+", label: "Students served daily" },
  { icon: Star, value: "4.8", label: "Average rating" },
  { icon: Leaf, value: "60+", label: "Fresh dishes" },
];

const highlights = [
  {
    icon: Leaf,
    title: "Fresh every day",
    text: "Our kitchen cooks in small batches from fresh ingredients, so your food is always hot and tasty.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene first",
    text: "Daily cleaning checks, gloved staff, and sealed water for every student.",
  },
  {
    icon: Star,
    title: "Student friendly prices",
    text: "Combo deals and meals starting from just Rs 30, made to fit a student budget.",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-[#1A1A19] text-white px-6 md:px-10 py-14">
      <h1 className="text-2xl font-semibold mb-3">About Campus Bites</h1>
      <p className="text-gray-400 max-w-3xl mb-8">
        Campus Bites started in 2015 with a simple idea: good food between
        lectures should be fast, fresh, and affordable. Today we serve thousands
        of students and staff every day, from quick snacks to full meals.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="border border-dashed border-[#6a4c2b] rounded-2xl p-5 flex items-center gap-4"
          >
            <Icon size={32} color="#ffcb3d" />
            <div>
              <p className="text-2xl font-bold text-[#ffcb3d]">{value}</p>
              <p className="text-gray-400 text-sm">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {highlights.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="border border-[#363636] rounded-2xl p-5 hover:border-[#ffcb3d] transition-all duration-300"
          >
            <Icon size={28} color="#ffcb3d" />
            <h3 className="text-lg font-medium mt-3 mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;