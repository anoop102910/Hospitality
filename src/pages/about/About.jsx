import CountUp from "react-countup"

export default function About() {
  return (
    <div className="max-sm:space-y-10 lg:grid grid-cols-2 lg:gap-20 px-6 lg:px-20  bg-slate-50 py-20  ">
      <div>
        <h1 className=" text-5xl lg:text-7xl font-bold text-slate-700 mb-10 ">
          Our Vision is Hospitality Transformation
        </h1>
        <p className="text-slate-700 mb-4">
          New London Hospitality was founded by James Parker, a dedicated
          hospitality expert, and Emily Rivera, a forward-thinking business
          strategist. Their shared vision was to create a world where
          exceptional hospitality experiences are the standard. United by their
          belief in the transformative power of innovative management, they
          embarked on a journey to build New London Hospitality.
          {/*  With relentless
          dedication, they gathered a team of industry experts and launched this
          pioneering company, creating a global network of successful
          hospitality businesses, all connected by a commitment to excellence
          and guest satisfaction. */}
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
  );
}
