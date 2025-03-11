import React, { useState } from 'react';
import { 
  Globe,
  Code,
  Laptop,
  Search,
  Gauge,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Layout,
  Paintbrush,
  Wrench,
  Rocket,
  Shield,
  MessageSquare
} from 'lucide-react';
import ContactFrom from '../Componets/contact/ContactFrom';
import "../App.css"

function WebDevService() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent,black)] bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Web Development Services
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Creating powerful, scalable, and beautiful web experiences that drive business growth
            </p>


              
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors" onClick={()=>setIsVisible(true)}
            >
              Schedule Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Technologies We Master</h2>
          <p className="text-gray-600">Built with cutting-edge technologies for optimal performance</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {['React', 'Next.js', 'Vue.js', 'Node.js', 'TypeScript', 'TailwindCSS', 'MongoDB', 'PostgreSQL'].map((tech) => (
            <div key={tech} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="font-semibold text-gray-800">{tech}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">Our Web Development Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Layout className="w-12 h-12 text-blue-600" />,
              title: "Custom Website Development",
              description: "Tailored websites that perfectly match your brand and business needs",
              features: ["Responsive Design", "Custom Functionality", "Modern UI/UX", "Performance Optimized"]
            },
            {
              icon: <Code className="w-12 h-12 text-blue-600" />,
              title: "Web Application Development",
              description: "Complex web applications with robust functionality",
              features: ["Scalable Architecture", "Real-time Features", "API Integration", "Cloud Deployment"]
            },
            {
              icon: <Paintbrush className="w-12 h-12 text-blue-600" />,
              title: "Frontend Development",
              description: "Beautiful and interactive user interfaces",
              features: ["Modern Frameworks", "Responsive Design", "Animation", "Cross-browser Support"]
            },
            {
              icon: <Wrench className="w-12 h-12 text-blue-600" />,
              title: "Backend Development",
              description: "Robust server-side solutions and APIs",
              features: ["API Development", "Database Design", "Authentication", "Security"]
            },
            {
              icon: <Gauge className="w-12 h-12 text-blue-600" />,
              title: "Performance Optimization",
              description: "Speed up your existing web applications",
              features: ["Load Time Optimization", "Code Splitting", "Caching", "Core Web Vitals"]
            },
            {
              icon: <Search className="w-12 h-12 text-blue-600" />,
              title: "SEO Implementation",
              description: "Optimize your website for search engines",
              features: ["Technical SEO", "Meta Optimization", "Schema Markup", "Performance Tuning"]
            }
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="p-8">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Development Process */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Development Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MessageSquare className="w-10 h-10 text-blue-600" />,
                title: "1. Discovery",
                description: "Understanding your goals, requirements, and target audience"
              },
              {
                icon: <Paintbrush className="w-10 h-10 text-blue-600" />,
                title: "2. Design",
                description: "Creating wireframes and visual designs for approval"
              },
              {
                icon: <Code className="w-10 h-10 text-blue-600" />,
                title: "3. Development",
                description: "Building your website with clean, efficient code"
              },
              {
                icon: <Rocket className="w-10 h-10 text-blue-600" />,
                title: "4. Launch",
                description: "Testing, deployment, and ongoing support"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm relative">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent,black)] bg-black opacity-10"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Build Your Web Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's create a website that perfectly represents your brand and drives results
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors" onClick={()=> setIsVisible(true)}>
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>



      <ContactFrom visible={isVisible} onClose={()=>setIsVisible(false)} />
    </div>
  );
}


export default WebDevService;
