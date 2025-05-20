// src/components/Stats.jsx
import { motion } from "framer-motion";
import AnimatedElement from "./AnimatedElement";

const StatItem = ({ value, label, delay }) => (
  <AnimatedElement
    className="text-center"
    animationProps={{
      initial: { opacity: 0, y: -50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: delay * 0.2 },
      viewport: { once: true, amount: 0.5 },
    }}
  >
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
      {value}
    </h1>
    <p className="text-lg tracking-wider text-stone-400 mt-1 sm:mt-2">
      {label}
    </p>
  </AnimatedElement>
);

const DashedBorder = () => (
  <motion.div
    className="relative w-full h-2 overflow-hidden"
    initial={{ x: "-100%" }}
    whileInView={{ x: "100%" }}
    transition={{ duration: 1, ease: "power4.out" }}
    viewport={{ once: true, amount: 0.5 }}
  >
    <div className="w-full border-dashed border-y-2 border-stone-600"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-[#0b0b0b]"></div>{" "}
    {/* This is for the wipe animation */}
  </motion.div>
);

export default function Stats() {
  const statsData = [
    { value: "15+", label: "Happy Clients" },
    { value: "3+", label: "Years of Experience" },
    { value: "8+", label: "Projects" },
    { value: "5⭐", label: "Fiver/Upwork Rating" },
  ];

  return (
    <div className="mt-14 mx-auto md:mx-[2rem] lg:mx-[10rem] xl:mx-[21rem]">
      <DashedBorder />
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 px-6 py-8 overflow-hidden">
        {statsData.map((stat, index) => (
          <StatItem
            key={index}
            value={stat.value}
            label={stat.label}
            delay={index}
          />
        ))}
      </div>
      <DashedBorder />
    </div>
  );
}
