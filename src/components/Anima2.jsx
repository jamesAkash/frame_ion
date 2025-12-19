import { motion } from "framer-motion";

const Anima2 = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Box />
    </div>
  );
};

// Basic
function Box() {
  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 40, scale: 0.3 }}
    //   animate={{ opacity: 1, y: 0, scale: 1 }}
    //   transition={{ duration: 2, ease: "easeOut" }}
    //   style={{
    //     width: 120,
    //     height: 120,
    //     background: "skyblue",
    //     borderRadius: 12,
    //   }}
    // />
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.2 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      // transition={{ type: "spring", stiffness: 280, damping: 10 }}
      // apple
      // transition={{ type: "spring", stiffness: 140, damping: 20 }}
      // playfull
      // transition={{ type: "spring", stiffness: 300, damping: 8 }}
      //bold reveal
      // transition={{ type: "spring", stiffness: 80, damping: 30 }}
      style={{
        width: 120,
        height: 120,
        background: "skyblue",
        borderRadius: 12,
      }}
    />
  );
}

export default Anima2;
