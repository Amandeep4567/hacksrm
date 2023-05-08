const TitleSponsers = [
  {
    name: "nimblebox.ai",
    image:
      "https://nimblebox.ai/_next/static/media/site-logo-light.148d6d0b.svg",
    link: "https://nimblebox.ai/",
    alt: "NIMBLEBOX LOGO",
  },
];

const PlatinumSponsorsData = [
  {
    name: ".xyz",
    image: "/sponsores/xyz.png",
    link: "https://gen.xyz/",
    sponsorsCategory: "",
    alt: "XYZ LOGO",
  },
  {
    name: "taskade",
    image: "/sponsores/taskade.png",
    link: "https://www.taskade.com/",
    sponsorsCategory: "",
    alt: "TASKADE LOGO",
  },
  {
    name: "wolfram",
    image: "/sponsores/wolfram.png",
    link: "https://www.wolfram.com/",
    sponsorsCategory: "",
    alt: "WOLFRAM LOGO",
  },
  {
    name: "codechef",
    image: "/sponsores/codechef.png",
    link: "https://www.codechef.com/",
    sponsorsCategory: "",
    alt: "CODECHEF LOGO",
  },
];

const GoldSponsorsData = [
  {
    name: "Devfolio",
    image: "/sponsores/devfolio.png",
    link: "https://devfolio.co",
    sponsorsCategory: "",
    alt: "DEVFOLIO LOGO",
  },
];

const SilverSponsorsData = [
  {
    name: "Polygon",
    image: "/sponsores/polygon.png",
    link: "https://polygon.technology/",
    sponsorsCategory: "",
    alt: "POLYGON LOGO",
  },
  {
    name: "solana",
    image: "/sponsores/solana.png",
    link: "https://solana.com/",
    sponsorsCategory: "",
    alt: "SOLANA LOGO",
  },
  {
    name: "filecoin",
    image: "/sponsores/filecoin.png",
    link: "https://filecoin.io/",
    sponsorsCategory: "",
    alt: "FILECOIN LOGO",
  },
  {
    name: "Replit",
    image: "/sponsores/replit.png",
    link: "https://replit.com/",
    sponsorsCategory: "",
    alt: "REPLIT LOGO",
  },
];

export const Sponsors = () => {
  return (
    <section
      id="Sponsors"
      className="min-h-screen bg-gray-900 px-2 pb-4 pt-5 sm:px-10 sm:pt-10"
    >
      <div className="flex w-full flex-col items-center justify-center py-10">
        <div className="title-gradient mr-10 pb-10 text-3xl font-bold text-indigo-600 sm:text-5xl">
          TITLE SPONSOR
        </div>
        {TitleSponsers.map((title) => (
          <a href={title.link}>
            <img src={title.image} alt={title.alt} className="h-20 px-4" />
          </a>
        ))}
      </div>
      <div className="flex w-full flex-col items-center justify-center py-10">
        <div className="mr-10 pb-8 text-3xl font-semibold text-indigo-600 sm:text-5xl">
          Sponsors
        </div>
      </div>
      <h1 className="text-5xl font-bold text-indigo-400">PLATINUM</h1>
      <div className="flex flex-wrap justify-center gap-10">
        {PlatinumSponsorsData.map((sponsor) => (
          <div
            className="z-10 flex flex-col items-center space-y-5 rounded py-5"
            key={sponsor.name}
          >
            <a href={sponsor.link}>
              <img
                src={sponsor.image}
                loading="lazy"
                alt={sponsor.alt}
                className={`h-auto w-72 rounded-2xl bg-gray-900 object-contain p-3 sm:h-28`}
              />
            </a>
          </div>
        ))}
      </div>
      <h1 className="text-5xl font-bold text-indigo-400">GOLD</h1>
      <div className="flex flex-wrap justify-center gap-10">
        {GoldSponsorsData.map((sponsor) => (
          <div
            className="z-10 flex flex-col items-center space-y-5 rounded py-5"
            key={sponsor.name}
          >
            <a href={sponsor.link}>
              <img
                src={sponsor.image}
                loading="lazy"
                alt={sponsor.alt}
                className={`h-auto w-72 rounded-2xl bg-gray-900 object-contain p-3 sm:h-28`}
              />
            </a>
          </div>
        ))}
      </div>
      <h1 className="text-5xl font-bold text-indigo-400">SILVER</h1>
      <div className="flex flex-wrap justify-center gap-10">
        {SilverSponsorsData.map((sponsor) => (
          <div
            className="z-10 flex flex-col items-center space-y-5 rounded py-5"
            key={sponsor.name}
          >
            <a href={sponsor.link}>
              <img
                src={sponsor.image}
                loading="lazy"
                alt={sponsor.alt}
                className={`h-auto w-72 rounded-2xl bg-gray-900 object-contain p-3 sm:h-28`}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
