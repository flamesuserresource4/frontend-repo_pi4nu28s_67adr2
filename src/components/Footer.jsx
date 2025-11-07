export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h4 className="text-xl font-semibold text-gray-900">BrindaCare</h4>
          <p className="mt-2 text-gray-600 text-sm">Streamlined hospital appointments with OTP verification and secure report storage.</p>
        </div>
        <div className="md:justify-self-end text-sm text-gray-500">
          <p>Admin demo login: brindahospital1@gmail.com / Brinda@123</p>
          <p className="mt-1">© {new Date().getFullYear()} Brinda Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
