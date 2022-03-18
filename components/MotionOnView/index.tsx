import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { MotionConfig } from "motion.config";

const MotionOnView: FunctionComponent = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: MotionConfig.initialOpacity }}
      whileInView={{ opacity: MotionConfig.defaultOpacity }}
      transition={{
        duration: MotionConfig.transitionDuration,
        delay:
          Math.random() > 0.5 ? MotionConfig.delayApplication : MotionConfig.delayApplication / 2,
      }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
};

export default MotionOnView;
