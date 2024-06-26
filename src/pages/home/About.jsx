const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            About Us
          </h2>
          <p className="mb-4 text-slate-700">
            New london hospitality is a business management company that plays a
            crucial role in the hospitality industry by overseeing the
            operations and strategic direction of multiple business properties.
          </p>
          <p className="text-slate-700">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg h-full object-cover"
            src="about2.jpeg"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full rounded-lg lg:mt-10 object-cover"
            src="about3.jpeg"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
