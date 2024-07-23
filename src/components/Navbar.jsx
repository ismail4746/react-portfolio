import { CodeIcon } from 'lucide-react';
import logo from '../assets/image.png';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return( 
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <CodeIcon />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaWhatsapp />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
