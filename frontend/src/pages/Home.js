// src/pages/Home.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image_profile from "../image_profile.jpeg";

function Home() {
  const illustrationImg = "https://via.placeholder.com/500x600?text=Illustration";
  const projectImg1 =
    "https://www.xenonstack.com/hubfs/xenonstack-credit-card-fraud-detection.png";
  const projectImg2 =
    "https://static.resumegiants.com/wp-content/uploads/sites/25/2022/06/09105622/Professional-portfolio-736x414.webp";
  const projectImg3 = "https://via.placeholder.com/400x300";

  const skills = [
    { name: "Java", color: "bg-red-500" },
    { name: "Python", color: "bg-blue-500" },
    { name: "SQL", color: "bg-green-500" },
    { name: "Basics of DSA", color: "bg-yellow-500" },
    { name: "HTML", color: "bg-orange-400" },
    { name: "CSS", color: "bg-purple-500" },
    { name: "JavaScript", color: "bg-yellow-300" },
    { name: "Tailwind", color: "bg-teal-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "Salesforce ADMIN", color: "bg-purple-500" },
    { name: "Basics of DSA", color: "bg-green-500" },
    { name: "Problem Solving and Analytical skills", color: "bg-red-500" },
  ];

  const projects = [
    {
      name: "CREDICARD_DEDECTION",
      description:
        "Interactive Credit Card Fraud Detection App using Logistic Regression, SVM, Random Forest, and Autoencoder models. Users input transaction features via sliders, get real-time fraud predictions with visual insights, and a voting system determines the final result. Dark mode UI and easy Streamlit deployment.",
      tech: "PYTHON, Machine learning models, streamlit",
      link: "https://github.com/Speeddrug/CreditCard_Dedection",
      image: projectImg1,
    },
    {
      name: "MY portfolio",
      description:
        "My portfolio project featuring React frontend, Node.js backend, MongoDB database, and contact form integration.",
      tech: "REACT JS, TAILWIND CSS, NODE JS, MONGODB",
      link: "#",
      image: projectImg2,
    },
    {
      name: "News App",
      description:
        "A live news app that delivers latest headlines from multiple sources around the world.",
      tech: "ReactJS, News API",
      link: "#",
      image: projectImg3,
    },
  ];

  const extracurriculars = [
    "State level Basketball Player – Winner in Year 2024 and 2022",
    "National Level Tennis Ball Cricket Player",
    "House captain in School",
    "Participated in Robosocer in technical fest – co-created a soccer playing robot prototype",
  ];

  const education = [
    "B.Tech Computer Science - DIT University",
    "High School - ST THOMAS' COLLEGE, DEHRADUN",
  ];

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="bg-gray-900 w-full min-h-screen px-4 overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto mt-12"
      >
        <div className="flex-1 text-center md:text-left md:pr-8">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Hello! <span className="animate-wave">👋</span>
            <br />
            I'm Pragati Aggarwal,
            <br />
            AI engineer and web developer.
          </h1>
          <p className="mt-4 text-gray-300 text-sm max-w-md md:max-w-xl">
            I am a proactive B.Tech Computer Science undergraduate from DIT
            University with a strong foundation in AI, software, and web
            development. Also well-acquainted with Salesforce admin CRM tool.
          </p>
        </div>

        <div className="flex-1 mt-8 md:mt-0 flex flex-col items-center relative -translate-y-6">
          <img
            src={image_profile}
            alt="Profile"
            className="w-56 h-56 rounded-full border-4 border-purple-500 object-cover shadow-lg max-w-full"
          />
          <div className="mt-4 flex gap-4 flex-wrap justify-center">
            <a
              href="https://github.com/Speeddrug"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pragati-aggarwal-843315365"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg"
            >
              LinkedIn
            </a>
            <a
              href="mailto:pragatiaggarwal2005@gmail.com"
              className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <div className="mt-20 flex flex-wrap gap-4 justify-center max-w-5xl mx-auto">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className={`${skill.color} px-6 py-3 rounded-full text-white text-sm md:text-base font-semibold shadow-md`}
          >
            {skill.name}
          </span>
        ))}
      </div>

      {/* Projects Heading */}
      <div id="projects" className="mt-28 relative text-center">
        <h2 className="text-5xl font-bold text-pink-500 mb-4 relative z-10">
          Projects
        </h2>
        <p className="text-gray-300 text-lg mb-12 relative z-10">
          Explore a selection of my recent work, showcasing my skills in full
          stack development.
        </p>
      </div>

      {/* Projects Section - Image Left, Description Right */}
      <div className="flex flex-col gap-16 max-w-6xl mx-auto mb-16">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="flex flex-col md:flex-row items-center md:items-start gap-8"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            {/* Image Left */}
            <div className="flex-1 flex justify-center">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-xl shadow-lg w-full max-w-md object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Description Right */}
            <div className="flex-1 bg-gray-800 p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl max-w-full">
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-2">{project.description}</p>
              <p className="text-gray-400 mb-4">{project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-md inline-block"
              >
                Live Link
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Education & Extra-curricular */}
      <div className="mt-16 w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-16">
        {/* Education Card */}
        <div
          className="relative bg-gray-800 p-6 rounded-xl shadow-md overflow-hidden"
          data-aos="fade-right"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqJ5FAIIgAxEqYimMjg7w9HS_LmqgPy9BVA&s"
            alt="Education Background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <h2 className="text-pink-500 text-xl font-semibold mb-4 relative z-10">
            Education
          </h2>
          <div className="flex flex-col gap-4 relative z-10">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-gray-700 p-4 rounded-md shadow-sm">
                {edu}
              </div>
            ))}
          </div>
        </div>

        {/* Extra-curricular Card */}
        <div
          className="relative bg-gray-800 p-6 rounded-xl shadow-md overflow-hidden"
          data-aos="fade-left"
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/022/336/935/small/basketball-background-illustration-ai-generative-free-photo.jpg"
            alt="Extra-curricular Background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <h2 className="text-pink-500 text-xl font-semibold mb-4 relative z-10">
            Extra-curricular Activities
          </h2>
          <div className="flex flex-col gap-4 relative z-10">
            {extracurriculars.map((act, idx) => (
              <div key={idx} className="bg-gray-700 p-4 rounded-md shadow-sm">
                {act}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
