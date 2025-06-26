import { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [status, setStatus] = useState('');
  const [isSliding, setIsSliding] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mount animation
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email.trim() && formData.password.trim()) {
      setStatus('Logging in...');
      console.log('Login submitted:', formData);
      setTimeout(() => {
        setStatus('Login successful!');
        setFormData({ email: '', password: '' });
        setTimeout(() => setStatus(''), 3000);
      }, 1000);
    } else {
      setStatus('Please fill in all fields.');
    }
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    setIsSliding(true);
    setTimeout(() => {
      window.location.href = '/signup';
    }, 800); // Matches longest animation duration
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans flex flex-col overflow-hidden ${
      isSliding ? 'slide-out-left' : isMounted ? 'slide-in-left' : 'opacity-0'
    }`}>
      <style jsx>{`
        .slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        .slide-out-left {
          animation: slideOutLeft 0.8s ease-in forwards;
        }
        @keyframes slideInLeft {
          0% {
            transform: translateX(-20px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutLeft {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        .floating {
          animation: floating 3s ease-in-out infinite;
        }
        @keyframes floating {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>

      <Header />
      <main className="flex-grow flex items-center justify-center p-6">
        {/* Animated Card */}
        <section className="bg-white rounded-2xl shadow-xl w-full max-w-4xl flex overflow-hidden min-h-[500px] transform transition-all duration-500 hover:shadow-2xl">
          {/* Left Side: Login Form with staggered animations */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-8 text-center transform transition-all duration-300 hover:scale-105">
              Welcome Back
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Login form">
              <div className="transform transition-all duration-300 hover:scale-[1.01]">
                <label htmlFor="email" className="block text-gray-600 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-3 bg-white rounded-xl border-2 border-purple-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                  required
                  aria-label="Email"
                />
              </div>
              
              <div className="transform transition-all duration-300 hover:scale-[1.01]">
                <label htmlFor="password" className="block text-gray-600 mb-2 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full p-3 bg-white rounded-xl border-2 border-purple-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                  required
                  aria-label="Password"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg hover:shadow-xl"
                aria-label="Login"
              >
                <span className="flex items-center justify-center">
                  <span className="mr-2">Login</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
              
              {status && (
                <div className={`animate-pulse ${
                  status.includes('successful') 
                    ? 'text-green-600 bg-green-50 p-3 rounded-lg' 
                    : 'text-red-600 bg-red-50 p-3 rounded-lg'
                }`}>
                  {status}
                </div>
              )}
            </form>
            
            <p className="mt-8 text-center text-gray-600">
              New here?{' '}
              <a
                href="/signup"
                onClick={handleSignupClick}
                className="text-purple-600 hover:text-purple-800 font-medium transition-all duration-300 hover:underline hover:underline-offset-4"
                aria-label="Navigate to signup page"
              >
                Create an account
              </a>
            </p>
          </div>
          
          {/* Right Side: Animated Image */}
          <div className="hidden md:block w-1/2 h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-700 opacity-90"></div>
            <img
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Abstract background"
              className="w-full h-full object-cover min-h-[500px] floating"
              onError={(e) => {
                console.error('Image failed to load:', e);
                e.target.src = 'https://via.placeholder.com/800x600.png?text=Fallback+Image';
              }}
            />
            <div className="absolute bottom-8 left-0 right-0 text-center text-white px-8">
              <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
              <p className="opacity-90">Discover amazing features waiting for you</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;