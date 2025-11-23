import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    paymentMethod: 'card',
  });

  const presetAmounts = [25, 50, 100, 250, 500, 1000];

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = selectedAmount || customAmount;
    if (!amount || amount <= 0) {
      alert('Please select or enter a donation amount');
      return;
    }
    alert(`Thank you for your donation of $${amount}! This is a placeholder - payment processing would be integrated here.`);
    setFormData({ name: '', email: '', phone: '', paymentMethod: 'card' });
    setSelectedAmount(null);
    setCustomAmount('');
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Make a Donation</h1>
            <p className="text-2xl md:text-3xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Your contribution helps us ensure equal opportunity from birth for children worldwide
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Donation Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Amount Selection */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Select Amount</h2>
              
              {/* Preset Amounts */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`px-6 py-4 rounded-xl font-semibold transition-all duration-200 ${
                      selectedAmount === amount
                        ? 'bg-primary-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Or Enter Custom Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="0.00"
                    min="1"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Impact Message */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Your Impact</h3>
                <p className="text-sm text-gray-600">
                  {selectedAmount || customAmount ? (
                    <>
                      ${selectedAmount || customAmount} can provide{' '}
                      {Math.floor((selectedAmount || customAmount) / 2)} nutritious meals for children in need.
                    </>
                  ) : (
                    'Select an amount to see your impact'
                  )}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side - Payment Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Information</h2>
              
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Payment Method</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="card">Credit/Debit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank">Bank Transfer</option>
                  </select>
                </div>

                {/* Payment Details Placeholder */}
                {formData.paymentMethod === 'card' && (
                  <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary-600 text-white rounded-full font-semibold text-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Donate ${selectedAmount || customAmount || '0.00'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  🔒 Your payment information is secure. This is a placeholder form.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>

        {/* Why Donate Section */}
        <AnimatedSection className="mt-20">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Your Donation Matters</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Every dollar you donate goes directly toward our programs that provide food, healthcare, 
              education, and safety to children in need. Your contribution helps us reach more children 
              and create lasting change.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { icon: '✅', text: '100% of donations fund programs' },
                { icon: '🌍', text: 'Transparent impact reporting' },
                { icon: '💝', text: 'Tax-deductible contributions' },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Donate;

