import { useState } from 'react';
import { Heart, Phone, Menu, X, Stethoscope, Award, Activity } from 'lucide-react';
import Appointment from './services/appointment';
import Contact from './services/contacts';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">MediCos💊</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
              <a href="#doctors" className="text-gray-600 hover:text-blue-600">Our Doctors</a>
              <a href="#appointment" className="text-gray-600 hover:text-blue-600">Appointments</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
              <a href="#emergency" className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
                Emergency: (555) 911-0000
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Home</a>
                <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Services</a>
                <a href="#doctors" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Our Doctors</a>
                <a href="#appointment" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Appointments</a>
                <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact</a>
                <a href="#emergency" className="block px-3 py-2 text-red-500 font-semibold">
                  Emergency: (555) 911-0000
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-[600px] pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-blue-900/75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Health Is Our Priority</h1>
            <p className="text-lg md:text-xl mb-8">Experience compassionate care with our team of expert medical professionals. We're here to help you live your healthiest life.</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href="#appointment" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-200 text-center">
                Book Appointment
              </a>
              <a href="#services" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition duration-200 text-center">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-8 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl font-bold">15+</p>
              <p className="mt-2">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold">50+</p>
              <p className="mt-2">Specialist Doctors</p>
            </div>
            <div>
              <p className="text-4xl font-bold">15,000+</p>
              <p className="mt-2">Happy Patients</p>
            </div>
            <div>
              <p className="text-4xl font-bold">24/7</p>
              <p className="mt-2">Emergency Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Medical Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide comprehensive healthcare services with state-of-the-art facilities and experienced medical professionals.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition duration-200">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cardiology</h3>
              <p className="text-gray-600">Expert heart care with advanced diagnostic and treatment options</p>
            </div>
            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition duration-200">
              <Activity className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">General Medicine</h3>
              <p className="text-gray-600">Comprehensive medical care for all your health needs</p>
            </div>
            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition duration-200">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Specialized Care</h3>
              <p className="text-gray-600">Advanced treatments from experienced specialists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Doctors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our team of experienced medical professionals is dedicated to providing you with the best care possible.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80" 
                alt="Doctor"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dr. Sarah Johnson</h3>
                <p className="text-blue-600 mb-4">Chief of Cardiology</p>
                <p className="text-gray-600">Specializing in cardiovascular health with over 15 years of experience.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80" 
                alt="Doctor"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dr. Michael Chen</h3>
                <p className="text-blue-600 mb-4">General Practitioner</p>
                <p className="text-gray-600">Dedicated to providing comprehensive family healthcare services.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80" 
                alt="Doctor"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dr. Emily Martinez</h3>
                <p className="text-blue-600 mb-4">Pediatric Specialist</p>
                <p className="text-gray-600">Expert in children's health and developmental care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Appointment Section */}
            <div id="appointment">
              <Appointment />
            </div>
            
            {/* Contact Section */}
            <div id="contact">
              <Contact />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Upper Footer */}
          <div className="grid md:grid-cols-4 gap-8 py-12">
            <div>
              <div className="flex items-center mb-4">
                <Stethoscope className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold">MediCare</span>
              </div>
              <p className="text-blue-100">Providing quality healthcare services with compassion and expertise.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-blue-100 hover:text-white">Home</a></li>
                <li><a href="#services" className="text-blue-100 hover:text-white">Services</a></li>
                <li><a href="#doctors" className="text-blue-100 hover:text-white">Our Doctors</a></li>
                <li><a href="#appointment" className="text-blue-100 hover:text-white">Book Appointment</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hours</h4>
              <div className="space-y-2 text-blue-100">
                <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p>Saturday: 9:00 AM - 5:00 PM</p>
                <p>Sunday: Emergency Only</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-blue-100">
                <p className="flex items-center"><Phone size={20} className="mr-2" /> (555) 123-4567</p>
                <p>123 Medical Center Drive</p>
                <p>Healthcare City, HC 12345</p>
                <p id="emergency" className="mt-4 text-xl font-bold text-red-400">Emergency: (555) 911-0000</p>
              </div>
            </div>
          </div>
          
          {/* Lower Footer */}
          <div className="border-t border-blue-800 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; 2024 MediCare. All rights reserved.</p>
              <div className="mt-4 md:mt-0">
                <a href="/privacy" className="text-blue-100 hover:text-white mr-4">Privacy Policy</a>
                <a href="/terms" className="text-blue-100 hover:text-white">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;