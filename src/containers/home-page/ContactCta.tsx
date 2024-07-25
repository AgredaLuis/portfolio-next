import ButtomsLink from "@/animations/Buttons/ButtomsLink";
import Image from "next/image";
import Link from "next/link";
import {  FaArrowRightLong } from "react-icons/fa6";
const ContactCta = () => {
  return (
    <div
      about="contact"
      className=" w-full py-16 bg-black text-white flex items-center justify-center md:rounded-b-[70px]"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 bg-black p-8  md:border-4 md:boder-white rounded-[3rem]">
        {/* left */}
        <div className="w-full h-full rounded-xl col-span-1 ">
          <div className=" h-full w-full flex justify-center ">
            <Image
              className="rounded-xl hover:scale-105 ease-in duration-300 object-cover"
              src="/normalPresentation.jpg"
              alt="/laptop-I-Design-and-develop-experiences-that-make-people's-lives-simple"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* right */}
        <div className="h-auto col-span-2 rounded-xl lg:p-4">
          <div className="h-full flex flex-col justify-center items-start p-4 gap-14">
            <div>
              <h3 className="uppercase text-xl py-4 tracking-widest text-[#9391ED] font-extrabold lg:text-4xl">
                Let&apos;s chat
              </h3>
              <h2 className="py-2 md:py-4 px-2 text-white text-3xl">
              Curious how it works? Explore with a product tour.
              </h2>
              <p className="py-2 px-2 text-white ">
                Got a project Idea? Need to know what requirements it requires?
                Let&apos;s talk.
              </p>
            </div>
            <div className="mx-2 px-auto">
              <Link href="/contact" aria-label="Contact link">
                <ButtomsLink
                  title="Get in touch"
                  chrildren={<FaArrowRightLong />}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCta;
