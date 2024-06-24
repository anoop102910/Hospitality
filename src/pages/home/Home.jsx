import React from "react";
import Services from "./Sevices";
import About from "./About";
import ContactUs from "./Contact";
import Main from "./Main";

function Home() {
  return (
    <div className="text-white min-h-screen ">
      {/* Main Section */}
      <Main />

      {/* About Section      */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <ContactUs />

    </div>
  );
}

export default Home;
