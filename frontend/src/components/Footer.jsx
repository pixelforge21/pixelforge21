import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600 mt-10">
      © {new Date().getFullYear()} PixelForge. All rights reserved.
    </footer>
  );
};

export default Footer;

