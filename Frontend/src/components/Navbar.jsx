import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full shadow-md py-10 flex justify-center pl-[400px]">
      <ul className="flex items-center space-x-10 text-lg font-medium text-fuchsia-100 border border-amber-50 px-6 py-2 rounded-lg">
        <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
        <li><Link to="/projects" className="hover:text-blue-500">Projects</Link></li>
        <li><Link to="/skills" className="hover:text-blue-500">Skills</Link></li>
        <li><Link to="/certification" className="hover:text-blue-500">Certificates</Link></li>
        <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
