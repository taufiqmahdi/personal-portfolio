import React from "react";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 w-7/12">
      <h3 className="text-4xl font-bold">Contact</h3>
      <form className="w-full">
        <div className="flex flex-col gap-2 w-full">
          <input
            type="text"
            placeholder="Name"
            className="p-2 rounded-lg focus:outline-none"
          />
          <input
            type="text"
            placeholder="Email"
            className="p-2 rounded-lg focus:outline-none"
          />
          <textarea
            placeholder="Message"
            name="adasd"
            id="asda"
            rows={10}
            className="p-2 rounded-lg focus:outline-none"
          ></textarea>
          <button className="mt-2 text-lg font-bold p-2 px-8 w-fit rounded-lg bg-slate-800 border-2 border-slate-800 text-white hover:border-2 hover:border-gray-200">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
