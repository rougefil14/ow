import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const items = [
    'Basic nutrition',
    'Early medical care',
    'Safety and shelter',
    'Foundational education',
    'Developmental support',
    'A path toward opportunity',
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-8">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-primary-700 max-w-4xl mx-auto leading-relaxed mb-6">
            One World Foundation exists to ensure that every human being is born into conditions that preserve life, dignity, and the possibility to grow into their potential.
          </p>
          <p className="text-lg md:text-xl text-primary-600 max-w-4xl mx-auto leading-relaxed">
            We focus on creating a global system that guarantees all children, regardless of geography, access to:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-earth-50 rounded-lg p-6 border border-earth-200"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-deepBlue-600 rounded-full mr-4" />
                <p className="text-lg text-primary-800 font-medium">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-serif font-semibold text-primary-900 max-w-3xl mx-auto leading-relaxed">
            Our goal is not to make all lives identical — but to ensure every person begins with a fair chance to live.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;

