import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-8 scroll-smooth">
      {/* Sticky Navbar */}
      <nav className="w-full max-w-6xl flex justify-between items-center px-8 py-6 sticky top-0 bg-gray-900 z-50 h-24">
        <h1 className="text-2xl font-bold text-red-500">Yepo</h1>

        <ul className="flex gap-6 text-gray-300 font-medium">
          <li className="hover:text-white cursor-pointer transition-colors">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-white cursor-pointer transition-colors">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-white cursor-pointer transition-colors">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-white cursor-pointer transition-colors">
            <a href="#aboutme">About me</a>
          </li>
          <li className="hover:text-white cursor-pointer transition-colors">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Smooth scroll to Contact Section */}
        <a href="#contact">
          <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-semibold btn-animate">
            CONTACT WITH ME
          </button>
        </a>
      </nav>

      {/* Home Section */}
      <section id="home" className="w-full scroll-mt-24">
        <Home />
      </section>

      
      {/* Contact Section */}
      <section id="contact" className="w-full scroll-mt-10">
        <Contact />
      </section>
    </div>
  );
}

export default App;
