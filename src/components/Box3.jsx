import { motion } from "framer-motion";

const RepeatLoop3 = () => {
  return (
    <div className="flex gap-4">
      <InfinitePulse />
      <BounceAnimation />
      <ShakeAnimation />
    </div>
  );
};

const InfinitePulse = () => (
  <motion.div
    // keyframe
    animate={{ scale: [1, 1.2, 1] }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop",
    }}
    style={{
      width: 120,
      height: 120,
      background: "skyblue",
      borderRadius: 12,
    }}
    className="flex justify-center items-center"
  >
    Infinite pulse
  </motion.div>
);

const BounceAnimation = () => (
  <motion.div
    animate={{ y: [0, 15, 0] }}
    transition={{ duration: 0.8, repeat: Infinity, repeatType: "loop" }}
    style={{
      width: 120,
      height: 120,
      background: "dodgerblue",
      borderRadius: 12,
    }}
    className="flex justify-center items-center"
  >
    Bounce
  </motion.div>
);

const ShakeAnimation = () => (
  <motion.div
    animate={{ x: [0, -10, 10, -10, 10, 0] }}
    transition={{ duration: 0.6 }}
    style={{
      width: 120,
      height: 120,
      background: "salmon",
      borderRadius: 12,
    }}
    className="flex justify-center items-center"
  >
    Error
  </motion.div>
);

export default RepeatLoop3;
