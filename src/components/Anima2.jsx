import { motion } from "framer-motion";

const Anima2 = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-green-300 px-4 py-2 rounded-md"
      >
        Anima
      </motion.div>
    </div>
  );
};

export default Anima2;
