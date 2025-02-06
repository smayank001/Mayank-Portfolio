//import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["JAVASCRIPT", "C", "C++", "SWIFT", "PYTHON"]
    },
    {
      category: "Frameworks",
      skills: ["MERN", "REACT NATIVE", "DJANGO", "SWIFT UI", "NEXT JS", "NEST JS"]
    },
    {
      category: "Version Control",
      skills: ["GIT", "GITHUB"]
    },
    {
      category: "Database",
      skills: ["MONGODB", "MYSQL", "POSTGRESQL"]
    },
    {
      category: "Other",
      skills: ["DOCKER", "CI&CD", "AWS (EC2, ECR, ECS)"]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e8e6e1' }}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="relative mt-0 mb-12">
          <h2 className="text-5xl font-bold tracking-wider">
            TECHNICAL<br />EXPERTISE
          </h2>
          
        </div>

        {/* Skills Grid */}
        <div className="space-y-5">
          {skillCategories.map((category, index) => (
            <div key={index} className="relative">
              <h3 className="text-1xl font-bold tracking-wide mb-3">
                {category.category.toUpperCase()}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="relative group"
                  >
                    <div className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md text-sm font-medium
                                 transform transition-all duration-200 hover:bg-gray-300">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold mb-4">Continuous Learning</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Constantly expanding my skill set and staying updated with the latest technologies
              in web and mobile development. Focused on mastering full-stack development practices
              and exploring new tools to enhance development efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;