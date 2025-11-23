import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-2xl md:text-3xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Our story, our vision, and our commitment to global equality
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                One World Foundation was born from a simple yet powerful belief: every child deserves 
                an equal opportunity from the moment they are born. We recognized that millions of 
                children around the world face insurmountable barriers simply because of where they 
                were born or the circumstances they inherited.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Founded by a group of passionate individuals who witnessed these inequalities firsthand, 
                we set out to create a foundation that addresses the root causes of inequality—lack of 
                access to food, healthcare, education, safety, and supportive early-life conditions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we work across multiple countries, partnering with local communities, governments, 
                and organizations to ensure that no child's potential is limited by circumstances beyond 
                their control.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                alt="Global unity"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Our Vision */}
        <AnimatedSection>
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-12 md:p-16 mb-20">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                A global system that ensures humane early-life conditions for every newborn.
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We envision a world where geography, economic status, or social circumstances do not 
                determine a child's future. A world where every child has access to nutritious food, 
                quality healthcare, early education, safe environments, and supportive caregivers from 
                the very beginning of their life.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Our Values */}
        <AnimatedSection>
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🌍',
                  title: 'Global Perspective',
                  description: 'We think globally and act locally, recognizing that inequality is a worldwide issue requiring worldwide solutions.',
                },
                {
                  icon: '❤️',
                  title: 'Compassion',
                  description: 'Every decision we make is guided by compassion and a deep commitment to the well-being of children and families.',
                },
                {
                  icon: '🤝',
                  title: 'Partnership',
                  description: 'We believe in the power of collaboration and work closely with communities, partners, and stakeholders.',
                },
                {
                  icon: '✨',
                  title: 'Innovation',
                  description: 'We continuously seek innovative solutions to complex problems, always looking for better ways to serve.',
                },
                {
                  icon: '📊',
                  title: 'Transparency',
                  description: 'We are committed to transparency in all our operations, ensuring accountability to our supporters and beneficiaries.',
                },
                {
                  icon: '🎯',
                  title: 'Impact',
                  description: 'We measure success by the real, tangible impact we have on the lives of children and families we serve.',
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* The Long-Term Goal */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-12 md:p-16 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Long-Term Goal</h2>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              A global system that ensures humane early-life conditions for every newborn. 
              We are working toward a future where equal opportunity from birth is not an aspiration—it's a reality.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;

