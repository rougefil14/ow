import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const GetInvolved = () => {
  const [activeTab, setActiveTab] = useState('volunteer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    organization: '',
    interest: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '', organization: '', interest: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get Involved</h1>
            <p className="text-2xl md:text-3xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Join us in creating a world where every child has an equal opportunity from birth
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['volunteer', 'partner', 'donate'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 capitalize ${
                activeTab === tab
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab === 'volunteer' ? 'Become a Volunteer' : tab === 'partner' ? 'Become a Partner' : 'Donate'}
            </button>
          ))}
        </div>

        {/* Volunteer Tab */}
        {activeTab === 'volunteer' && (
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Become a Volunteer</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Volunteers are the heart of our organization. Whether you can give a few hours a week 
                  or commit to a long-term project, your time and skills make a real difference.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">📋</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Program Support</h3>
                      <p className="text-gray-600">Help run our programs on the ground</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">💻</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Remote Opportunities</h3>
                      <p className="text-gray-600">Support from anywhere with your skills</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">🌍</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Field Work</h3>
                      <p className="text-gray-600">Direct impact in communities worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Area of Interest</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select an area</option>
                      <option value="program-support">Program Support</option>
                      <option value="remote">Remote Opportunities</option>
                      <option value="field-work">Field Work</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Partner Tab */}
        {activeTab === 'partner' && (
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Become a Partner</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Partner with us to amplify our impact. We work with corporations, foundations, 
                  governments, and other organizations to create lasting change.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">🤝</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Corporate Partnerships</h3>
                      <p className="text-gray-600">Align your business with our mission</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">🏛️</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Foundation Grants</h3>
                      <p className="text-gray-600">Support our programs through grants</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">🌐</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">International Collaboration</h3>
                      <p className="text-gray-600">Join our global network of partners</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Organization Name</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Partnership Interest</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your organization and how you'd like to partner..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Submit Partnership Inquiry
                  </button>
                </form>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Donate Tab */}
        {activeTab === 'donate' && (
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Make a Donation</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your donation directly supports our programs and helps us reach more children in need.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <Link
                to="/donate"
                className="block w-full px-8 py-6 bg-primary-600 text-white rounded-2xl font-semibold text-xl hover:bg-primary-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 text-center"
              >
                Go to Donation Page →
              </Link>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
};

export default GetInvolved;

