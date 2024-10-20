import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'; 
import { IoCall } from 'react-icons/io5'; 
import { FaWhatsapp } from 'react-icons/fa'; 

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="flex flex-col items-center">
        <div className="flex justify-center space-x-20 mb-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sadiki-makokha-a24bb4231/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://github.com/MAKOKHA-KWEYU-SADIKI" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub size={24} />
          </a>
        </div>

        <p className="text-center text-gray-400 mb-2">
          <span className="flex items-center justify-center text-green-700">
            <FaWhatsapp className="mr-1 text-green-700" /> WhatsApp: <span className="text-white">+254 111 941 567</span>
          </span> 
          | 
          <span className="flex items-center justify-center text-blue-700">
            <IoCall className="mr-1 text-blue-700" /> Call: <span className="text-white">+254 762 481 905</span>
          </span>
        </p>

        <p className="text-center text-gray-400 mt-4">&copy; 2024 Abdirahman Sadique. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
