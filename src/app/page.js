import Allcard from "@/components/homepage/Allcard";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

export default function Home() {
  return (
    <div className="sm:w-[600] lg:w-[1110] mx-auto">

      <div className="sm:w-[600] lg:w-[1110] mx-auto items-center space-y-5 pb-10 pt-20">
        <h1 className="text-4xl font-bold text-black text-center">Friends to keep close in your life</h1>
        <p className="text-gray-400 text-center ">Your personal shelf of meaningful connections. Browse, tend, and nurture the
          <br />
          relationships that matter most.</p>
        <button className="flex mx-auto items-center justify-center gap-2 p-2 bg-[#244D3f] text-white font-bold"><FaPlus />Add a Friend</button>
      </div>
      <div className="grid grid-cols-4 gap-4 pt-20 pb-20">
        <div className="bg-white shadow-2xl text-center p-5 rounded-xl">
          <h1 className="text-black text-3xl">10</h1>
          <p className="text-gray-400 font-semibold">Total Friends</p>
        </div>
        <div className="bg-white shadow-2xl text-center p-5 rounded-xl">
          <h1 className="text-black text-3xl">3</h1>
          <p className="text-gray-400 font-semibold">On Track</p>
        </div>
        <div className="bg-white shadow-2xl text-center p-5 rounded-xl">
          <h1 className="text-black text-3xl">6</h1>
          <p className="text-gray-400 font-semibold">Need Attention</p>
        </div>
        <div className="bg-white shadow-2xl text-center p-5 rounded-xl">
          <h1 className="text-black text-3xl">12</h1>
          <p className="text-gray-400 font-semibold">Interactions This Month</p>
        </div>
      <Allcard></Allcard>
      </div>

    </div>
  );
}
