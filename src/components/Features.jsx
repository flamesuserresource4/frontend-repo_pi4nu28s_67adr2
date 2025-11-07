import { CalendarCheck2, UserRound, Lock, FileUp, Camera, Shield } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: CalendarCheck2,
      title: "Smart bookings",
      desc: "See doctor availability, book once, and get an on-screen OTP for visit verification.",
    },
    {
      icon: UserRound,
      title: "Patient accounts",
      desc: "Sign up with Gmail + name, set a password, and manage your profile securely.",
    },
    { icon: Lock, title: "Secure login", desc: "Gmail + password authentication with reset option." },
    {
      icon: FileUp,
      title: "Medical reports",
      desc: "Attach x-rays, prescriptions, and more — viewable anytime.",
    },
    { icon: Camera, title: "Camera or gallery", desc: "Upload files from camera or gallery for doctors and admins." },
    { icon: Shield, title: "Admin controls", desc: "Manage doctors, confirm visits via OTP, and update patient histories." },
  ];

  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything you need for hospital scheduling</h2>
        <p className="mt-3 text-gray-600">Designed for patients and admins at Brinda Hospital.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-700 grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1.5 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
