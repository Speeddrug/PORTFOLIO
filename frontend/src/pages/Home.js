import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image_profile from "../image_profile.jpeg";

function Home() {
  const skills = [
    { name: "Java", color: "bg-red-500" },
    { name: "Python", color: "bg-blue-500" },
    { name: "SQL", color: "bg-green-500" },
    { name: "Basics of DSA", color: "bg-yellow-500" },
    { name: "HTML", color: "bg-orange-400" },
    { name: "CSS", color: "bg-purple-500" },
    { name: "JavaScript", color: "bg-yellow-300" },
    { name: "Tailwind css", color: "bg-teal-500" },
    { name: "React JS", color: "bg-cyan-500" },
    { name: "Vite", color: "bg-blue-500" },
    { name: "Salesforce ADMIN", color: "bg-purple-500" },
    { name: "Problem Solving and Analytical skills", color: "bg-red-500" },
  ];

  const projects = [
    {
      name: "CREDICARD_DEDECTION",
      description:
        "Interactive Credit Card Fraud Detection App using Logistic Regression, SVM, Random Forest, and Autoencoder models.",
      tech: "PYTHON, Machine learning models, streamlit",
      link: "https://github.com/Speeddrug/CreditCard_Dedection",
      image:
        "https://www.xenonstack.com/hubfs/xenonstack-credit-card-fraud-detection.png",
    },
    {
      name: "MY portfolio",
      description:
        "My portfolio project featuring React frontend, Node.js backend, MongoDB database, and contact form integration.",
      tech: "REACT JS, TAILWIND CSS, NODE JS, MONGODB",
      link: "#",
      image:
        "https://static.resumegiants.com/wp-content/uploads/sites/25/2022/06/09105622/Professional-portfolio-736x414.webp",
    },
    {
      name: "Speedy_BOOKSHOW",
      description:
        "Movie ticket booking web app with a fast, responsive UI, showtime browsing, and seamless booking flow.",
      tech: "React.js, Tailwind CSS, Clerk Auth, AOS, Vite",
      link: "https://github.com/Speeddrug/MOVIETICKETBOOK",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHNMp_kq-cjP56qh3YQXd7s7rREApK967VSmXYoS0AxBbamBeKWS6W9M7kSp8rG3eHopM&usqp=CAU",
    },
  ];

  const extracurriculars = [
    "State level Basketball Player – Winner in Year 2024 and 2022",
    "National Level Tennis Ball Cricket Player",
    "House captain in School",
    "Participated in Robosoccer in technical fest – co-created a soccer playing robot prototype",
  ];

  const education = [
    "B.Tech Computer Science - DIT University",
    " secondary High School- ST THOMAS' COLLEGE, DEHRADUN",
    "High School- ST THOMAS' COLLEGE, DEHRADUN",
  ];

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="bg-gray-900 w-full min-h-screen px-4 overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto mt-12 scroll-mt-24"
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
           "I'm a B.Tech CS student passionate about AI, web, and software development.
            Also well-acquainted with Salesforce admin CRM tool.I love creating impactful projects
            and bring creative ideas to life—let’s build something awesome together!"
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
  href="https://mail.google.com/mail/?view=cm&fs=1&to=pragatiaggarwal2005@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg"
>
  Email
</a>


          </div>
        </div>
      </section>

     
{/* Skills Section */}
<div id="skills" className="mt-28 relative text-center scroll-mt-32">
  <h2 className="text-5xl font-bold  text-purple-500 mb-4 relative z-10">
    Skills
  </h2>
  <p className="text-gray-300 text-lg mb-12 relative z-10">
    A snapshot of my technical expertise and tools I work with.
  </p>

  <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto">
    {skills.map((skill) => (
      <span
        key={skill.name}
        className={`${skill.color} px-6 py-3 rounded-full text-white text-sm md:text-base font-semibold shadow-md`}
      >
        {skill.name}
      </span>
    ))}
  </div>
</div>


      {/* Projects Heading */}
      <div id="projects" className="mt-28 relative text-center scroll-mt-24">
        <h2 className="text-5xl font-bold  text-purple-500
         mb-4 relative z-10">
          Projects
        </h2>
        <p className="text-gray-300 text-lg mb-12 relative z-10">
          Explore a selection of my recent work,showcasing my skills
        </p>
      </div>

      {/* Projects Section */}
      <div className="flex flex-col gap-16 max-w-6xl mx-auto mb-16">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="flex flex-col md:flex-row items-center md:items-start gap-8"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="flex-1 flex justify-center">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-xl shadow-lg w-full max-w-md object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
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

     {/* About Me Section */}
<div id="aboutme" className="mt-28 text-center scroll-mt-32">
  <h2 className="text-5xl font-bold text-purple-500 mb-4">About Me</h2>
  <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
    Passionate Computer Science student exploring AI/ML and  web development. I love building creative solutions,
     experimenting with new technologies, and continuously learning to improve my skills.
      I am a determined and curious individual who enjoys sports, going to the gym, biking, and reading fiction novels.
  </p>
  
</div>
      {/* Education & Extra-curricular */}
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-16">
        <div className="relative bg-gray-800 p-6 rounded-xl shadow-md overflow-hidden" data-aos="fade-right">
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

        <div className="relative bg-gray-800 p-6 rounded-xl shadow-md overflow-hidden" data-aos="fade-left">
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
