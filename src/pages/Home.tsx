import { Phone, Mail, Github, ExternalLink } from 'lucide-react';
import mayank1 from '../Images/mayank1.jpg';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
          <img
            src={mayank1}
            alt="Profile"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            MAYANK
            <br />
            SAXENA
          </h1>
          <p className="text-base md:text-lg mb-5">
            Passionate and skilled Web and App Developer eager to leverage technical expertise
            and hands-on experience in real-world projects. Driven to collaborate within
            dynamic teams, learning from industry leaders while deepening skills in MERN, React
            Native, Django, SWIFT UI and other cutting-edge technologies. Focused on creating
            impactful solutions and continuously advancing in the field.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
            <a
              href="tel:+918851432459"
              className="flex items-center text-[#000000] hover:"
            >
              <Phone className="w-5 h-5 mr-2" />
              +918851432459
            </a>
            <a
              href="mailto:mayanksaxena1262@gmail.com"
              className="flex items-center text-[#000000] hover:"
            >
              <Mail className="w-5 h-5 mr-2" />
              mayanksaxena1262@gmail.com
            </a>
            <a
              href="https://github.com/smayank001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#000000] hover:"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            
            <a
              href="https://portfolio.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#000000] hover:"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Portfolio Website
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Education</h2>
        {/* <div className="bg-gray p-4 md:p-6 rounded-lg shadow-md"> */}
          <h3 className="text-lg md:text-xl font-semibold">Bachelor In Technology (Computer Science)</h3>
          <p className="text-gray-600">Ajay Kumar Garg Engineering College</p>
          <p className="text-gray-600">2022 - 2025</p>
        </div>
      </div>
    // </div>
  );
}

export default Home;