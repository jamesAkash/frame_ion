import { motion } from "framer-motion";

const HoverAndTap = () => {
  return (
    <div className="h-screen w-full justify-center items-center flex">
      <div className="flex flex-col gap-6 items-center">
        <Basic />
        <Card />
        <Button />
      </div>
    </div>
  );
};

const Basic = () => (
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

const Card = () => (
  <motion.div
    whileHover={{
      scale: 1.04,
      y: -8,
      boxShadow: "0px 30px 60px rgba(0,0,0,0.2)",
    }}
    transition={{ type: "spring", stiffness: 260, damping: 18 }}
    className="w-64 h-40 rounded-2xl bg-white p-6 border border-slate-200 cursor-pointer"
  >
    Fancy Card
  </motion.div>
);

const Button = () => (
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 300, damping: 18 }}
    className="px-6 py-3 bg-black text-white rounded-xl shadow-md"
  >
    Buy Now
  </motion.button>
);

export default HoverAndTap;
