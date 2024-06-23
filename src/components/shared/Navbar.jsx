import React from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex justify-between items-center py-4 px-20 ">
      <div className="flex items-center">
        <img src="logo.jpeg" className="w-16" alt="" />
        <div className="text-xs font-bold  flex flex-col ml-2">
        <span>New London </span>
        <span>Hospitality</span>
        </div>
      </div>
      <nav className="flex space-x-8 max-sm:hidden">
        {[
          { name: "Home", link: "/" },
          { name: "Hotel", link: "/hotel" },
          { name: "Process", link: "/process" },
          { name: "Technology", link: "/technology" },
          { name: "About", link: "/about" },
          { name: "Subscribe", link: "/subscribe" },
        ].map(item => (
          <Link
            to={item.link}
            className="text-gray-500 hover:text-gray-100 transition-all"
            key={item.name}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <div>
        <Search className="" />
      </div>
    </header>
  );
}

export default Navbar;
