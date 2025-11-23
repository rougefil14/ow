import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const GlobalImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const programs = [
    'Maternal and newborn health',
    'Emergency nutrition programs',
    'Vaccination access',
    'Early childhood education',
    'Community caregiver support',
    'Shelter and child protection',
    'Digital learning tools for remote areas',
    'Funding networks for local humanitarian organizations',
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-earth-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-8">
            Our Vision for Impact
          </h2>
          <p className="text-xl md:text-2xl text-primary-700 max-w-4xl mx-auto leading-relaxed mb-6">
            We aim to build and support programs that deliver foundational beginnings across the world:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={program}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 border border-earth-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-base text-primary-800 font-medium leading-relaxed">{program}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-primary-900 to-deepBlue-800 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <p className="text-xl md:text-2xl font-serif font-semibold mb-4">
            Our long-term vision
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            is the creation of a global system that ensures these conditions are available in every region of the world, sustainably and independently.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalImpactSection;

