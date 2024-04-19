import ButtomsLink from "@/animations/Buttons/ButtomsLink";
import AnimatedSVG from "@/animations/SvgsAnimation/AnimatedSvg";
import AnimatedLink from "@/animations/WordsAmation/AnimatedWord";
import { FaArrowLeft, FaArrowLeftLong } from "react-icons/fa6";

export default function ButtomPage() {
  return (
    <>
      <div className="flex p-32 h-screen uppercase justify-center items-center w-full">
        <div className="flex justify-center items-center">
          <ButtomsLink title="Home" chrildren={<FaArrowLeftLong />}  className="flex-row-reverse"/>
        </div>
      </div>
    </>
  );
}
