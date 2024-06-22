import { Search } from "lucide-react";

function App() {
  const hotelsData = [
    {
      image: "image1.png",
      name: " Red Roof PLUS+ Pittsburgh East - Monroeville",
      para: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, rem?",
    },
    {
      image: "image2.png",
      name: " Red Roof PLUS+ Pittsburgh East - Monroeville",
      para: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, rem?",
    },
    {
      image: "image3.png",
      name: " Red Roof PLUS+ Pittsburgh East - Monroeville",
      para: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, rem?",
    },
  ];
  return (
    <>
      <div className="px-16 text-slate-100">
        <header className="flex justify-between items-center py-4 ">
          <div className="flex items-center">
            {/* <img src="/logo.svg" alt="logo" className="h-8 mr-4" /> */}
            <h1 className="text-3xl font-bold text-slate-100">
              London Hospitality
            </h1>
          </div>
          <nav className="flex space-x-4">
            {[
              "Home",
              "People",
              "Process",
              "Technology",
              "About",
              "Subscribe",
            ].map(link => (
              <a
                href="#"
                className="text-gray-100 hover:text-gray-900"
                key={link}
              >
                {link}
              </a>
            ))}
          </nav>
          <div>
            <Search className="text-slate-100" />
          </div>
        </header>
        <div className="mt-10">
          <h1 className="text-5xl font-bold text-slate-100 mb-10">Hotels</h1>
          <div className="space-y-10">
            {hotelsData.map((hotel, index) => (
              <div className="flex flex-1 gap-10 " key={index}>
                <div className="flex-1">
                  <a href="">
                    <img className="rounded-lg" src={hotel.image} alt="" />
                  </a>
                </div>
                <div>
                  <a href="">
                    <h1 className="text-3xl  font-bold text-slate-100">
                      {hotel.name}
                    </h1>
                  </a>
                  <p className="text-slate-100 ">{hotel.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;