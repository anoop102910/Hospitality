import React from "react";
import { Home, Facebook, Twitter, PointerIcon, Instagram } from "lucide-react"; // Import Lucide icons
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    { text: "Home", icon: <Home size={18} />, link: "/" },
    { text: "Technology", icon: <Home size={18} />, link: "/technology" },
    { text: "Bussiness", icon: <Home size={18} />, link: "/bussiness" },
    { text: "Finance", icon: <Home size={18} />, link: "/financial-management" },
    { text: "Customer ", icon: <Home size={18} />, link: "/customer-relations" },
    { text: "Quality", icon: <Home size={18} />, link: "/quality" },
    { text: "About Us", icon: <Home size={18} />, link: "/about-us" },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 lg:px-20 py-2">
      <nav className="px-4 lg:px-6 py-2.5 flex items-center justify-between">
        <div className="flex flex-wrap justify-between items-center  ">
          <Link to="/" className="flex items-center">
            <img
              src="logo.jpeg"
              className="mr-3 h-6 sm:h-16"
              alt="New London Hospitality Logo"
            />
            <div className="flex flex-col items-center">
              <span className="whitespace-nowrap dark:text-white">
                New London
              </span>
              <span className="whitespace-nowrap dark:text-white">
                Hospitality
              </span>
            </div>
          </Link>
        </div>
        <div className="ml-20 max-sm:hidden ">
          <div className="flex mb-2 flex-col sm:flex-row sm:items-center sm:space-x-6 border-slate-200 border-b-[1px]">
            <div className="flex flex-col sm:flex-row sm:space-x-6 justify-between  text-gray-600 dark:text-gray-300">
              <div className="flex flex-col sm:flex-row sm:space-x-4 p-1 ">
                <span className="font-medium">Phone:</span>
                <span>1234567890</span>
                <div className="h-full w-[1px] rounded-full bg-slate-300"></div>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 p-1">
                <span className="font-medium">E-mail:</span>
                <span>mail@demolink.org</span>
                <div className="h-full w-[1px] rounded-full bg-slate-300"></div>
              </div>
            </div>
            <div className="flex space-x-4 p-1 mt-2 sm:mt-0">
              <Facebook className="text-blue-600" />
              <Twitter className="text-blue-400" />
              <Instagram className="text-gray-600 dark:text-gray-300" />
            </div>
          </div>
          <div className="flex justify-between items-center w-full lg:flex lg:w-auto lg:order-1  lg:mt-0">
            <ul className="flex flex-col lg:flex-row lg:space-x-4 ">
              {navItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Link to={item.link} className="dark:text-white">{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

