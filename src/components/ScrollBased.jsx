import { motion } from "framer-motion";

const ScrollBased = () => {
  return (
    <>
      <ScrollRightAndLeft />
      <Staggered />
    </>
  );
};

const ScrollRightAndLeft = () => (
  <>
    <BasicScrollReveal>From Right</BasicScrollReveal>
    <BasicScrollReveal initialX={-300}>From Left</BasicScrollReveal>
  </>
);

const BasicScrollReveal = ({ initialX = 300, children }) => (
  <motion.div
    initial={{ opacity: 0, x: initialX, scale: 0.8, filter: "blur(5px)" }}
    whileInView={{
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
    }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
    viewport={{ once: true, amount: 0.35 }}
    style={{
      width: 160,
      height: 160,
      margin: "auto",
      background: "skyblue",
      borderRadius: 16,
      display: "grid",
      placeItems: "center",
      fontWeight: 600,
    }}
  >
    {children}
  </motion.div>
);

// Staggered

const Staggered = () => {
  const items = [1, 2, 3, 4];

  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      style={{ listStyle: "none", padding: 0 }}
    >
      {items.map((i) => (
        <motion.li
          key={i}
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4, delay: i * 0.15 }}
          style={{
            width: 200,
            height: 50,
            margin: "20px auto",
            background: "skyblue",
            borderRadius: 10,
          }}
        />
      ))}
    </motion.ul>
  );
};

export default ScrollBased;
