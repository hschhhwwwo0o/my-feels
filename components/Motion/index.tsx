import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";

interface IMotion {
  delay: number;
}

const Motion: FunctionComponent<IMotion> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.73, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
