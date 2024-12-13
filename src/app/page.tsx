import Link from "next/link";
// button color #133871
type Home = {
  title: string;
  description: string;
  backgroundImage: string;
  link1: string;
  link2: string;
};

const homeData = [
  {
    title: "Innovating Water, Inspiring Health",
    description:
      "Transforming the essence of life with cutting-edge technology for a healthier tomorrow",
    backgroundImage: "/images/home-1.jpg",
    link1: "water",
    link2: "water",
  },
  {
    title: "Harness Solar Energy",
    description: "Save Money, Power Your Home and Apartment Efficiently",
    backgroundImage: "/images/solar-panels-desktop.jpg",
    link1: "solarpanels",
    link2: "solarpanels",
  },
  {
    title: "HVAC",
    description: "Heating, Ventilation, and Air Conditioning",
    backgroundImage: "/images/home-1.jpg",
    link1: "hvac",
    link2: "hvac",
  },
];

export default function Home() {
  return (
    <div className="relative text-white">
      {homeData?.map((home: Home, index) => {
        return (
          <div
            key={index}
            className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-between py-20"
            style={{ backgroundImage: `url(${home.backgroundImage})` }}
          >
            <div className="text-center space-y-5">
              <h1 className="sm:text-[56px] text-4xl font-semibold">
                {home.title}
              </h1>
              <h1 className="sm:text-[34px] font-medium text-xl">
                {home.description}
              </h1>
            </div>
            <div className="flex items-center justify-between sm:gap-x-5 gap-x-2 max-w-[544px] w-full sm:h-[40px] h-[35px] max-sm:px-5">
              <Link
                href={`/${home.link1}/order`}
                className="w-full h-full flex items-center justify-center text-sm font-semibold bg-[#3E6AE1] rounded text-white"
              >
                Book a Consultation
              </Link>
              <Link
                href={`/${home.link2}`}
                className="w-full h-full flex items-center justify-center text-sm font-semibold bg-white rounded text-[#393C41]"
              >
                Learn More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
