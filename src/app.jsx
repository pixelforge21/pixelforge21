import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-gray-100">
        <section className="max-w-screen-xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-semibold mb-4">Welcome to PixelForge!</h1>
          <p className="text-gray-700">
            Explore our products, add to cart, or buy now. Exciting offers coming soon!
          </p>

          {/* You can replace below with a <Home /> or <ProductGrid /> component */}
          <div className="mt-6 text-center text-gray-500">
            <p>[ Products will appear here ]</p>
          </div>
        </section>
      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
};

export default App;
