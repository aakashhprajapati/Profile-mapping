
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-orange-600 rounded"></div>
              <span className="text-xl font-bold">lejhro</span>
            </div>
            <p className="text-gray-400">
              Empowering the next generation of tech professionals through immersive bootcamps and resources.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/web-development" className="hover:text-white">Web Development</Link></li>
            <li><Link to="/data-science" className="hover:text-white">Data Science</Link></li>
              <li><Link to="/ux-ui-design" className="hover:text-white">UX/UI Design</Link></li>
            <li><Link to="/digital-marketing" className="hover:text-white">Digital Marketing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
           <li><Link to="/resources" className="hover:text-white">Blog</Link></li>
              <li><Link to="/guides" className="hover:text-white">Guides</Link></li>
           <li><Link to="/webinars" className="hover:text-white">Webinars</Link></li>
              <li><Link to="/community" className="hover:text-white">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
           <li><Link to="/about" className="hover:text-white">About Us</Link></li>
             <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
          <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>©lejhro.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;