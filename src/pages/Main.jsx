import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
              <img
                className="w-full z-[-10] h-[90vh] object-cover absolute top-0 left-0 right-0"
                src={`hero5.png`}
                alt=""
              />
              <div className="p-4 md:pl-20 pt-20 mt-10 md:w-1/2 text-white">
                <h1 className="top-10 text-3xl md:text-5xl font-bold mb-2 slide-in-top">
                  Delivering the Best Business Translation
                </h1>
                <p className="text-lg md:text-2xl mt-10 slide-in-top">
                  Established in 1999, today our company is the synonym of the
                  top-notch translation standards and an important partner of
                  the biggest companies.
                </p>
                <div className="mt-6 slide-in-top">
                  <button className="bg-orange-500 text-slate-100  px-4 py-2 rounded-lg">
                    Learn More
                  </button>
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
