import { IconMail } from "@tabler/icons-react";

export const ContactUs = () => {
  return (
    <section id="ContactUs" className="min-h-screen bg-gray-900 py-10">
      <div className="title-gradient my-20 text-center text-4xl font-semibold sm:text-5xl">
        Contact Us
      </div>
      <div className="my-8 flex flex-col items-center justify-evenly space-y-10">
        <div className="flex items-center justify-center space-x-6">
          <IconMail
            className="h-20 w-20  rounded-full bg-indigo-600 p-4 text-white sm:h-24 sm:w-24"
            stroke={1.5}
          />
          <div className="indigo text-center text-xl text-gray-200 antialiased sm:text-2xl">
            help@hacksrm.tech
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-6 pt-8 text-white">
        <h5 className="text-center text-2xl font-semibold text-gray-200">
          In Collaboration With
        </h5>
        <img
          src="/sponsores/ntllogo.png"
          alt="NextTech Logo"
          className="z-10 mt-0 h-20 rounded-md p-4"
        />
      </div>
    </section>
  );
};
