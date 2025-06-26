import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ 
  imgSrc, 
  title, 
  description, 
  features = [], 
  buttonText = 'Learn More' 
}) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imgSrc}
          alt={title}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300x200?text=Service+Image';
          }}
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {/* Features List */}
        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg 
                  className="flex-shrink-0 h-5 w-5 text-purple-500 mt-0.5" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <span className="ml-2 text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Button */}
        <div className="mt-auto">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-colors duration-200"
          >
            {buttonText}
            <svg 
              className="ml-2 -mr-1 w-4 h-4" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

// PropTypes for better development
Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string
};

export default Card;