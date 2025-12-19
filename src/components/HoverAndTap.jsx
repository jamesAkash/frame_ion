import { motion } from "framer-motion";

const HoverAndTap = () => {
  return (
    <motion.div
      initial={{ x: 0 }}
      whileInView={{ x: [0, 20, 0] }}
      whileHover={{ scale: 2, rotate: 120 }}
      transition={{
        x: { duration: 0.8, ease: "easeInOut" },
        scale: { type: "spring", stiffness: 120, damping: 8 },
      }}
      viewport={{ once: true }}
      className="w-20 h-20 bg-yellow-200"
    >
      Hover/Tap
    </motion.div>
  );
};

export default HoverAndTap;
