import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const Mission = () => {
  const missionAreas = [
    {
      title: 'Food Security',
      icon: '🍽️',
      description: 'Ensuring every child has access to nutritious meals from birth. We provide food assistance programs, nutritional education, and support for families in need.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    },
    {
      title: 'Healthcare',
      icon: '🏥',
      description: 'Access to quality healthcare is a fundamental right. We support vaccination programs, maternal health services, and pediatric care in underserved communities.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80',
    },
    {
      title: 'Early Education',
      icon: '📚',
      description: 'Education begins at birth. We establish early learning centers, provide educational resources, and train caregivers to support cognitive development from the earliest stages.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    },
    {
      title: 'Safety & Security',
      icon: '🛡️',
      description: 'Every child deserves a safe environment to grow. We work to eliminate violence, provide safe spaces, and ensure children are protected from harm.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    },
    {
      title: 'Parenting Support',
      icon: '👨‍👩‍👧‍👦',
      description: 'Supporting parents and caregivers with resources, training, and community networks to provide the best possible start for their children.',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80',
    },
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Mission</h1>
            <p className="text-2xl md:text-3xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Equal Opportunity From Birth
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Introduction */}
        <AnimatedSection className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Does Equal Opportunity Mean?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Equal opportunity from birth means that every child, regardless of where they are born, 
              should have access to the fundamental resources needed to thrive. It's not about equal outcomes— 
              it's about ensuring that the starting line is the same for everyone.
            </p>
          </div>
        </AnimatedSection>

        {/* Mission Areas */}
        <div className="space-y-24">
          {missionAreas.map((area, index) => (
            <AnimatedSection
              key={area.title}
              delay={index * 0.1}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="text-6xl mb-4">{area.icon}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{area.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{area.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Vision Statement */}
        <AnimatedSection className="mt-32">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-12 md:p-16 shadow-xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                A global system that ensures humane early-life conditions for every newborn. 
                A world where no child's potential is limited by circumstances beyond their control.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Mission;

