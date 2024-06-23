import Header from "@/components/shared/navbar";
import React from "react";
import { Outlet, Route,  Routes } from "react-router-dom";

function Layout() {
  return (
      <div className=" w-full h-full">
        <Header />
        <div className="py-4">
            <Outlet/>
        </div>
      </div>
  );
}

export default Layout;

