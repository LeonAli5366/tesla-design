import Link from "next/link";
// button color #133871

export default function Home() {
  return (
    <div className="relative text-white">
      <div className="w-full h-screen bg-image1 bg-cover bg-center flex flex-col items-center justify-between py-20">
        <div className="text-center">
          <h1 className="text-[56px] font-medium">Solar Panels</h1>
          <h1 className="text-[34px] font-medium underline underline-offset-8 underline-thickness">
            Schedule a Virtual Consultation
          </h1>
        </div>
        <div className="flex items-center gap-x-5">
          <button className="px-20 py-3 text-sm font-semibold bg-[#3E6AE1] rounded text-white">
            Order Now
          </button>
          <Link href="/solarpanels">
            <button className="px-20 py-3 text-sm font-semibold bg-white rounded text-[#393C41]">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full h-screen bg-image2 bg-cover bg-center flex flex-col items-center justify-between py-20">
        <div className="text-center">
          <h1 className="text-[56px] font-medium">Model Y</h1>
          <h1 className="text-[34px] font-medium underline underline-offset-8 underline-thickness">
            0% APR Available
          </h1>
          <h1 className="text-[17px] font-medium">
            Lease Starting at $299/mo1
          </h1>
        </div>
        <div className="flex items-center gap-x-5">
          <button className="px-20 py-3 text-sm font-semibold bg-[#3E6AE1] rounded text-white">
            Order Now
          </button>
          <button className="px-20 py-3 text-sm font-semibold bg-white rounded text-[#393C41]">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full h-screen bg-image3 bg-cover bg-center flex flex-col items-center justify-between py-20">
        <div className="text-center">
          <h1 className="text-[56px] font-medium">Model 3</h1>
          <h1 className="text-[34px] font-medium underline underline-offset-8 underline-thickness">
            0% APR Available
          </h1>
          <h1 className="text-[17px] font-medium">
            Lease Starting at $299/mo1
          </h1>
        </div>
        <div className="flex items-center gap-x-5">
          <button className="px-20 py-3 text-sm font-semibold bg-[#3E6AE1] rounded text-white">
            Order Now
          </button>
          <button className="px-20 py-3 text-sm font-semibold bg-white rounded text-[#393C41]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
