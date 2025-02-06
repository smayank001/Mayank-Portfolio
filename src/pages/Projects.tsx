//import React from 'react';
import Icons from "../assets/Icons";



const Projects = () => {
  const projects = [
    {
      title: "Food Order App",
      description: "A mobile Application based on React Native having 5 screens with signup-login authentication with JWT, and have field specific search-bar and generate QR code of Hashed order ID on placing order which can further verify by the backend.",
      tech: ["MongoDB", "Express js", "React Native", "Node js"],
      github: "",
      live: ""
    },
    {
      title: "Food Order App Using Swift",
      description: "A iOS mobile Application using Swift UI, having multiple screens with signup-login authentication with JWT, Google and Apple login, and have field specific search-bar and generate QR code of Hashed order ID on placing order which can further verify by the backend.",
      tech: ["MongoDB", "Express js", "Swift UI", "Node js"],
      github: "",
      live: ""
    },
    {
      title: "Event Booking, Management and Analysis System",
      description: "A web app for booking or posting events, shows and movies. Generates ticket QR Code after payment confirmation. Features include custom image storage using Multer, optimized search with MongoDB queries, and performance testing with 200k fake entries.",
      tech: ["MongoDB", "React", "Express", "Node Js"],
      github: "",
      live: ""
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e8e6e1' }}>
      <div className="max-w-7xl mx-auto px-4 py-1">
        {/* Header Section */}
        <div className="relative mt-10 mb-12">
          <h2 className="text-5xl font-bold tracking-wider">
            FEATURED<br />PROJECTS
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <div className="border-l-2 border-gray-400 pl-8 py-2">
                {/* Project Header */}
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                
                {/* Project Description */}
                <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md text-sm font-medium
                                 transform transition-all duration-200 hover:bg-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-6">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
                  >
                    <Icons.GitHub /> View Code
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
                  >
                    <Icons.ExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        
        <div className="mt-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold mb-4">More Projects</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              These are just a few highlights from my portfolio. Visit my GitHub profile to explore 
              more projects and see my coding style and development practices in action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;