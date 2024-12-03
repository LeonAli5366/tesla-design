import Link from "next/link";
// button color #133871

export default function Home() {
  return (
    <div className="relative text-white">
      <div className="w-full h-screen bg-image1 bg-cover bg-center flex flex-col items-center justify-between py-20">
        <div className="text-center">
          <h1 className="sm:text-[56px] text-5xl font-semibold">
            Solar Panels
          </h1>
          <h1 className="text-[34px] font-medium underline underline-offset-8 underline-thickness">
            Schedule a Virtual Consultation
          </h1>
        </div>
        <div className="flex items-center justify-between sm:gap-x-5 gap-x-2 max-w-[544px] w-full sm:h-[40px] h-[35px] max-sm:px-5">
          <button className="w-full h-full text-sm font-semibold bg-[#3E6AE1] rounded text-white">
            Order Now
          </button>
          <button className="w-full h-full text-sm font-semibold bg-white rounded text-[#393C41]">
            <Link href="/solarpanels">Learn More</Link>
          </button>
        </div>
      </div>
      <div className="w-full h-screen bg-image2 bg-cover bg-center flex flex-col items-center justify-between py-20">
        <div className="text-center">
          <h1 className="text-[56px] font-medium">Innovating Water</h1>
          <h1 className="text-[34px] font-medium underline underline-offset-8 underline-thickness">
            Schedule a Virtual Consultation
          </h1>
        </div>
        <div className="flex items-center justify-between sm:gap-x-5 gap-x-2 max-w-[544px] w-full sm:h-[40px] h-[35px] px-5">
          <button className="w-full h-full text-sm font-semibold bg-[#3E6AE1] rounded text-white">
            Order Now
          </button>
          <button className="w-full h-full text-sm font-semibold bg-white rounded text-[#393C41]">
            <Link href="/solarpanels">Learn More</Link>
          </button>
        </div>
      </div>
      <div className="w-full h-screen bg-image3 bg-cover bg-center flex flex-col items-center justify-between py-20">
        <div className="text-center">
          <h1 className="text-[56px] font-medium">HVAC</h1>
          <small>Heating, Ventilation, and Air Conditioning</small>
          <h1 className="text-[34px] font-medium underline underline-offset-8 underline-thickness">
            0% APR Available
          </h1>
        </div>
        <div className="flex items-center justify-between sm:gap-x-5 gap-x-2 max-w-[544px] w-full sm:h-[40px] h-[35px] px-5">
          <button className="w-full h-full text-sm font-semibold bg-[#3E6AE1] rounded text-white">
            Order Now
          </button>
          <button className="w-full h-full text-sm font-semibold bg-white rounded text-[#393C41]">
            <Link href="/solarpanels">Learn More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
