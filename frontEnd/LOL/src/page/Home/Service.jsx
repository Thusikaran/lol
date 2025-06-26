import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Card from '../Components/Card';

const Services = () => {
  const services = [
    {
      imgSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      title: "Plumbing Installation",
      description: "Professional installation of all plumbing systems with premium materials and expert craftsmanship.",
      features: [
        'Residential and commercial',
        'Water supply systems',
        'Drainage systems',
        'Fixture installation'
      ],
      buttonText: "Learn More"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1600585154526-990d71e706b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      title: "Plumbing Repairs",
      description: "Fast and reliable repair services for all types of plumbing emergencies and maintenance needs.",
      features: [
        'Leak detection & repair',
        'Pipe replacement',
        'Drain cleaning',
        '24/7 emergency service'
      ],
      buttonText: "Schedule Repair"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      title: "Custom Plumbing",
      description: "Tailored plumbing designs for unique projects and specialized requirements.",
      features: [
        'Custom pipe routing',
        'Specialty fixtures',
        'Energy-efficient solutions',
        'Project consultation'
      ],
      buttonText: "Discuss Project"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1600585154526-990d71e706b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      title: "Water Heater Services",
      description: "Installation, repair, and maintenance of all types of water heating systems.",
      features: [
        'Tankless water heaters',
        'Traditional tank heaters',
        'Solar water heating',
        'Maintenance plans'
      ],
      buttonText: "View Options"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      title: "Drain Services",
      description: "Complete drain cleaning and maintenance to keep your systems flowing smoothly.",
      features: [
        'Hydro jetting',
        'Video inspection',
        'Rooter service',
        'Preventative maintenance'
      ],
      buttonText: "Clear Drains"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1600585154526-990d71e706b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      title: "Commercial Plumbing",
      description: "Specialized services for businesses, offices, and industrial facilities.",
      features: [
        'High-volume systems',
        'Backflow prevention',
        'Grease trap installation',
        'Code compliance'
      ],
      buttonText: "Business Solutions"
    }
  ];

  const guarantees = [
    {
      title: "Quality Workmanship",
      description: "All work performed by licensed professionals with years of experience.",
      icon: "M5 13l4 4L19 7"
    },
    {
      title: "On-Time Service",
      description: "We value your time and guarantee punctual arrivals for all appointments.",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Price Guarantee",
      description: "Upfront pricing with no hidden fees. We'll beat any written estimate.",
      icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-700 to-indigo-700 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Professional Services</h1>
            <p className="text-xl md:text-2xl mb-8">
              Comprehensive plumbing solutions for residential and commercial properties
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Request Free Estimate
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
              Our Service Portfolio
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional plumbing services with unmatched quality and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
        </section>

        {/* Service Guarantees */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-purple-900 sm:text-4xl mb-4">
                Our Unmatched Guarantees
              </h2>
              <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="bg-purple-50 p-8 rounded-xl hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-purple-600 text-white">
                      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={guarantee.icon} />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-900 mb-3">{guarantee.title}</h3>
                  <p className="text-gray-600 text-center">{guarantee.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Quality Plumbing Service?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact us today for a free consultation and estimate
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-100 transition-colors duration-200 shadow-lg"
              >
                Get in Touch
              </Link>
              <Link
                to="tel:+15551234567"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors duration-200"
              >
                Call Now: (555) 123-4567
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;