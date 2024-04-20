
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ContactForm from "./ContactForm";


const Contact = () => {

  return (
    <div className="w-full h-full py-20">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full bg-[#ecf0f3] ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full  shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full w-full">
              <div className="w-full m-auto">
                <Image
                  className="mx-auto rounded-xl hover:scale-105 ease-in duration-300"
                  src="/codeLaptop.jpg"
                  alt="/laptop-image-to-show-code"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h2 className="py-2">Luis Agreda</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or part-time positions.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">let&apos;s talk</p>
                <div className="flex items-center justify-between py-4">
                  <Link
                    href="https://www.linkedin.com/in/clint-briley-50056920a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link
                    href="https://github.com/fireclint"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </Link>

                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <Link href="/resume">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
