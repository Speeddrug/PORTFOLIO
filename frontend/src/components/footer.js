import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi"; // Resume icon
import { SiX } from "react-icons/si"; // X (formerly Twitter) logo


function Footer() {
  const icons = [
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/pragati-aggarwal-843315365/",
      color: "text-blue-600 hover:text-blue-400",
    },
    {
    icon: <SiX />,
    link: "https://x.com/Pra_gati_", // replace with your X profile
    color: "text-sky-400 hover:text-sky-300",
  },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/pra.gati._/",
      color: "text-pink-500 hover:text-pink-400",
    },
    {
      icon: <HiOutlineDocumentText />,
      link: "https://drive.google.com/file/d/1RPze0siB4fSRTWV5pQJC5ojisx6JvEum/view?usp=sharing",
      color: "text-green-500 hover:text-green-400",
    },
  ];

  return (
    <footer className="w-full bg-gray-900 text-white py-8 relative overflow-hidden">
      {/* Animated diagonal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 opacity-20 animate-gradient-slow pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Icons */}
        <div className="flex gap-4 mb-4 md:mb-0">
          {icons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 transition-all duration-300 transform hover:scale-110 ${item.color}`}
            >
              <span className="text-2xl">{item.icon}</span>
            </a>
          ))}
        </div>

        {/* Name and Footer Text */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-semibold">Pragati Aggarwal</h3>
          <p className="mt-2">pragatiaggarwal2005@gmail.com</p>
          <p className="mt-2">Thank you for visiting!</p>
          <p className="mt-2 text-gray-400">&copy; 2025. Made by Pragati Aggarwal</p>
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes gradientSlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-slow {
            background-size: 400% 400%;
            animation: gradientSlow 15s ease infinite;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
