// const Prizes = [
//   {
//     name: "second",
//     img: "/sponsores/second.png",
//     awards: "Rs: 150000",
//     alt: "SECOND PRIZE",
//   },
//   {
//     name: "first",
//     img: "/sponsores/first.png",
//     awards: "Rs: 200000",
//     alt: "FIRST PRIZE",
//   },
//   {
//     name: "third",
//     img: "/sponsores/third.png",
//     awards: "Rs: 75000",
//     alt: "THIRD PRIZE",
//   },
// ];

const Images = [
  {
    key: "second",
    img: "/sponsores/2nd.png",
    alt: "SECOND",
  },
  {
    key: "first",
    img: "/sponsores/1st.png",
    alt: "FIRST",
  },
  {
    key: "third",
    img: "/sponsores/3rd.png",
    alt: "THIRD",
  },
];

import { ThreeJsBackground } from "./ThreeJsBackground";

export const PrizeWorthSection = () => {
  return (
    <section
      id="Prizes"
      className="my-0 min-h-screen justify-center bg-gray-900 px-6 py-10 sm:px-20 sm:py-24"
    >
      <ThreeJsBackground />
      <div className="mb-6 pb-10 text-center text-3xl font-semibold leading-relaxed text-indigo-200 sm:text-5xl">
        Prizes Worth more than 40 Lakhs 🎉
      </div>
      <div className="flex w-full flex-wrap justify-center  sm:mr-10">
        {Images.map((image) => (
          <div className="sm:mr-10" key={image.key}>
            <img src={image.img} alt={image.alt} className="w-80 " />
          </div>
        ))}
      </div>
      /<div></div>
    </section>
  );
};
