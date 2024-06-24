import CountUp from "react-countup";

export default function About() {

    const technologies = [
        {
          title: "Business Operations: Excellence in Optimizing Business Operations",
          description:
            "At New London Hospitality, we excel in optimizing business operations to enhance efficiency and guest satisfaction. From streamlining processes to ensuring seamless day-to-day functioning, our focus is on delivering exceptional service while maximizing operational effectiveness.",
          img: "about1.jpeg",
        },
        {
          title: "Revenue Management",
          description:
            "Effective revenue management is crucial in the competitive hospitality landscape. We employ advanced strategies to optimize pricing, forecast demand accurately, and capitalize on revenue opportunities, thereby maximizing profitability for our clients.",
          img: "tech2.webp",
        },
        {
          title: "Financial Management: Meticulous Financial Management",
          description:
            "Sound financial management is fundamental to our approach. We meticulously analyze financial performance, manage budgets, and implement cost-control measures to ensure sustainable profitability and long-term financial health for the properties under our management.",
          img: "tech3.webp",
        },
        {
          title: "Technology & Innovation: Embracing Cutting-Edge Technology",
          description:
            "Embracing cutting-edge technology and innovation is at the core of our approach. We leverage the latest hospitality management systems and innovative solutions to enhance guest experiences, streamline operations, and stay ahead in a rapidly evolving industry.",
          img: "tech4.webp",
        },
        {
          title: "Customer Relations: Customer-Centric Approach",
          description:
            "Exceptional customer relations lie at the heart of our service philosophy. We prioritize building strong guest relationships through personalized experiences, attentive service, and responsiveness to feedback, thereby fostering loyalty and driving guest satisfaction.",
          img: "tech1.webp",
        },
        {
          title: "Human Resources",
          description:
            "Our commitment to excellence extends to our people. We invest in recruiting top talent, provide comprehensive training programs, and foster a culture of continuous learning and development. By empowering our teams, we ensure they deliver the highest standards of service and professionalism.",
          img: "tech2.webp",
        },
        {
          title: "Quality Assurance",
          description:
            "Maintaining high standards of quality is non-negotiable. We implement rigorous quality assurance protocols, conduct regular inspections, and uphold industry best practices to ensure consistency, safety, and compliance across all managed properties.",
          img: "tech3.webp",
        },
      ];

  return (
    <div>
      <div className="max-sm:space-y-10 lg:grid grid-cols-2 lg:gap-20 px-6 lg:px-20  bg-slate-50 py-20  ">
        <div>
          <h1 className=" text-5xl lg:text-7xl font-bold text-slate-700 mb-10 ">
            Our Vision is Hospitality Transformation
          </h1>
          <p className="text-slate-700 mb-4">
            New London Hospitality is a prominent business management company
            that plays a pivotal role in the dynamic hospitality industry. With
            a robust portfolio, we specialize in overseeing the operations and
            setting the strategic direction for a diverse range of business
            properties. Our expertise spans various essential functions within
            the hospitality sector, ensuring optimal performance and growth.
          </p>
        </div>
        <div>
          <img
            src="hero2.jpg"
            alt="Hero"
            className="rounded-lg shadow-lg mb-12 w-[80%] h-60 object-cover"
          />
          <div className="grid grid-cols-2 gap-10">
            <span>
              <span className="text-4xl font-medium block">
                <CountUp end={3.5} />
              </span>
              <span>years of experience</span>
            </span>
            <span>
              <span className="text-4xl font-medium block">
                <CountUp end={23} />
              </span>
              <span>projects</span>
            </span>
            <span>
              <span className="text-4xl font-medium block">
                <CountUp end={830} />
              </span>
              <span>positive responses</span>
            </span>
            <span>
              <span className="text-4xl font-medium block">
                <CountUp end={100000} />
              </span>
              <span>trusted hotels</span>
            </span>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-gray-900 px-20">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-2xl">
          <h2 className="mb-4 ml-4 text-5xl tracking-tight font-extrabold  text-gray-900 dark:text-white">
            About Us
          </h2>
          <div className="grid gap-4 mt-10">
            {technologies.map((tech, index) => (
              <div
                key={tech.title}
                className={`flex items-start gap-10 flex-1 dark:bg-gray-900 p-4 mt-10 ${
                  index % 2 === 1 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 ">
                  <img
                    src={tech.img}
                    alt={tech.title}
                    className="w-full  rounded-md object-cover "
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
    </div>
  );
}
