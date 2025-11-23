import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const FoundationalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const conditions = [
    'Nutritional security in early life',
    'Access to essential vaccines and medical support',
    'Protection from severe harm',
    'Early cognitive stimulation',
    'Basic education during the first years',
    'Support for families and caregivers',
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
            The Foundational Beginning
          </h2>
          <p className="text-xl md:text-2xl text-primary-700 max-w-4xl mx-auto leading-relaxed mb-6">
            What We Mean by "Foundational Beginning"
          </p>
          <p className="text-lg md:text-xl text-primary-600 max-w-4xl mx-auto leading-relaxed">
            A Foundational Beginning represents the minimum conditions every child needs to survive and to develop — not to make all children the same, but to ensure all children can live and grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {conditions.map((condition, index) => (
            <motion.div
              key={condition}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-4 bg-earth-50 rounded-lg p-6 border border-earth-200"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-deepBlue-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg text-primary-800 font-medium">{condition}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-deepBlue-50 to-primary-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <p className="text-xl md:text-2xl font-serif font-semibold text-primary-900 mb-4">
            "A foundational beginning for every child."
          </p>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            This is the foundation upon which human individuality, personality, creativity, talent, and choice can flourish.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FoundationalSection;

