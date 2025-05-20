// src/components/ExperienceSection.jsx
import AnimatedElement from "./AnimatedElement";
import BriefcaseIcon from "../assets/svgs/BriefcaseIcon";
import M5CLogisticsIcon from "../assets/svgs/M5CLogisticsIcon"; // Make sure this exists
import RightChoiceAIIcon from "../assets/svgs/RightChoiceAIIcon"; // Import if you created it
import KosmcIcon from "../assets/svgs/KosmcIcon";
import DacoidIcon from "../assets/svgs/DacoidIcon";
import SetcIcon from "../assets/svgs/SetcIcon";
import AusomaIcon from "../assets/svgs/AusomaIcon";

// Initial data (can be expanded or moved to a separate file)
const initialExperiences = [
  {
    id: 1,
    company: "Maker Sharks",
    link: "https://makersharks.ai/",
    imgSrc: "/Assets/Frame.png", // Path to image in public/Assets
    iconName: null, // Explicitly set to null if no SVG icon component
    tags: ["Redesign SOP's", "AI", "Saas", "B2B", "B2C"],
    role: "Product Designer",
    description:
      "At Maker Sharks, I designed both wireframes and high-fidelity prototypes for FLO and the dashboard. I optimized SOPs and revamped the entire process to improve the product's performance. Throughout the project, I collaborated closely with the product manager and developers to ensure seamless integration and execution.",
  },
  {
    id: 2,
    company: "M5C Logistics",
    link: "https://www.m5clogs.com/",
    imgSrc: null, // Set to null if you prefer the SVG icon
    iconName: "M5CLogisticsIcon", // Name of the icon component
    tags: ["Saas", "Redesign", "B2B"],
    role: "Product Designer",
    description:
      "I redesigned the website while preserving the existing flow, developed components, and contributed to brainstorming sessions for new ideas. I created both low-fidelity and high-fidelity designs, based on comprehensive ground research, and collaborated with various departments to gain a deep understanding of the workflow ( On ground ).",
  },
];

// Map icon names to actual components
const iconComponents = {
  M5CLogisticsIcon: M5CLogisticsIcon,
  RightChoiceAIIcon: RightChoiceAIIcon, // Add others here
  KosmcIcon: KosmcIcon,
  DacoidIcon: DacoidIcon,
  SetcIcon: SetcIcon,
  AusomaIcon: AusomaIcon,
};

const ExperienceItem = ({ exp, index }) => {
  const IconComponent = exp.iconName ? iconComponents[exp.iconName] : null;

  return (
    <AnimatedElement
      className={`p-6 rounded-lg bg-[#0A0A0B] border border-[#141415] mt-10 exp-${exp.id}`}
      animationProps={{
        initial: { opacity: 0, scale: 0.8 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, delay: index * 0.1 },
      }}
    >
      <div className="flex flex-col items-start space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
        <div className="flex items-center flex-shrink-0 space-x-4">
          {/* Conditional Rendering for Image or Icon */}
          {exp.imgSrc &&
            !IconComponent && ( // Show image only if imgSrc exists AND no IconComponent
              <img
                src={exp.imgSrc}
                alt={`${exp.company} logo`}
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] object-contain rounded-md"
              />
            )}
          {IconComponent && ( // Show IconComponent if it exists
            <IconComponent className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]" />
          )}
          {/* Fallback if neither is provided (optional) */}
          {!exp.imgSrc && !IconComponent && (
            <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-gray-700 rounded-md flex items-center justify-center text-white text-xs font-bold">
              {exp.company}
            </div>
          )}

          <div>
            <h1 className="text-xl font-bold tracking-wider text-white md:text-2xl">
              {exp.company}
            </h1>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#979797] font-semibold underline text-[4vw] xs:text-xs sm:text-sm md:text-base"
              href={exp.link}
            >
              {exp.link.replace(/^https?:\/\//, "")}
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
          {exp.tags.map((tag) => (
            <div
              key={tag}
              className="text-[#999999] py-1 px-3 md:px-6 rounded-full bg-[#19191B] font-semibold text-xs md:text-sm"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-lg bg-[#050505] mt-6 p-6 space-y-6">
        <h1 className="text-lg md:text-xl font-bold tracking-wider text-[#D9D9D9]">
          {exp.role}
        </h1>
        <p className="text-[#818181] max-w-4xl text-sm md:text-base">
          {exp.description}
        </p>
      </div>
    </AnimatedElement>
  );
};

export default function ExperienceSection() {
  const allExperiences = [
    ...initialExperiences,
    {
      id: 3,
      company: "Right Choice AI",
      link: "https://rightchoice.ai/",
      // Assuming you have an SVG component or want to use an image
      iconName: "RightChoiceAIIcon", // if SVG component exists
      // imgSrc: "/Assets/RightChoiceAI_Logo.svg", // if it's an image path
      tags: ["SaaS Project", "AI", "B2B"],
      role: "Project Designer",
      description:
        "At RightChoice AI, collaborated to create a seamless business listing website. Developed UI screens, site map, and conducted thorough research from scratch. Rephrased existing flows and designs, and led the team in crafting a user-friendly website.",
    },
    {
      id: 4,
      company: "KOSMC (Creator Platform)",
      link: "https://www.kosmc.ai/",
      iconName: "KosmcIcon",
      // imgSrc: "/Assets/Kosmc_Logo.svg",
      tags: [
        "SaaS Project",
        "AI",
        "Marketing",
        "Creators",
        "B2B",
        "B2C",
        "$ 100K Raised",
      ],
      role: "Project Designer",
      description:
        "At Kosmc, I created user flows and personas for different user groups, designing a minimal UI to ensure the best experience. Developed a web app for creators to link all their social media handles on the platform. Additionally, collaborated with the marketing team and industry specialists to refine the product.",
    },
    {
      id: 5,
      company: "Dacoid",
      link: "https://www.dacoid.com/",
      iconName: "DacoidIcon",
      imgSrc: "/Assets/Dacoid_Logo.svg",
      tags: [
        "SaaS Project",
        "AI",
        "B2B",
        "Marketing",
        "Automation",
        "Email Marketing",
      ],
      role: "Project Designer",
      description:
        "At Dacoid Digital, I collaborated with multiple companies to enhance their UX/UI design and review product designs. Redesigned multiple sites, improving existing flows and UI for a better user experience.",
    },
    {
      id: 6,
      company: "SETC (Dacoid)",
      link: "https://www.setctaxreturn.com/",
      iconName: "SetcIcon",
      imgSrc: "/Assets/SETC_Logo.svg",
      tags: ["SaaS Project", "B2B"],
      role: "Project Designer",
      description:
        "At SETC (Dacoid), I redesigned the entire questionnaire flow by recreating the flows and UI, utilizing user insights and reviews to enhance the overall user experience.",
    },
    {
      id: 7,
      company: "Tirth",
      link: "https://www.tirth.co/",
      imgSrc: null, // No logo provided in HTML for this one
      iconName: null,
      tags: ["SaaS Project", "AI", "B2B"],
      role: "UX Consultancy",
      description:
        "At Tirth, my role involved reviewing existing designs, implementing changes, and collaborating with designated designers to refine flow and enhance UI aesthetics.",
    },
    {
      id: 8,
      company: "Ausoma",
      link: "https://ausoma.org/",
      iconName: "AusomaIcon",
      // imgSrc: "/Assets/Ausoma_Logo.svg",
      tags: ["Edtech", "B2B"],
      role: "Product Designer",
      description:
        "At Ausoma, my responsibilities included comprehending existing flows, generating new designs, and employing creative freedom to reconstruct the website from scratch, leveraging insights from existing pages. As an EdTech platform, I focused on maintaining simplicity and user-friendliness throughout the redesign process.",
    },
  ];

  return (
    <div className="mt-20 mx-auto md:mx-[2rem] lg:mx-[10rem] xl:mx-[21rem]">
      <AnimatedElement
        className="exp-title-container"
        animationProps={{
          initial: { opacity: 0, scale: 0.8 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { staggerChildren: 0.2, duration: 0.5 },
        }}
      >
        <div className="flex items-center gap-2">
          <BriefcaseIcon />
          <h1 className="text-3xl font-bold tracking-wider text-white md:text-4xl">
            My Experience
          </h1>
        </div>
        <p className="pl-12 mt-4 text-lg tracking-wider text-stone-400">
          Innovating SaaS Experiences through Creative Product Design
        </p>
      </AnimatedElement>
      <div className="max-w-5xl">
        {allExperiences.map((exp, index) => (
          <ExperienceItem key={exp.id} exp={exp} index={index} />
        ))}
      </div>
    </div>
  );
}
