// src/components/ShowcaseSection.jsx
import AnimatedElement from "./AnimatedElement";
import CreativeDesignIcon from "../assets/svgs/CreativeDesignIcon";

const showcaseItems = [
  {
    id: 1,
    imgSrc: "/Assets/WhatsApp Image 2024-06-22 at 14.30.13.jpeg", // This seems to be the hero image, replace with actual showcase image
    altText: "Shifty App Showcase",
    description:
      "Shifty is a mobile application that allows you to look for available rooms in preoccupied residences as well as possible roommates with whom to share and pay rent. My aim was to How might we improve the experience of finding accommodation in non-domicile state for college students.",
    tags: ["SaaS Project", "B2C", "Research", "Interface"],
    readMoreLink:
      "https://www.figma.com/design/fBLMpGK4iRSXoWzPCDFneX/Shifty-Case-study?node-id=0-1&t=8xOYCQuNHYXrjsUr-1",
  },
  {
    id: 2,
    imgSrc: "/Assets/2.jpeg",
    altText: "Ride On App Showcase",
    description:
      "Ride On is a mobile application that helps E-rickshaw drivers to earn more money and get loan without having credit score and enhance as per the needs and understanding of the drivers. My aim was to How might we help E-rickshaw driver earn more money and get loan without having credit score",
    tags: ["B2B", "B2C", "Research", "Interface"],
    readMoreLink:
      "https://www.figma.com/design/yHhksChOCH04DKXjfDY5ay/E-Riksha-Dashboard-(Copy)?t=M2id3RALeav6Cd3u-0",
  },
  {
    id: 3,
    imgSrc: "/Assets/1.jpeg",
    altText: "Rapido App Showcase",
    description:
      "Rapido, a bike and taxi application, aims to provide convenient, affordable, and quick transportation solutions My aim was to \"How might we provide a seamless and efficient transportation experience by integrating reliable package delivery, offering a cost-effective subscription model like Rapido Power Pass, and enabling a 'Schedule a Ride' feature to address issues of inconvenience, unpredictable costs, and lack of advanced ride planning?\"",
    tags: ["4.8 Rating", "B2C", "No.3 On chart", "Transport"],
    readMoreLink:
      "https://www.figma.com/design/fV3nwx9z55cEWhleym8kQZ/Rapido-Portfolio?node-id=517-7445&t=JweqEa5zWBscQHAf-0",
  },
];

const ShowcaseItem = ({ item, index }) => (
  <AnimatedElement
    className="flex-col gap-8 rounded-lg bg-[#0A0A0C] border border-[#353535] mt-10 p-6 md:p-10"
    animationProps={{
      initial: { opacity: 0, y: 100 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: index * 0.2 },
    }}
  >
    <img
      src={item.imgSrc}
      alt={item.altText}
      className="object-cover w-full rounded-lg"
    />
    <p className="text-[#939393] font-semibold mt-6 md:mt-10 text-base md:text-lg tracking-wide">
      {item.description}
    </p>
    <div className="flex flex-wrap gap-2 mt-6 md:gap-4 md:mt-8">
      {item.tags.map((tag) => (
        <div
          key={tag}
          className="text-[#999999] py-1 px-3 md:px-6 rounded-full bg-[#19191B] font-semibold text-xs md:text-sm"
        >
          {tag}
        </div>
      ))}
    </div>
    <div className="flex mt-6 md:mt-8">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={item.readMoreLink}
        className="text-white bg-[#353536] border border-[#9A9A9B] px-8 md:px-12 py-3 md:py-4 rounded-lg font-bold tracking-wider hover:bg-[#1e1e1f] hover:border-white duration-200 text-sm md:text-base"
      >
        Read More
      </a>
    </div>
  </AnimatedElement>
);

export default function ShowcaseSection() {
  return (
    <div className="mt-20 mx-auto md:mx-[2rem] lg:mx-[10rem] xl:mx-[21rem]">
      <AnimatedElement
        animationProps={{
          initial: { opacity: 0, scale: 0.8 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { staggerChildren: 0.2, duration: 0.5 },
        }}
      >
        <div className="flex items-center gap-2">
          <CreativeDesignIcon />
          <h1 className="text-3xl font-bold tracking-wider text-white md:text-4xl">
            Creative Design Showcase
          </h1>
        </div>
        <p className="pl-12 mt-4 text-lg tracking-wider text-stone-400">
          Explore a collection of my most innovative and visually stunning
          design works.
        </p>
      </AnimatedElement>
      {showcaseItems.map((item, index) => (
        <ShowcaseItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}
