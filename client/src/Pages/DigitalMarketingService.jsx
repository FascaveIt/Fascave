import React, { useState } from 'react';
import { 
  TrendingUp,
  BarChart,
  Mail,
  Share2,
  Search,
  Users,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Target,
  Code,
  Rocket
} from 'lucide-react';
import "../App.css"
import ContactFrom from '../Componets/contact/ContactFrom';
function DigitalMarketingService() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent,black)] bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Digital Marketing Solutions
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Drive growth and engagement with data-driven digital marketing strategies
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-green-50 transition-colors" onClick={()=>setIsVisible(true)}>
              Boost Your Digital Presence
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Marketing Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Marketing Services</h2>
          <p className="text-gray-600">Comprehensive digital marketing solutions for your business</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Search className="w-12 h-12 text-green-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">SEO Services</h3>
            <p className="text-gray-600">
              Improve your search engine rankings and visibility
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Share2 className="w-12 h-12 text-green-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Social Media Marketing</h3>
            <p className="text-gray-600">
              Engage your audience across social platforms
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Mail className="w-12 h-12 text-green-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Email Marketing</h3>
            <p className="text-gray-600">
              Convert leads with targeted email campaigns
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">Marketing Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <TrendingUp className="w-12 h-12 text-green-600" />,
              title: "Performance Marketing",
              description: "Data-driven marketing campaigns",
              features: ["ROI Tracking", "A/B Testing", "Conversion Optimization", "Analytics"]
            },
            {
              icon: <Users className="w-12 h-12 text-green-600" />,
              title: "Content Marketing",
              description: "Engaging content strategy",
              features: ["Content Creation", "Blog Management", "Social Media", "Video Marketing"]
            },
            {
              icon: <BarChart className="w-12 h-12 text-green-600" />,
              title: "Analytics & Reporting",
              description: "Comprehensive performance tracking",
              features: ["Custom Reports", "Real-time Analytics", "KPI Tracking", "Insights"]
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="p-8">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marketing Process */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Marketing Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MessageSquare className="w-10 h-10 text-green-600" />,
                title: "1. Research",
                description: "Market analysis and competitor research"
              },
              {
                icon: <Target className="w-10 h-10 text-green-600" />,
                title: "2. Strategy",
                description: "Develop targeted marketing strategies"
              },
              {
                icon: <Code className="w-10 h-10 text-green-600" />,
                title: "3. Implementation",
                description: "Execute marketing campaigns"
              },
              {
                icon: <Rocket className="w-10 h-10 text-green-600" />,
                title: "4. Optimization",
                description: "Monitor and improve performance"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm relative">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-green-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent,black)] bg-black opacity-10"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Let's create a digital marketing strategy that drives results
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-green-50 transition-colors" onClick={()=>setIsVisible(true)}>
              Get Free Strategy Session
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
      <ContactFrom visible={isVisible} onClose={()=>setIsVisible(false)}/>
    </div>
  );
}



export default DigitalMarketingService