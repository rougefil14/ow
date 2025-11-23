import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const GovernanceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const principles = [
    'A Foundational Charter that cannot be altered for personal or political gain',
    'A council of global stewards, selected by merit, ethics, and expertise',
    'All operations bound to the Immutable Charter, not to leaders',
    'Mechanisms for rapid-response decision making',
    'Oversight through transparent public reporting',
    'Independence from governments, corporations, and ideological agendas',
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
            Governance Model
          </h2>
          <p className="text-xl md:text-2xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            The Foundation is structured to avoid concentration of power while ensuring fast, decisive action.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-900 mb-8 text-center">
            Key Principles of Governance
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-earth-50 rounded-lg p-6 border-l-4 border-deepBlue-600"
              >
                <p className="text-lg text-primary-800 leading-relaxed">{principle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="bg-gradient-to-br from-deepBlue-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
            <p className="text-2xl md:text-3xl font-serif font-bold mb-4">
              People can change. Principles cannot.
            </p>
          </div>
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-xl text-primary-800 leading-relaxed">
              This is why our foundation rests on codified, protected, core laws that guide all actions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GovernanceSection;

