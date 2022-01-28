import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";

const MotionOnView: FunctionComponent = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: Math.random() }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
};

export default MotionOnView;
