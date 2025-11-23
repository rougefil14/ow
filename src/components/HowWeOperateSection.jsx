import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const HowWeOperateSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const principles = [
    'Decisions are made through a governance body, not individuals',
    'Global collaboration over centralization',
    'Transparency and accountability',
    'Data-driven prioritization',
    'Partnerships with local organizations',
    'No political alignment',
    'No profit motive',
    'A long-term mission measured in centuries, not election cycles',
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-earth-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-8">
            How We Operate
          </h2>
          <p className="text-2xl md:text-3xl font-serif font-semibold text-primary-800 mb-6">
            The One World Foundation does not revolve around a single leader.
          </p>
          <p className="text-xl md:text-2xl font-serif font-semibold text-deepBlue-700">
            It is built on structure, not personality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-900 mb-8 text-center">
            Our Operating Principles
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 bg-white rounded-lg p-6 border border-earth-200 shadow-sm"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-deepBlue-600 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <p className="text-lg text-primary-800 leading-relaxed">{principle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-primary-900 text-white rounded-2xl p-8 md:p-12"
        >
          <p className="text-2xl md:text-3xl font-serif font-bold mb-4">
            We seek to build a system that outlives all of us.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeOperateSection;

