import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

function Main() {
  return (
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
            <CarouselItem key={i} className="relative h-[60vh] md:h-[90vh]">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30"></div>
              <img
                className="w-full z-[-10] h-[90vh] object-cover absolute top-0 left-0 right-0 "
                src={`hero.jpeg`}
                alt=""
              />
              <div className="p-4 md:pl-20 pt-20 mt-10 md:w-[60%] text-white">
                <h1 className="top-10 text-3xl md:text-5xl font-bold mb-2 slide-in-top">
                  Transforming Hospitality,
                </h1>
                <h1 className="top-10 text-3xl md:text-5xl font-bold mb-2 slide-in-top">
                  One Experience
                </h1>
                <h1 className="top-10 text-3xl md:text-5xl font-bold mb-2 slide-in-top">
                  at a Time
                </h1>
                <p className="text-lg md:text-2xl mt-10 slide-in-top">
                  .Elevating guest satisfaction through innovation, excellence,
                  and personalized service. Discover the future of hospitality
                  with New London Hospitality
                </p>
                <div className="mt-6 slide-in-top">
                  <Link to={"/about-us"}>
                    <button className="bg-orange-500 text-slate-100  px-4 py-2 rounded-lg">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>
    </div>
  );
}

export default Main;
