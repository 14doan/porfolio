import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:dbdoan141@gmail.com?subject=${formData.subject}&body=hi I'm ${formData.name}. ${formData.message} (${formData.email})`;
  };

  // console.log(watch('example'));

  return (
    <div className=" h-screen max-w-5xl relative flex justify-evenly items-center mx-auto flex-col text-center md:flex-row md:text-left px-10 ">
      <h3 className="absolute top-[4rem] tracking-[17px] pl-[17px] uppercase text-gray-600 text-xl">
        Contact
      </h3>
      <div className=" mt-10 flex flex-col  space-y-7 justify-center items-center">
        {/* <h4 className="text-center font-semibold text-2xl">Let's Talk</h4> */}
        <div className="space-y-7">
          <div className="flex justify-center items-center space-x-5">
            <PhoneIcon className=" text-green-500 h-8 w-8 animate-pulse" />
            <p className="text-xl">+4412349503</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <EnvelopeIcon className=" text-green-500 h-8 w-8 animate-pulse" />
            <p className="text-xl">14doan@gmail.com</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <MapPinIcon className=" text-green-500 h-8 w-8 animate-pulse" />
            <p className="text-xl">Stratford, London, UK </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-autp"
        >
          <div className="flex space-x-2">
            <input
              {...register('name')}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register('email')}
              className="contactInput"
              type="email"
              placeholder="email"
            />
          </div>
          <input
            {...register('subject')}
            className="contactInput"
            type="text"
            placeholder="subject"
          />
          <textarea
            {...register('message')}
            className="contactInput"
            placeholder="message"
          ></textarea>
          <button
            className=" bg-green-100 p-5  rounded-md  hover:bg-green-300 hover:font-bold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
