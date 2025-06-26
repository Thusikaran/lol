import { useState } from 'react';

const Footer = () => {
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      setIsSubmitted(true);
      setFeedback('');
      setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 seconds
      // Add feedback submission logic here (e.g., API call)
      console.log('Feedback submitted:', feedback);
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes slideIn {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slideIn {
            animation: slideIn 0.5s ease-out;
          }
        `}
      </style>
      <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-center animate-slideIn">
        <div className="text-2xl font-bold text-white mb-4 flex justify-center items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-10 mr-2"
            onError={(e) => e.target.replaceWith(<span>Brand</span>)}
          />
          <span className="hidden sm:inline">Brand</span>
        </div>
        <nav className="flex justify-center space-x-6 mb-4 flex-wrap" aria-label="Footer navigation">
          <a
            href="#home"
            className="text-white hover:text-purple-200 transition-colors duration-300 transform hover:scale-105"
          >
            Home
          </a>
          <a
            href="#contact"
            className="text-white hover:text-purple-200 transition-colors duration-300 transform hover:scale-105"
          >
            Contact Us
          </a>
        </nav>
        <form onSubmit={handleFeedbackSubmit} className="mb-4">
          <div className="flex justify-center items-center flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Send me Feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="p-2 rounded-lg w-full sm:w-1/2 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-200 text-gray-800"
              aria-label="Feedback input"
            />
            <button
              type="submit"
              className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors duration-300 transform hover:scale-105"
              aria-label="Submit feedback"
            >
              Submit
            </button>
          </div>
          {isSubmitted && (
            <p className="text-white mt-2 animate-fadeIn">Thank you for your feedback!</p>
          )}
        </form>
        <p className="text-purple-200">Privacy & Security © {new Date().getFullYear()} | Brand</p>
      </footer>
    </>
  );
};

export default Footer;
