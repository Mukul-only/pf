// src/components/AnimatedElement.jsx
import { motion } from "framer-motion";

const AnimatedElement = ({ children, className, animationProps }) => {
  const defaultAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const combinedProps = { ...defaultAnimation, ...animationProps };

  return (
    <motion.div className={className} {...combinedProps}>
      {children}
    </motion.div>
  );
};

export default AnimatedElement;
