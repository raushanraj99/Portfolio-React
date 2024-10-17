import { useState } from "react";
// import {Link} from "react-router-dom"
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { NavbarItems } from "@/Constants/Constant";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="bg-[#2A3441] shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#C0DB11]">Portfolio</h1>
          <nav className="hidden md:flex space-x-4">
            {NavbarItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-[#C0DB11] hover:text-white transition-colors duration-200"
              >
                {item.Name}
              </Link>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#2A3441] shadow-md">
          <nav className="container mx-auto px-4 py-2 flex flex-col">
            {["Home", "About", "Skills", "Projects", "Achievement"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="py-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
