import React from "react";
// import { Container } from "./styles";
import { motion, AnimatePresence } from "framer-motion";

const LoadingPage: React.FC = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "var(--darkone)",
          zIndex: "var(--veryhigh)",
        }}
      />
    </AnimatePresence>
  );
};

export default LoadingPage;
