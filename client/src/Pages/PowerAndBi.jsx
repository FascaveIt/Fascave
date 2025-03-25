import React, { useState } from 'react';
import { 
  BarChart3,
  PieChart,
  LineChart,
  TrendingUp,
  Database,
  Brain,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Gauge,
  Zap,
  Rocket,
  Shield,
  MessageSquare,
  Table,
  GitGraph,
  Timer,
  Filter
} from 'lucide-react';
import "../App.css"
import ContactFrom from '../Componets/contact/ContactFrom';
function PowerAndBi() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent,black)] bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Power & BI Visualization Services
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Transform complex data into clear, actionable insights with our expert Power BI solutions
            </p>
            <button 
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors"
              onClick={() => setIsVisible(true)}
            >
              Start Your Data Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Power BI Features We Implement</h2>
          <p className="text-gray-600">Comprehensive data visualization solutions for your business</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            'DAX Calculations',
            'M Query Language',
            'Custom Visuals',
            'Row-Level Security',
            'Incremental Refresh',
            'Direct Query',
            'Composite Models',
            'AI Integration'
          ].map((tech) => (
            <div key={tech} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="font-semibold text-gray-800">{tech}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">Our Power BI Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
              title: "Interactive Dashboards",
              description: "Dynamic dashboards with drill-through capabilities and real-time updates",
              features: ["Cross-report Drilling", "Custom Tooltips", "Bookmarks", "Dynamic Filtering"]
            },
            {
              icon: <Database className="w-12 h-12 text-purple-600" />,
              title: "Data Modeling",
              description: "Optimized data models for fast and efficient reporting",
              features: ["Star Schema Design", "Many-to-Many Relationships", "Role-Playing Dimensions", "Calculated Tables"]
            },
            {
              icon: <Table className="w-12 h-12 text-purple-600" />,
              title: "DAX Development",
              description: "Complex calculations and measures using DAX",
              features: ["Time Intelligence", "Advanced Aggregations", "Window Functions", "Iterator Functions"]
            },
            {
              icon: <GitGraph className="w-12 h-12 text-purple-600" />,
              title: "Data Transformation",
              description: "Powerful ETL processes using Power Query",
              features: ["M Language Scripts", "Custom Functions", "Data Cleansing", "Source Combining"]
            },
            {
              icon: <Timer className="w-12 h-12 text-purple-600" />,
              title: "Performance Optimization",
              description: "Maximize report speed and efficiency",
              features: ["Query Optimization", "Composite Models", "Aggregations", "Incremental Refresh"]
            },
            {
              icon: <Filter className="w-12 h-12 text-purple-600" />,
              title: "Security Implementation",
              description: "Robust data security and access control",
              features: ["Row-Level Security", "Object-Level Security", "Dynamic Security", "Encryption"]
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

      {/* Implementation Process */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Power BI Implementation Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Lightbulb className="w-10 h-10 text-purple-600" />,
                title: "1. Requirements Analysis",
                description: "Defining KPIs, metrics, and visualization needs"
              },
              {
                icon: <Database className="w-10 h-10 text-purple-600" />,
                title: "2. Data Architecture",
                description: "Designing optimal data models and relationships"
              },
              {
                icon: <BarChart3 className="w-10 h-10 text-purple-600" />,
                title: "3. Development",
                description: "Building reports with DAX and custom visuals"
              },
              {
                icon: <Rocket className="w-10 h-10 text-purple-600" />,
                title: "4. Deployment",
                description: "Publishing, sharing, and maintaining reports"
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
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent,black)] bg-black opacity-10"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's create powerful Power BI solutions that transform your data into actionable business insights
            </p>
            <button 
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors"
              onClick={() => setIsVisible(true)}
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>

      <ContactFrom visible={isVisible} onClose={()=>setIsVisible(false)} />
    </div>
  );
}

export default PowerAndBi