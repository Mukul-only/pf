// src/components/StickyCTA.jsx
import { motion } from "framer-motion";
import LayoutIcon from "../assets/svgs/LayoutIcon";

export default function StickyCTA() {
  return (
    <motion.header
      className="flex items-stretch justify-between space-x-10 rounded-md text-[#B8B8B8] sticky bottom-[2rem] md:bottom-[4rem] backdrop-blur-md mx-[1rem] md:mx-[2rem] lg:mx-[10rem] xl:mx-[21rem] z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2 }} // Delayed to appear after hero
    >
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 bg-[#121212] px-6 py-4 rounded-lg text-xl items-center w-full justify-between">
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="p-2 rounded-lg border border-[#232323] bg-[#141415]">
            <LayoutIcon className="w-8 h-8 sm:w-12 sm:h-12 fill-[#E6E6E6]" />
          </div>
          <p className="text-base sm:text-xl text-center sm:text-left">
            Are you a HR looking for resume?
          </p>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1eOMDXZ6UrhFFYLvR_B0LMRHwiJgkKzdW/view"
          className="px-4 py-2 text-base sm:text-lg font-semibold text-center bg-white rounded-lg text-slate-800 whitespace-nowrap"
        >
          Download Resume
        </a>
      </div>
    </motion.header>
  );
}
