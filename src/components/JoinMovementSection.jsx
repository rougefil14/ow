import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const JoinMovementSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const ways = [
    'Becoming a supporter of the Foundation',
    'Sharing the mission',
    'Volunteering with partner organizations',
    'Helping us build the global network',
    'Funding early-stage programs',
    'Lending professional expertise',
    'Becoming an ambassador of the message',
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
            Join the Movement
          </h2>
          <p className="text-2xl md:text-3xl font-serif font-semibold text-primary-800 mb-6">
            The world does not change by accident.
          </p>
          <p className="text-xl md:text-2xl font-serif font-semibold text-deepBlue-700 mb-8">
            It changes when people choose to build structures that outlast them.
          </p>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            You can contribute by:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ways.map((way, index) => (
            <motion.div
              key={way}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-earth-50 rounded-lg p-6 border border-earth-200 hover:border-deepBlue-400 transition-colors"
            >
              <div className="flex items-start">
                <div className="w-2 h-2 bg-deepBlue-600 rounded-full mr-4 mt-2 flex-shrink-0" />
                <p className="text-lg text-primary-800 leading-relaxed">{way}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center bg-gradient-to-br from-deepBlue-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white"
        >
          <p className="text-xl md:text-2xl font-serif font-semibold mb-6">
            Every person on Earth is, in a sense, a stakeholder of humanity's future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="px-8 py-4 bg-white text-deepBlue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Get Involved
            </Link>
            <Link
              to="/donate"
              className="px-8 py-4 bg-deepBlue-500/20 backdrop-blur-md text-white border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-deepBlue-500/30 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Donate
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinMovementSection;

