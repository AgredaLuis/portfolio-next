"use client";
import AnimatedLink from "@/animations/WordsAmation/AnimatedWord";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/validations/contactSchema";
import toast, { Toaster } from "react-hot-toast";

type Inputs = {
  email_from: string;
  message: string;
  subject: string;
};
const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const serviceId = process.env.NEXT_PUBLIC__SERVICE_ID
      ? process.env.NEXT_PUBLIC__SERVICE_ID.toString()
      : "";
    const templateId = process.env.NEXT_PUBLIC__TEMPLATE_ID
      ? process.env.NEXT_PUBLIC__TEMPLATE_ID.toString()
      : "";
    const publicKey = process.env.NEXT_PUBLIC__PUBLIC_KEY
      ? process.env.NEXT_PUBLIC__PUBLIC_KEY.toString()
      : "";
    emailjs
      .send(
        serviceId,
        templateId,
        {
          email_from: data.email_from,
          message: data.message,
          subject: data.subject,
          reply_to: data.email_from, // Aquí debería ser 'subject', no 'email_from'
        },
        publicKey
      )
      .then((result) => {
        setIsSuccess(true);
        toast.success("Message sent successfully!", {});
        // Limpiar los campos del formulario
        reset();
      })
      .catch((error) => {
        toast.error("Message not sent!");
        reset();
      });
  };

  return (
    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
      <div className="p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col py-2">
            <label typeof="email" className="uppercase text-sm py-2">
              Email<span className="text-red-500 text-lg">*</span>
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              id="email_from"
              type="email"
              placeholder="myEmail@gmail.com"
              {...register("email_from")}
            />
            {errors.email_from?.message && (
              <p className="text-red-500">{errors.email_from.message}</p>
            )}
          </div>
          <div className="flex flex-col py-2">
            <label typeof="subject" className="uppercase text-sm py-2">
              Subject<span className="text-red-500 text-lg">*</span>
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              id="subject"
              placeholder="I want to work with you"
              {...register("subject")}
            />
            {errors.subject?.message && (
              <p className="text-red-500">{errors.subject.message}</p>
            )}
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">
              Message<span className="text-red-500 text-lg">*</span>
            </label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300"
              placeholder="Im looking for Front-End Developer for... "
              rows={10}
              {...register("message")}
            ></textarea>
            {errors.message?.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>
          {isSuccess && (
            <p className="text-white text-center bg-green-500 rounded-md">
              Your message has been sent!
            </p>
          )}
          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              id="submit"
              className="w-[90%] p-4 text-gray-100 mt-4 flex justify-center items-center"
              aria-label="Send email"
            >
              <AnimatedLink title={"Send Message"} />
            </button>
          </div>
        </form>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default ContactForm;
