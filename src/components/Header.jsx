import { Stethoscope, CalendarCheck, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-blue-600 text-white grid place-items-center">
            <Stethoscope className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-gray-900">BrindaCare</p>
            <p className="text-xs text-gray-500 -mt-1">Smart hospital bookings</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#patients" className="hover:text-gray-900">Patients</a>
          <a href="#admins" className="hover:text-gray-900">Admins</a>
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#book" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
            <CalendarCheck className="h-4 w-4" /> Book now
          </a>
        </div>

        <button aria-label="Open Menu" className="md:hidden p-2 rounded-lg border border-gray-200" onClick={() => setOpen(!open)}>
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2 text-sm">
            <a href="#patients" className="py-2">Patients</a>
            <a href="#admins" className="py-2">Admins</a>
            <a href="#features" className="py-2">Features</a>
            <a href="#contact" className="py-2">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
