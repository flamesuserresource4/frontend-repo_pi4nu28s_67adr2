import { ArrowRight, ShieldCheck, CalendarDays } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50" />
      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-700 bg-blue-100 rounded-full px-3 py-1">
            <ShieldCheck className="h-4 w-4" /> Trusted hospital bookings
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Book hospital appointments with confidence
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Secure sign up, OTP visit verification, medical report storage, and real-time doctor availability — all in one place.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#patients" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium shadow-sm">
              Get started <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#admins" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-5 py-3 rounded-xl font-medium border border-gray-200">
              For Admins
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-blue-600" /> No double booking policy</div>
            <div>Encrypted medical reports</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-white border border-gray-100 shadow-xl p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-36 rounded-xl bg-blue-100/80"></div>
              <div className="h-36 rounded-xl bg-cyan-100/70"></div>
              <div className="h-24 rounded-xl bg-indigo-100"></div>
              <div className="h-24 rounded-xl bg-violet-100"></div>
            </div>
            <p className="mt-4 text-sm text-gray-600">Preview of patient dashboard cards</p>
          </div>
        </div>
      </div>
    </section>
  );
}
