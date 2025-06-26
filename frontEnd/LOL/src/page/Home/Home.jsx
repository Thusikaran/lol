import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Card from '../Components/Card';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const slides = [
    {
      imgSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      title: "Professional Plumbing Services",
      subtitle: "Reliable solutions for your home or business"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1600585154526-990d71e706b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      title: "24/7 Emergency Service",
      subtitle: "We're always here when you need us most"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      title: "Quality Workmanship Guaranteed",
      subtitle: "Serving the community since 2010"
    }
  ];

  const services = [
    {
      imgSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      title: "Plumbing Installation",
      description: "Expert plumbing services for new installations and upgrades.",
      features: [
        'Residential and commercial',
        'Water supply systems',
        'Fixture installation'
      ],
      buttonText: "Learn More"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1600585154526-990d71e706b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      title: "Plumbing Repairs",
      description: "Reliable repairs and maintenance for all plumbing issues.",
      features: [
        'Leak detection & repair',
        'Pipe replacement',
        '24/7 emergency service'
      ],
      buttonText: "Schedule Repair"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      title: "Custom Plumbing",
      description: "Tailored plumbing solutions for unique project needs.",
      features: [
        'Custom pipe routing',
        'Energy-efficient solutions',
        'Project consultation'
      ],
      buttonText: "Discuss Project"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim() && formData.message.trim()) {
      setStatus('Message sent! Thank you.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } else {
      setStatus('Please fill in all fields.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Slider */}
        <section className="relative w-full overflow-hidden h-96 md:h-[500px]">
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 h-full relative">
                <img
                  src={slide.imgSrc}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">{slide.title}</h1>
                    <p className="text-xl mb-6">{slide.subtitle}</p>
                    <div className="flex justify-center gap-4">
                      <Link
                        to="/services"
                        className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-100 transition-all duration-300"
                      >
                        Our Services
                      </Link>
                      <Link
                        to="/contact"
                        className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-purple-600 p-2 rounded-full hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-purple-600 p-2 rounded-full hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Services Preview */}
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Services
              </h2>
              <div className="w-24 h-1 bg-purple-600 mx-auto mt-4 mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive plumbing solutions for residential and commercial properties
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  imgSrc={service.imgSrc}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  buttonText={service.buttonText}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-colors duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our team at work" 
                className="rounded-xl shadow-lg w-full"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                About Our Company
              </h2>
              <div className="w-24 h-1 bg-purple-600 mb-6"></div>
              <p className="text-gray-600 mb-6">
                Founded in 2010, we've grown from a small local business to one of the region's most trusted plumbing service providers. Our team of licensed professionals is committed to delivering exceptional service with integrity and expertise.
              </p>
              <p className="text-gray-600 mb-8">
                We take pride in our work and believe every customer deserves reliable plumbing solutions tailored to their specific needs.
              </p>
              <Link
                to="/about"
                className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-colors duration-200"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Contact Us
              </h2>
              <div className="w-24 h-1 bg-purple-600 mx-auto mt-4 mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions or ready to schedule service? We're here to help!
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  
                  {status && (
                    <div className={`p-4 rounded-lg ${status.includes('Thank you') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {status}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-purple-600 mt-1">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="ml-3 text-base text-gray-700">
                        <p>123 Plumbing Street</p>
                        <p>Cityville, State 12345</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-purple-600 mt-1">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="ml-3 text-base text-gray-700">
                        <p>Phone: (555) 123-4567</p>
                        <p>Emergency: (555) 987-6543</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-purple-600 mt-1">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-3 text-base text-gray-700">
                        <p>Email: contact@plumbingpros.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Saturday</span>
                      <span className="font-medium">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Sunday</span>
                      <span className="font-medium">Emergency Only</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;