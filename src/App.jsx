import { Search } from "lucide-react";

function App() {
  // https://g.co/kgs/kMbYJn9 https://g.co/kgs/eKrZ5J7https://g.co/kgs/CmxLtSrhttps://g.co/kgs/4Kx9fXAttps://g.co/kgs/tRpRwc1https://g.co/kgs/8on1UkEhttps://g.co/kgs/tTYtKR2

  const hotelsData = [
    {
      image: "image1.png",
      name: " Red Roof PLUS+ Pittsburgh East - Monroeville",
      address: " 2729 Mosside Blvd, Monroeville, PA 15146, United States",
      phone: "412-927-1399",
      link: "https://g.co/kgs/kMbYJn9",
    },
    {
      image: "image2.png",
      name: " Red Roof Inn Buffalo - Niagara Airport",
      address: "  146 Maple Dr, Bowmansville, NY 14026, United States",
      phone: "716-633-1100",
      link: "https://g.co/kgs/eKrZ5J7",
    },
    {
      image: "image3.png",
      name: " Red Roof Inn Mystic - New London",
      address: "07 Colman St Building A, New London, CT 06320, United States",
      phone: "860-444-0001",
      link: "https://g.co/kgs/CmxLtSr",
    },
    {
      image: "image4.png",
      name: " Holiday Inn Express Philadelphia NE - Bensalem, an IHG Hotel",
      address: "  1329 Bristol Pike, Bensalem, PA 19020, United States",
      phone: "215-245-5222",
      link: "https://g.co/kgs/4Kx9fXA",
    },
    {
      image: "image5.png",
      name: " Clarion Inn New London - Mystic",
      address: "  269 N Frontage Rd, New London, CT 06320, United States",
      phone: "860-910-4837",
      link: "https://g.co/kgs/tRpRwc1",
    },
    {
      image: "image6.png",
      name: " Quality Inn JFK Airport Rockaway Blvd",
      address: " 153-95 Rockaway Blvd, Queens, NY 11434, United States",
      phone: "718-723-6700",
      link: "https://g.co/kgs/8on1UkE",
    },
    {
      image: "image7.png",
      name: " Hampton Inn Albany-Wolf Road (Airport)",
      address: " 10 Ulenski Dr, Albany, NY 12205, United States",
      phone: "518-438-2822",
      link: "https://g.co/kgs/tTYtKR2",
    },
  ];

  return (
    <>
      <div className="px-4 md:px-16 text-slate-100 pb-20">
        <header className="flex justify-between items-center py-4 ">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-slate-100">
              London Hospitality
            </h1>
          </div>
          <nav className="flex space-x-4 max-sm:hidden">
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
            <div className="lg:flex flex-1 gap-16 space-y-6" key={index}>
            <div className="flex-1">
              <a href={hotel.link}>
                <img className="rounded-lg" src={hotel.image} alt="" />
              </a>
            </div>
            <div className="space-y-4 flex-1">
              <a href={hotel.link} className="underline-animation">
                <h1 className="text-3xl font-bold text-slate-100">
                  {hotel.name}
                </h1>
              </a>
              <p className="text-slate-100">{hotel.address}</p>
              <p className="text-slate-100">{hotel.phone}</p>
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
