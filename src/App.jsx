import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />

        {/* Patients section */}
        <section id="patients" className="bg-gradient-to-b from-white to-blue-50/40 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <h2 className="text-2xl font-bold">For Patients</h2>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Sign up with Gmail + name, set a password</li>
                <li>• Login with Gmail + password</li>
                <li>• Browse doctors and live availability</li>
                <li>• Book one appointment at a time (no double booking)</li>
                <li>• Get on-screen OTP for visit verification</li>
                <li>• Upload and view reports: x-rays, prescriptions, and more</li>
                <li>• Manage profile and reset password</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Admins section */}
        <section id="admins" className="bg-gradient-to-b from-blue-50/40 to-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <h2 className="text-2xl font-bold">For Admins</h2>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Login with the provided email and password</li>
                <li>• Review and confirm daily appointments using OTP</li>
                <li>• Add, edit, or remove doctors and their photos (camera or gallery)</li>
                <li>• Upload patient reports from camera or gallery</li>
                <li>• Update patient histories and notes</li>
                <li>• Search patient history by Gmail</li>
                <li>• Admin demo login: <span className="font-mono">brindahospital1@gmail.com</span> / <span className="font-mono">Brinda@123</span></li>
              </ul>
            </div>
          </div>
        </section>

        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
