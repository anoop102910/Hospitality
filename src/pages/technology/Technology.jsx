import React from 'react';

const Technology = () => {
  const technologies = [
    {
      title: "Leveraging AI to Enhance Guest Experiences in Hotels",
      img: "tech1.webp",
      description:
        "Discover how artificial intelligence is revolutionizing the hospitality industry by enhancing guest experiences and optimizing hotel operations.",
    },
    {
      title: "Sustainable Solutions: How Eco-Friendly Technologies are Transforming Hotels",
      img: "tech2.webp",
      description:
        "Learn about the latest eco-friendly technologies that are helping hotels reduce their carbon footprint and appeal to environmentally conscious travelers.",
    },
    {
      title: "Smart Room Technology: The Future of In-Room Guest Services",
      img: "tech3.webp",
      description:
        "Explore how smart room technology is changing the way guests interact with their hotel rooms, providing convenience and personalized experiences.",
    },
    {
      title: "Data-Driven Decision Making: Using Big Data to Optimize Hotel Operations",
      img: "tech4.webp",
      description:
        "Understand the importance of big data in the hospitality industry and how it can be used to make informed decisions that enhance operational efficiency and guest satisfaction.",
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-gray-900 px-20">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-2xl">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Technology
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src={tech.img}
                alt={tech.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl lg:text-2xl font-bold mb-2">{tech.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-base">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;