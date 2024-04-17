import AnimatedSVG from "@/animations/SvgsAnimation/AnimatedSvg";
import { FaArrowLeft } from "react-icons/fa6";


export default function ButtomPage() {
  return (
    <>
      <div className="flex p-32 h-screen uppercase justify-center items-center text-md w-full">
      <button className="py-3 px-5 hover:transform hover:scale-110 duration-300"><AnimatedSVG chrildren={<FaArrowLeft size={25}/>} /></button>
      </div>
    </>
  );
}
