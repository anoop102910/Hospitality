import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Navbar";
import React from "react";
import { Outlet, Route,  Routes } from "react-router-dom";

function Layout() {
  return (
      <div className=" w-full h-full">
        <Header />
        <div className="py-4">
            <Outlet/>
        </div>
        <Footer/>
      </div>
  );
}

export default Layout;

