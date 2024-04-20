"use client";
import AnimatedLink from "@/animations/WordsAmation/AnimatedWord";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/validations/contactSchema";

type Inputs = {
  email_from: string;
  message: string;
  subject: string;
};
const ContactForm = () => {

    const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    const serviceId = process.env.NEXT_PUBLIC__SERVICE_ID ? process.env.NEXT_PUBLIC__SERVICE_ID.toString() : '';
    const templateId = process.env.NEXT_PUBLIC__TEMPLATE_ID ? process.env.NEXT_PUBLIC__TEMPLATE_ID.toString() : '';
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
        process.env.NEXT_PUBLIC__PUBLIC_KEY
      )
      .then((result) => {
        setIsSuccess(true);
          // Limpiar los campos del formulario
          reset(); 
        
      })
      .catch((error) => {
        console.log(error);

        reset();
      });
  };

  return (
    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
      <div className="p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Email<span className="text-red-500 text-lg">*</span></label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              id="email_from"
              placeholder="myEmail@gmail.com"
              {...register("email_from")}
            />
            {errors.email_from?.message && (
              <p className="text-red-500">{errors.email_from.message}</p>
            )}
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Subject<span className="text-red-500 text-lg">*</span></label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              placeholder="I want to work with you"
              {...register("subject")}
            />
            {errors.subject?.message && (
              <p className="text-red-500">{errors.subject.message}</p>
            )}
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Message<span className="text-red-500 text-lg">*</span></label>
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
          <button
            type="submit"
            className="w-full p-4 text-gray-100 mt-4 flex justify-center items-center"
          >
            <AnimatedLink title={"Send Message"} />
          </button>
        </form>

        {isSuccess && <p className="text-green-500">Your message has been sent</p>}

      </div>
    </div>
  );
};

export default ContactForm;
