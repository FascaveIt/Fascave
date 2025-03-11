import React from 'react';
import { 
  Smartphone,
  Tablet,
  Code2,
  Layers,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Paintbrush,
  Code,
  Rocket
} from 'lucide-react';

function AppDevService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent,black)] bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Mobile App Development
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Transform your ideas into powerful mobile applications that users love
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors">
              Start Your App Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* App Types Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">App Development Solutions</h2>
          <p className="text-gray-600">Comprehensive mobile app development services for every platform</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Smartphone className="w-12 h-12 text-purple-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Native iOS Apps</h3>
            <p className="text-gray-600">
              High-performance iOS applications built with Swift and SwiftUI
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Tablet className="w-12 h-12 text-purple-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Native Android Apps</h3>
            <p className="text-gray-600">
              Robust Android applications using Kotlin and Jetpack Compose
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Code2 className="w-12 h-12 text-purple-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Cross-Platform Apps</h3>
            <p className="text-gray-600">
              Cost-effective solutions using React Native and Flutter
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">App Development Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Layers className="w-12 h-12 text-purple-600" />,
              title: "Custom UI/UX Design",
              description: "Intuitive and engaging user interfaces",
              features: ["User-Centered Design", "Custom Animations", "Seamless Navigation", "Brand Integration"]
            },
            {
              icon: <Shield className="w-12 h-12 text-purple-600" />,
              title: "Security Features",
              description: "Robust security measures for your app",
              features: ["Data Encryption", "Secure Authentication", "Privacy Controls", "Regular Updates"]
            },
            {
              icon: <Zap className="w-12 h-12 text-purple-600" />,
              title: "Performance Optimization",
              description: "Fast and efficient mobile applications",
              features: ["Quick Load Times", "Offline Support", "Battery Efficiency", "Smooth Animations"]
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

      {/* Development Process */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">App Development Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MessageSquare className="w-10 h-10 text-purple-600" />,
                title: "1. Strategy",
                description: "Define your app's goals, target audience, and features"
              },
              {
                icon: <Paintbrush className="w-10 h-10 text-purple-600" />,
                title: "2. Design",
                description: "Create wireframes and visual designs for your app"
              },
              {
                icon: <Code className="w-10 h-10 text-purple-600" />,
                title: "3. Development",
                description: "Build your app with clean, efficient code"
              },
              {
                icon: <Rocket className="w-10 h-10 text-purple-600" />,
                title: "4. Launch",
                description: "Testing, deployment, and app store submission"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm relative">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-purple-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent,black)] bg-black opacity-10"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's turn your app idea into reality with our expert development team
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



export default AppDevService