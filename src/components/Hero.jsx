// src/components/Hero.jsx
import { motion } from "framer-motion";
import LinkedInIcon from "../assets/svgs/LinkedInIcon"; // Assuming you create this

export default function Hero() {
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = (x = 0, y = 0) => ({
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  });

  return (
    <motion.div
      className="mx-auto md:mx-[2rem] lg:mx-[10rem] xl:mx-[21rem] mt-14 lg:mt-0 lg:pt-16" // Adjusted margin/padding for hero
      variants={heroVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col lg:flex-row items-center justify-start space-y-10 lg:space-y-0 lg:space-x-10">
        <motion.a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/shivam-tiwari-b81820226/"
          className="overflow-hidden cursor-pointer relative group hero-image-container" // Added for easier targeting
          variants={itemVariants(0, 100)}
        >
          <div className="rounded-xl    transition-opacity duration-300 overflow-hidden">
            {/* You'll need to create LinkedInIcon.jsx or inline the SVG */}
            <LinkedInIcon className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]" />
          </div>
        </motion.a>
        <motion.div
          className="space-y-4 tracking-wider text-center lg:text-left"
          variants={heroVariants} // Use parent's variants for stagger
        >
          <motion.h1
            className="text-2xl font-bold text-gray-400"
            variants={itemVariants(100, 0)}
          >
            👋 Hello I AM
          </motion.h1>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
            variants={itemVariants(-50, 0)}
          >
            Shivam Tiwari
          </motion.h1>
          <motion.p
            className="max-w-xl text-lg text-stone-400"
            variants={itemVariants(0, 100)}
          >
            A 20-year-old product designer with an outstanding track record,
            specializing in transforming paper sketches into digital products! I
            collaborate closely with founders to bring unique ideas to life,
            from concept to launch, across both B2C consumer apps and B2B SaaS
            solutions.💡
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row pt-10 space-y-4 sm:space-y-0 sm:space-x-4 text-lg font-bold text-stone-300 justify-center lg:justify-start"
            variants={itemVariants(0, 100)}
          >
            <a
              href="mailto:st38696@gmail.com"
              className="bg-[#242424] px-8 sm:px-12 text-center rounded-lg py-4 border border-gray-600 hover:bg-[#131313] duration-200"
            >
              EMAIL ME
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://cal.com/shivam-tiwari-sonzd9/schedule-call?date=2024-06-28&month=2024-06"
              className="bg-[#1c1c1c] px-8 sm:px-12 text-center rounded-lg py-4 border border-gray-600 hover:bg-[#131313] duration-200"
            >
              SCHEDULE CALL
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
