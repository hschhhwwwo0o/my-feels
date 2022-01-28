import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { MotionConfig } from "motion.config";

const MotionOnView: FunctionComponent = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: MotionConfig.initialOpacity }}
      whileInView={{ opacity: MotionConfig.defaultOpacity }}
      transition={{ duration: MotionConfig.transitionDuration, delay: Math.random() }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
};

export default MotionOnView;
