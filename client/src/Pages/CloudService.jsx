import React from 'react';
import { 
  Cloud,
  Database,
  Shield,
  Server,
  Network,
  Lock,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Settings,
  Code,
  Rocket
} from 'lucide-react';

function CloudService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent,black)] bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cloud Services & Solutions
            </h1>
            <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
              Scalable, secure, and reliable cloud infrastructure for your business
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 rounded-full font-semibold hover:bg-cyan-50 transition-colors">
              Explore Cloud Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Cloud Solutions Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Cloud Services</h2>
          <p className="text-gray-600">Comprehensive cloud solutions for modern businesses</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Server className="w-12 h-12 text-cyan-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Cloud Infrastructure</h3>
            <p className="text-gray-600">
              Scalable and reliable infrastructure solutions
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Database className="w-12 h-12 text-cyan-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Cloud Storage</h3>
            <p className="text-gray-600">
              Secure and accessible data storage solutions
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Network className="w-12 h-12 text-cyan-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Cloud Networking</h3>
            <p className="text-gray-600">
              Advanced networking and connectivity solutions
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">Cloud Service Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="w-12 h-12 text-cyan-600" />,
              title: "Security & Compliance",
              description: "Enterprise-grade security measures",
              features: ["Data Encryption", "Access Controls", "Compliance Management", "Security Monitoring"]
            },
            {
              icon: <Server className="w-12 h-12 text-cyan-600" />,
              title: "Infrastructure Management",
              description: "Complete infrastructure solutions",
              features: ["Auto-scaling", "Load Balancing", "Disaster Recovery", "24/7 Monitoring"]
            },
            {
              icon: <Lock className="w-12 h-12 text-cyan-600" />,
              title: "Data Protection",
              description: "Comprehensive data security",
              features: ["Backup Solutions", "Data Recovery", "Access Management", "Encryption"]
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

      {/* Implementation Process */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Cloud Implementation Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MessageSquare className="w-10 h-10 text-cyan-600" />,
                title: "1. Assessment",
                description: "Evaluate your current infrastructure and needs"
              },
              {
                icon: <Settings className="w-10 h-10 text-cyan-600" />,
                title: "2. Planning",
                description: "Design your cloud architecture and strategy"
              },
              {
                icon: <Code className="w-10 h-10 text-cyan-600" />,
                title: "3. Migration",
                description: "Seamless transition to cloud infrastructure"
              },
              {
                icon: <Rocket className="w-10 h-10 text-cyan-600" />,
                title: "4. Optimization",
                description: "Continuous monitoring and improvement"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm relative">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-cyan-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent,black)] bg-black opacity-10"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's transform your business with our cloud solutions
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 rounded-full font-semibold hover:bg-cyan-50 transition-colors">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



export default CloudService