import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="max-w-screen-xl mx-auto px-4 py-6 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="text-sm space-y-1">
            <li>About Us</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="text-sm space-y-1">
            <li>FAQs</li>
            <li>Returns</li>
            <li>Shipping</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Policies</h3>
          <ul className="text-sm space-y-1">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Cancellation</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <ul className="text-sm space-y-1">
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 py-4 border-t border-gray-700">
        © 2025 PixelForge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
