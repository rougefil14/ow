import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const principles = [
    {
      quote: "Birth must not be a sentence.",
      description: "No child should be denied life because of where they were born.",
    },
    {
      quote: "Human potential deserves a foundation, not a lottery.",
      description: "Every child should have access to the basic conditions needed to thrive.",
    },
    {
      quote: "A foundational beginning for every child is the responsibility of all humanity.",
      description: "This is not a political statement. It is a moral one.",
    },
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
            Our Philosophy
          </h2>
          <p className="text-xl md:text-2xl text-primary-700 max-w-4xl mx-auto leading-relaxed mb-4">
            Human potential is universal. Opportunity is not.
          </p>
          <p className="text-lg md:text-xl text-primary-600 max-w-4xl mx-auto leading-relaxed">
            No child chooses the family, nation, or circumstances they are born into — yet these factors shape their entire life.
          </p>
        </motion.div>

        <div className="space-y-12 mb-12">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-earth-200"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-deepBlue-700 mb-6 leading-tight">
                "{principle.quote}"
              </p>
              <p className="text-lg md:text-xl text-primary-700 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-primary-50 rounded-2xl p-8 md:p-12"
        >
          <p className="text-lg md:text-xl text-primary-800 leading-relaxed max-w-3xl mx-auto">
            This is not a political statement. It is a moral one — a recognition that birth should never be a barrier to survival, development, or dignity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;

