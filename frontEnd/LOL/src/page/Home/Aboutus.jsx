import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const About = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      bio: "With over 20 years in the plumbing industry, John founded the company with a vision for quality service.",
      imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      bio: "Sarah ensures every project runs smoothly and exceeds customer expectations.",
      imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Mike Rodriguez",
      role: "Lead Technician",
      bio: "Mike brings 15 years of hands-on experience solving complex plumbing challenges.",
      imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const milestones = [
    { year: "2010", event: "Company Founded with 3 employees" },
    { year: "2013", event: "Expanded to commercial plumbing services" },
    { year: "2016", event: "Opened second location" },
    { year: "2019", event: "Reached 1000+ satisfied customers" },
    { year: "2022", event: "Launched 24/7 emergency services" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-700 to-indigo-700 py-20 px-4 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Company</h1>
            <p className="text-xl md:text-2xl mb-8">
              Trusted plumbing services with a commitment to quality and customer satisfaction
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-100 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Building Trust Since 2010
              </h3>
              <p className="text-gray-600 mb-6">
                Founded in a small workshop with just three employees, we've grown into one of the region's most trusted plumbing service providers. What started as a passion for quality craftsmanship has become a full-service plumbing company serving both residential and commercial clients.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey has been guided by core principles: integrity, expertise, and putting customers first. We believe every home and business deserves reliable plumbing systems installed and maintained by professionals who care.
              </p>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                <p className="text-purple-800 font-medium">
                  "We don't just fix pipes - we build relationships that last. Your satisfaction is our greatest measure of success."
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our team at work" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                Our Core Values
              </h2>
              <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Integrity",
                  description: "We do what's right, even when no one is watching. Honest pricing and transparent service.",
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                },
                {
                  title: "Expertise",
                  description: "Our technicians receive continuous training to stay ahead of industry standards and technology.",
                  icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                },
                {
                  title: "Community",
                  description: "We're proud to support local businesses and give back to the neighborhoods we serve.",
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                }
              ].map((value, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl text-center">
                  <div className="flex justify-center mb-6">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-purple-100 text-purple-600">
                      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={value.icon} />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to solving your plumbing challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={member.imgSrc} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones */}
        <section className="py-16 bg-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                Our Journey
              </h2>
              <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 h-full w-0.5 bg-purple-200 transform -translate-x-1/2"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 p-6 bg-white rounded-lg shadow-md ${index % 2 === 0 ? 'ml-6' : 'mr-6'}`}>
                      <div className="flex items-center mb-2">
                        <div className="absolute -left-6 h-12 w-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold shadow-lg">
                          {milestone.year}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 ml-6">{milestone.event}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Quality Plumbing Service?
            </h2>
            <p className="text-xl mb-8">
              Contact us today for reliable solutions you can trust
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-100 transition-colors duration-200"
              >
                Get in Touch
              </Link>
              <Link
                to="/services"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;