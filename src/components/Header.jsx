import { Stethoscope, CalendarCheck, Menu, LogIn, Shield, User } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showPatientLogin, setShowPatientLogin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  function closeAll() {
    setShowPatientLogin(false);
    setShowAdminLogin(false);
  }

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
          <button onClick={() => setShowPatientLogin(true)} className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 transition">
            <User className="h-4 w-4" /> Patient Login
          </button>
          <button onClick={() => setShowAdminLogin(true)} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
            <Shield className="h-4 w-4" /> Admin Login
          </button>
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
            <div className="h-px bg-gray-100 my-2" />
            <button onClick={() => { setShowPatientLogin(true); setOpen(false); }} className="inline-flex items-center gap-2 py-2 px-3 rounded-lg border border-gray-200">
              <User className="h-4 w-4" /> Patient Login
            </button>
            <button onClick={() => { setShowAdminLogin(true); setOpen(false); }} className="inline-flex items-center gap-2 py-2 px-3 rounded-lg bg-blue-600 text-white">
              <Shield className="h-4 w-4" /> Admin Login
            </button>
          </div>
        </div>
      )}

      {/* Patient Login Modal */}
      {showPatientLogin && (
        <Modal onClose={closeAll} title="Patient Login">
          <LoginForm mode="patient" onClose={closeAll} />
        </Modal>
      )}

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <Modal onClose={closeAll} title="Admin Login">
          <LoginForm mode="admin" onClose={closeAll} />
        </Modal>
      )}
    </header>
  );
}

function Modal({ children, onClose, title }) {
  return (
    <div className="fixed inset-0 z-30">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-0 grid place-items-center p-4">
        <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <button onClick={onClose} aria-label="Close" className="text-gray-400 hover:text-gray-600">✕</button>
          </div>
          <div className="p-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

function LoginForm({ mode = "patient", onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const demoAdmin = { email: "brindahospital1@gmail.com", password: "Brinda@123" };

  function handleSubmit(e) {
    e.preventDefault();
    // This is only the UI. Backend auth will be wired next.
    if (mode === "admin") {
      if (email === demoAdmin.email && password === demoAdmin.password) {
        alert("Admin login successful (demo)");
        onClose();
        return;
      } else {
        alert("Invalid admin credentials. Use demo in footer.");
        return;
      }
    }
    alert("Patient login submitted. Backend hookup coming next.");
    onClose();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Gmail</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@gmail.com"
          className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <div className="mt-1 flex items-center gap-2">
          <input
            type={showPassword ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-xs text-gray-500 hover:text-gray-700">
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {mode === "patient" && (
        <div className="flex items-center justify-between text-xs text-gray-500">
          <button type="button" onClick={() => alert("Sign up flow coming next")}>Create account</button>
          <button type="button" onClick={() => alert("Reset password flow coming next")}>Forgot password?</button>
        </div>
      )}

      <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition">
        <LogIn className="h-4 w-4" /> {mode === "admin" ? "Login as Admin" : "Login as Patient"}
      </button>

      {mode === "admin" && (
        <p className="text-xs text-gray-500 text-center">Use demo: {" "}
          <span className="font-mono">{demoAdmin.email}</span> / <span className="font-mono">{demoAdmin.password}</span>
        </p>
      )}
    </form>
  );
}
