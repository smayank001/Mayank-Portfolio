import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-[#e8e6e1]">
        <nav className="bg-[#111827] text-white p-5">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">Mayank Saxena</Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-[#3b82f6] transition-colors">Home</Link>
              <Link to="/experience" className="hover:text-[#3b82f6] transition-colors">Experience</Link>
              <Link to="/projects" className="hover:text-[#3b82f6] transition-colors">Projects</Link>
              <Link to="/skills" className="hover:text-[#3b82f6] transition-colors">Skills</Link>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <Link 
                to="/" 
                className="block hover:text-[#3b82f6] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/experience" 
                className="block hover:text-[#3b82f6] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
              <Link 
                to="/projects" 
                className="block hover:text-[#3b82f6] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/skills" 
                className="block hover:text-[#3b82f6] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;