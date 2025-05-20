// src/components/TechStackSection.jsx
import AnimatedElement from "./AnimatedElement";
import StackIcon from "../assets/svgs/StackIcon";
import FigmaIcon from "../assets/svgs/FigmaIcon";
// import NotionIcon from '../assets/svgs/NotionIcon';
// import FramerIcon from '../assets/svgs/FramerIcon';
// import SlackIcon from '../assets/svgs/SlackIcon';

const techStacks = [
  {
    id: 1,
    icon: <FigmaIcon />,
    name: "Figma",
    description: "Interface Design Tool",
  },
  // Add other stacks (Notion, Framer, Slack) with their icons
  {
    id: 2,
    icon: (
      <svg
        width="77"
        height="74"
        viewBox="0 0 77 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
      >
        <rect
          x="0.25"
          y="0.25"
          width="76.5"
          height="73.5"
          rx="4.75"
          fill="#1E1E1E"
        />
        <rect
          x="0.25"
          y="0.25"
          width="76.5"
          height="73.5"
          rx="4.75"
          stroke="#AFAFAF"
          strokeWidth="0.5"
        />
        <rect x="6.5" y="5" width="64" height="64" rx="5" fill="#1E1E1E" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.7 52.56C11.7 52.56 19.7 62.93 20.18 63.39C21.34 64.5 22.91 65.08 24.51 64.99C32.88 64.57 52.05 63.61 60.08 63.21C63.19 63.05 65.63 60.49 65.64 57.38L65.74 21.88C65.74 19.89 64.71 18.05 63.02 17.01C60.03 15.17 54.11 11.52 52.32 10.33C50.86 9.36 49.12 8.9 47.36 9.01C41.4 9.39 23.91 10.52 16.51 10.99C13.55 11.18 11.27 13.61 11.27 16.53V51.31C11.27 51.76 11.42 52.2 11.7 52.55V52.56ZM61.71 23.65V23.67L61.61 57.37C61.61 58.34 60.84 59.14 59.87 59.19L24.3 60.97C23.8 61 23.31 60.81 22.95 60.47C22.59 60.13 22.38 59.65 22.38 59.15V25.71C22.38 24.74 23.13 23.94 24.1 23.89L59.77 21.83C60.27 21.8 60.76 21.98 61.13 22.33C61.49 22.67 61.7 23.15 61.7 23.65H61.71ZM49.73 45.07V31.35C49.1 30.63 48.1 30.68 46.66 30.24C46.56 30.21 46.47 30.13 46.43 30.03C46.39 29.93 46.4 29.81 46.46 29.72C48.18 27.19 53.09 28.77 56.29 27.76C56.38 27.73 56.49 27.74 56.57 27.81C56.65 27.88 56.68 27.98 56.66 28.08C56.35 29.47 55.26 30.18 53.71 30.48V53.05C53.71 53.8 53.26 54.49 52.56 54.77C51.92 55.03 51.25 55.31 51.25 55.31C49.71 56.11 47.82 55.6 46.88 54.14L35.42 36.27V52.54C36.04 53.26 37.05 53.21 38.49 53.65C38.59 53.68 38.68 53.76 38.72 53.86C38.76 53.96 38.75 54.08 38.69 54.17C36.96 56.7 32.06 55.12 28.86 56.13C28.77 56.17 28.66 56.15 28.58 56.08C28.5 56.02 28.47 55.91 28.49 55.81C28.8 54.42 29.89 53.71 31.44 53.41V32.1L28.42 31.81C28.42 31.81 28.63 29.36 31.51 29.08C32.93 28.94 36.64 28.78 37.98 28.72C38.28 28.71 38.57 28.85 38.75 29.1L49.74 45.05L49.73 45.07ZM21.53 19.28C22.08 19.7 22.77 19.91 23.46 19.87C28.55 19.58 50.28 18.34 55.67 18.03C55.84 18.02 55.98 17.9 56.02 17.74C56.06 17.58 55.99 17.41 55.85 17.32C53.46 15.83 51.11 14.37 50.09 13.69C49.36 13.21 48.49 12.98 47.61 13.03C47.61 13.03 22.91 14.39 17.83 14.94C17.19 15.01 17.05 15.24 17.03 15.33C16.94 15.64 17.05 15.87 17.3 16.07C18.32 16.85 20.37 18.4 21.53 19.28Z"
          fill="white"
        />
      </svg>
    ),
    name: "Notion",
    description: "Productivity Tool",
  },
  {
    id: 3,
    icon: (
      <svg
        width="77"
        height="74"
        viewBox="0 0 77 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
      >
        <rect
          x="0.25"
          y="0.25"
          width="76.5"
          height="73.5"
          rx="4.75"
          fill="#1E1E1E"
        />
        <rect
          x="0.25"
          y="0.25"
          width="76.5"
          height="73.5"
          rx="4.75"
          stroke="#AFAFAF"
          strokeWidth="0.5"
        />
        <rect x="9" y="7.5" width="59" height="59" rx="5" fill="#1E1E1E" />
        <path d="M24 44L38.5 58.5V44H53L38.5 29.5H24V44Z" fill="white" />
        <path d="M53 15H24L38.5 29.5H53V15Z" fill="white" />
      </svg>
    ),
    name: "Framer",
    description: "No Code Design Tool",
  },
  {
    id: 4,
    icon: (
      <svg
        enableBackground="new 0 0 2447.6 2452.5"
        viewBox="0 0 2447.6 2452.5"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
      >
        <g clipRule="evenodd" fillRule="evenodd">
          <path
            d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
            fill="#36c5f0"
          />
          <path
            d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
            fill="#2eb67d"
          />
          <path
            d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
            fill="#ecb22e"
          />
          <path
            d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
            fill="#e01e5a"
          />
        </g>
      </svg>
    ),
    name: "Slack",
    description: "Productivity Tool",
  },
];

const StackCard = ({ stack, index }) => (
  <AnimatedElement
    className="flex items-center gap-4 md:gap-6 rounded-xl bg-[#0A0A0B] border border-[#141415] p-4"
    animationProps={{
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.4, delay: index * 0.1 },
    }}
  >
    <div className="bg-[#1E1E1E] border border-[#343434] rounded-md p-3 md:p-4">
      {stack.icon}
    </div>
    <div>
      <h1 className="text-xl md:text-2xl font-bold text-white">{stack.name}</h1>
      <p className="text-[#999999] tracking-wide text-sm md:text-base">
        {stack.description}
      </p>
    </div>
  </AnimatedElement>
);

export default function TechStackSection() {
  return (
    <div className="pb-20 md:pb-40 mt-20 mx-auto md:mx-[2rem] lg:mx-[10rem] xl:mx-[21rem]">
      <AnimatedElement
        animationProps={{
          initial: { opacity: 0, x: -200 },
          whileInView: { opacity: 1, x: 0 },
          transition: { staggerChildren: 0.2, duration: 0.5 },
        }}
      >
        <div className="flex items-center gap-2">
          <StackIcon />
          <h1 className="text-3xl md:text-4xl font-bold tracking-wider text-white">
            My Stacks
          </h1>
        </div>
        <p className="pl-12 mt-4 text-lg tracking-wider text-stone-400">
          Commitment to staying updated with the latest design trends and
          techniques.
        </p>
      </AnimatedElement>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-10 text-white">
        {techStacks.map((stack, index) => (
          <StackCard key={stack.id} stack={stack} index={index} />
        ))}
      </div>
    </div>
  );
}
