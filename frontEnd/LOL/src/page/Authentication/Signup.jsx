import { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export const Signup = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });
  const [status, setStatus] = useState('');
  const [isSliding, setIsSliding] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name.trim() &&
      formData.email.trim() &&
      formData.password.trim() &&
      formData.confirmPassword.trim()
    ) {
      if (formData.password === formData.confirmPassword) {
        setStatus('Creating account...');
        setTimeout(() => {
          setStatus('Account created successfully!');
          setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        }, 1500);
      } else {
        setStatus('Passwords do not match!');
      }
    } else {
      setStatus('Please fill all fields!');
    }
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsSliding(true);
    setTimeout(() => {
      window.location.href = '/login';
    }, 800);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans flex flex-col overflow-hidden ${
      isSliding ? 'slide-out-right' : isMounted ? 'slide-in-right' : 'opacity-0'
    }`}>
      <style jsx>{`
        .slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        .slide-out-right {
          animation: slideOutRight 0.8s ease-in forwards;
        }
        @keyframes slideInRight {
          0% { transform: translateX(20px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
          0% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .float-image {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      <Header />
      <main className="flex-grow flex items-center justify-center p-6">
        <section className="bg-white rounded-2xl shadow-xl w-full max-w-4xl flex overflow-hidden min-h-[550px] transform transition-all duration-500 hover:shadow-2xl">
          {/* Left Side: Form */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center space-y-1">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6 text-center transform transition-all duration-300 hover:scale-105">
              Join Our Community
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { id: 'name', label: 'Full Name', type: 'text' },
                { id: 'email', label: 'Email', type: 'email' },
                { id: 'password', label: 'Password', type: 'password' },
                { id: 'confirmPassword', label: 'Confirm Password', type: 'password' }
              ].map((field, index) => (
                <div 
                  key={field.id}
                  className="transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <label htmlFor={field.id} className="block text-gray-600 mb-1 font-medium">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                    className="w-full p-3 bg-white rounded-xl border-2 border-purple-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                    required
                  />
                </div>
              ))}
              
              <button
                type="submit"
                className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center">
                  <span className="mr-2">Create Account</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
              
              {status && (
                <div className={`mt-4 p-3 rounded-lg text-center ${
                  status.includes('successful') 
                    ? 'animate-pulse text-green-600 bg-green-50' 
                    : 'text-red-600 bg-red-50'
                }`}>
                  {status}
                </div>
              )}
            </form>
            
            <p className="mt-6 text-center text-gray-600">
              Already a member?{' '}
              <a
                href="/login"
                onClick={handleLoginClick}
                className="text-indigo-600 hover:text-indigo-800 font-medium transition-all duration-300 hover:underline hover:underline-offset-4"
              >
                Sign In
              </a>
            </p>
          </div>
          
          {/* Right Side: Now Fully Visible Image */}
          <div className="hidden md:block w-1/2 h-full relative overflow-hidden">
            {/* Completely removed the overlay div that was making image dark */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover float-image"
              style={{ minHeight: '550px' }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x600.png?text=Team+Collaboration';
              }}
            />
            
            {/* Text directly on image with shadow for readability */}
            <div className="absolute bottom-8 left-0 right-0 text-center px-8">
              <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">Start Your Journey</h3>
              <p className="text-white/95 drop-shadow-md">Join thousands of professionals worldwide</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;