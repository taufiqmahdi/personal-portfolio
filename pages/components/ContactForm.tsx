import React from "react";

type Props = {};

const ContactForm = (props: Props) => {
  const getform_api = process.env.GETFORM_API
    
  return (
    <div className="flex flex-col gap-4 w-full sm:w-7/12 p-8 sm:p-0">
      <h3 className="text-4xl font-bold text-center">Contact</h3>
      <form className="w-full" action={`https://getform.io/f/${getform_api}`} method="POST">
        <div className="flex flex-col gap-2 w-full">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 rounded-lg focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-2 rounded-lg focus:outline-none"
          />
          <textarea
            placeholder="Message"
            name="message"
            id="message"
            rows={10}
            className="p-2 rounded-lg focus:outline-none"
          ></textarea>
          <button className="self-center mt-2 text-lg font-bold p-2 px-8 w-fit rounded-lg bg-slate-800 border-2 border-slate-800 text-white hover:border-2 hover:border-gray-200">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
