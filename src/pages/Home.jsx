import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Services from "./Sevices";
import About from "./AboutSection";
import ContactUs from "./Contact";
import Footer from "./Footer";

const aboutUs = [
  {
    heading: "Company Overview",
    text: "New London Hospitality (NLH) plays a crucial role in the hospitality industry by overseeing the operations and strategic direction of multiple business properties. Our mission is to enhance operational efficiency, maximize revenue, and ensure the financial health of each property we manage.",
  },
  {
    heading: "Mission and Vision",
    text: "Our mission is to provide unparalleled management services that drive success for our clients. Our vision is to be the leading hospitality management company known for innovation, excellence, and exceptional customer service.",
  },
  {
    heading: "Team Introduction",
    text: "Meet our experienced team of professionals dedicated to achieving excellence in hospitality management.",
  },
];

const services = [
  {
    title: "Business Operations",
    description:
      "We manage daily operations, staffing, recruitment, training, and scheduling to ensure high service standards and operational efficiency.",
  },
  {
    title: "Revenue Management",
    description:
      "Our firm maximizes revenue through strategic pricing, optimizing distribution channels, and monitoring market trends.",
  },
  {
    title: "Financial Management",
    description:
      "We provide budgeting, accounting, and financial reporting to ensure profitability and compliance, offering real-time financial insights.",
  },
  {
    title: "Technology and Innovation",
    description:
      "We implement advanced technologies and innovative solutions to enhance business efficiency and customer experience.",
  },
  {
    title: "Customer Relations",
    description:
      "Our team focuses on maintaining excellent customer relations, ensuring high levels of client satisfaction.",
  },
  {
    title: "Human Resources",
    description:
      "We handle all aspects of HR management, including recruitment, training, and employee development.",
  },
  {
    title: "Quality Assurance",
    description:
      "We ensure high-quality standards across all operations to deliver exceptional service and client satisfaction.",
  },
];

function Home() {
  return (
    <div className="text-white min-h-screen ">
      {/* Home Section */}
      <div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {[...Array(5)].map((_, i) => (
              <CarouselItem key={i} className="relative h-[90vh]">
                <img
                  className="w-full z-[-10] h-[90vh] object-cover absolute top-0 left-0 right-0 "
                  src={`hero3.png`}
                  alt=""
                />
                <div className="pl-20 pt-20 mt-10 w-1/2 text-white">
                  <h1 className="top-10 text-5xl font-bold mb-2  ">
                    Delivering the Best Business Translation
                  </h1>
                  <p className="text-2xl mt-10  ">
                    Established in 1999, today our company is the synonym of the
                    top-notch translation standards and an important partner of
                    the biggest companies.
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden" />
          <CarouselNext className="hidden" />
        </Carousel>
      </div>

      {/* About Section      */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
