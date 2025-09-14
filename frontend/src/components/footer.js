import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-500 opacity-20 animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Socials on left */}
        <div className="flex gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            Instagram
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400"
          >
            Discord
          </a>
        </div>

        {/* Name on right */}
        <div className="text-right">
          <h3 className="text-xl font-semibold">Pragati Aggarwal</h3>
          <p className="mt-2">Thank you for visiting!</p>
          <p className="mt-2 text-gray-400">&copy; 2025. Made by Pragati Aggarwal</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
