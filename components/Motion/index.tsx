import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";
import { MotionConfig } from "motion.config";

interface IMotion {
  delay: number;
}

const Motion: FunctionComponent<IMotion> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: MotionConfig.initialOpacity }}
      animate={{ opacity: MotionConfig.defaultOpacity }}
      transition={{ duration: MotionConfig.defaultOpacity, delay: delay * MotionConfig.delayApplication }}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
