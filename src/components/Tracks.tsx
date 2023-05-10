const TopImages = [
  {
    key: "zero",
    img: "/tracks/polygon.png",
    alt: "polygon",
  },

  {
    key: "fourth",
    img: "/tracks/task.png",
    alt: "taskade",
  },
  {
    key: "two",
    img: "/tracks/solana.png",
    alt: "solana",
  },
  {
    key: "fifth",
    img: "/tracks/wolfram.png",
    alt: "wolfram",
  },
];
const Images = [
  {
    key: "sixth",
    img: "/tracks/xyz.png",
    alt: "xyz",
  },
  {
    key: "one",
    img: "/tracks/replit.png",
    alt: "replit",
  },

  {
    key: "third",
    img: "/tracks/filecoin.png",
    alt: "filecoin",
  },
];

export const Tracks = () => {
  return (
    <section
      id="Prizes"
      className="my-0 min-h-screen justify-center bg-gray-900 px-6 py-10 sm:px-20 sm:py-24"
    >
      <div className="title-gradient mb-6 pb-10 text-center text-3xl font-semibold leading-relaxed text-pink-700 sm:text-5xl">
        TRACKS
      </div>
      {/* <div className="flex items-center justify-center sm:mx-10 ">
        <img src="/tracks/polygon.png" alt="polygon" className="w-80" />
      </div> */}
      <div className=" flex w-full flex-wrap justify-center">
        {TopImages.map((image) => (
          <div className="mb-10 sm:mx-5" key={image.key}>
            <img
              src={image.img}
              alt={image.alt}
              className="w-60
            "
            />
          </div>
        ))}
        {Images.map((image) => (
          <div className="mb-10 mt-5 sm:mx-5" key={image.key}>
            <img src={image.img} alt={image.alt} className="w-80" />
          </div>
        ))}
      </div>
      /<div></div>
    </section>
  );
};
