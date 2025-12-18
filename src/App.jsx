import * as motion from "motion/react-client";

const App = () => {
  return (
    <div className="bg-green-50">
      <motion.div
        style={box}
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: 5,
};

export default App;
