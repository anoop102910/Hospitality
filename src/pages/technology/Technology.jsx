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
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold  text-gray-900 dark:text-white">
          Technology
        </h2>
        <div className="grid gap-4 mt-10">
          {technologies.map(tech => (
            <div
              key={tech.title}
              className="flex items-start gap-10 flex-1 dark:bg-gray-900 p-4 "
            >
              <div className="flex-1 ">
                <img
                  src={tech.img}
                  alt={tech.title}
                  className="w-full  rounded-md object-cover mb-"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-2">{tech.title}</h3>
                <p className="text-gray-600 text-lg dark:text-gray-400">
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
