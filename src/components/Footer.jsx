import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* About */}
        <div>
          <h3 className="font-semibold mb-2">About PixelForge</h3>
          <ul className="space-y-1 text-sm">
            <li>Company Info</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-2">Help</h3>
          <ul className="space-y-1 text-sm">
            <li>Customer Support</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold mb-2">Connect with Us</h3>
          <ul className="space-y-1 text-sm">
            <li>Email: support@pixelforge.com</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">
            PixelForge Pvt. Ltd.<br />
            Bengaluru, India<br />
            Phone: +91-90000-00000
          </p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} PixelForge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
