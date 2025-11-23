import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const StatCounter = ({ value, label, suffix = '', prefix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const spring = useSpring(count, { damping: 50, stiffness: 100 });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent mb-2">
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </motion.div>
      <p className="text-gray-600 text-lg md:text-xl font-medium">{label}</p>
    </motion.div>
  );
};

export default StatCounter;

