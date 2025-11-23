import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import ProgramCard from '../components/ProgramCard';

const Programs = () => {
  const programs = [
    {
      title: 'Nutrition First',
      description: 'Comprehensive nutrition programs providing meals, supplements, and education to ensure children receive proper nourishment from birth through early childhood.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    },
    {
      title: 'Healthy Start Initiative',
      description: 'Maternal and child healthcare programs offering prenatal care, vaccinations, regular check-ups, and access to medical professionals in underserved areas.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80',
    },
    {
      title: 'Early Learning Centers',
      description: 'Establishing safe, nurturing early childhood education centers where children can learn, play, and develop critical skills in a supportive environment.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    },
    {
      title: 'Safe Communities',
      description: 'Programs focused on creating safe environments for children, including community safety initiatives, child protection services, and violence prevention.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    },
    {
      title: 'Parent Empowerment',
      description: 'Training and support programs for parents and caregivers, providing them with knowledge, resources, and community networks to best support their children.',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80',
    },
    {
      title: 'Global Partnerships',
      description: 'Collaborating with local organizations, governments, and international partners to scale our impact and reach more children in need around the world.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
            <p className="text-2xl md:text-3xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive initiatives designed to ensure equal opportunity from birth
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection className="mb-12">
          <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto">
            Each program is carefully designed to address specific needs while working together 
            to create a comprehensive support system for children and families.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.title}
              title={program.title}
              description={program.description}
              image={program.image}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection className="mt-20">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Want to Support Our Programs?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Your support helps us expand these programs and reach more children in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donate"
                className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Donate Now
              </Link>
              <Link
                to="/get-involved"
                className="px-8 py-4 bg-primary-500/20 backdrop-blur-md text-white border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-primary-500/30 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Programs;

