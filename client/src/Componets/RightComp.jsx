import React from "react";
import Discovery from "../Asset/ServiceHero/Discovery.svg";
import Planning from "../Asset/ServiceHero/Planning.svg";
import Designing from "../Asset/ServiceHero/Designing.svg";
import Development from "../Asset/ServiceHero/Development.svg";
import launchanddeployment from "../Asset/ServiceHero/launchanddeployment.svg";
import Quality from "../Asset/ServiceHero/Quality.svg";
import PostLaunch from "../Asset/ServiceHero/PostLaunch.svg";
function RightComp() {
  return (
    <div>
      {" "}
      <div className="container mx-auto p-6">
        {/* 1 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Discovery & Consultation Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              1. Discovery & Consultation
            </h2>
            <p className="text-gray-600 mt-2">
              The process begins with understanding your business, goals, target
              audience, and requirements. During this phase, we:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>
                Conduct in-depth discussions to gather your vision and
                objectives.
              </li>
              <li>Analyze your competitors and industry trends.</li>
              <li>
                Identify key features and functionalities needed for your
                website.
              </li>
            </ul>
          </div>
          <div>
            <img
              src={Discovery}
              alt="Discovery Consultation"
              className="w-full"
            />
          </div>
        </div>

        {/* 2 */}
        <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
          <div>
            <img src={Planning} alt="Planning Strategy" className="w-full" />
          </div>

          {/* Planning & Strategy Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              2. Planning and Strategy
            </h2>
            <p className="text-gray-600 mt-2">
              Once we have a clear understanding of your requirements, we move
              on to creating a strategic plan. This includes:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>
                Developing a sitemap to outline the website’s structure and
                navigation.
              </li>
              <li>
                Creating wireframes to visualize the layout and functionality.
              </li>
              <li>
                Planning content strategy for maximum engagement and SEO
                optimization.
              </li>
            </ul>
          </div>
        </div>

        {/* 3 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/*Design and User Experience (UX) */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              3. Design and User Experience (UX)
            </h2>
            <p className="text-gray-600 mt-2">
              Our design team works on creating a visually stunning and
              user-friendly interface. This phase involves:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>Crafting custom designs that reflect your brand identity.</li>
              <li>
                Ensuring responsive design for seamless performance across
                devices
              </li>
              <li>
                Focusing on user experience to enhance navigation and
                engagement.
              </li>
            </ul>
          </div>
          <div>
            <img
              src={Designing}
              alt="Discovery Consultation"
              className="w-full"
            />
          </div>
        </div>
        {/* 4 */}
        <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
          <div>
            <img src={Development} alt="Planning Strategy" className="w-full" />
          </div>

          {/* Planning & Strategy Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">4. Development</h2>
            <p className="text-gray-600 mt-2">
              Once the design is finalized, our development team brings it to
              life. This includes:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>
                Coding the website using modern technologies such as HTML, CSS,
                JavaScript, and more.
              </li>
              <li>
                Implementing content management systems (CMS) like WordPress, if
                required.
              </li>
              <li>
                Integrating advanced functionalities such as e-commerce, payment
                gateways, and APIs.
              </li>
              <li>
                Ensuring cross-browser compatibility and responsive design.
              </li>
            </ul>
          </div>
        </div>

        {/* 5 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Quality Assurance and Testing */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              5. Quality Assurance and Testing
            </h2>
            <p className="text-gray-600 mt-2">
              Before launching, we rigorously test the website to ensure it
              meets the highest standards. Our QA process involves:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>Testing for functionality, performance, and speed.</li>
              <li>Ensuring the website is mobile-friendly and responsive.</li>
              <li>Checking for security vulnerabilities and fixing bugs.</li>
              <li>
                Optimizing for search engines and adhering to accessibility
                standards.
              </li>
            </ul>
          </div>
          <div>
            <img
              src={Quality}
              alt="Discovery Consultation"
              className="w-full"
            />
          </div>
        </div>
        {/* 6 */}
        <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
          <div>
            <img
              src={launchanddeployment}
              alt="Planning Strategy"
              className="w-full"
            />
          </div>

          {/* Launch and Deployment */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              6. Launch and Deployment
            </h2>
            <p className="text-gray-600 mt-2">
              Before launching, we rigorously test the website to ensure it
              meets the highest standards. Our QA process involves:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>Configuring the hosting environment and domain setup.</li>
              <li>Ensuring smooth migration and minimal downtime. </li>
              <li>
                Providing initial training on how to manage the website, if
                necessary.
              </li>
            </ul>
          </div>
        </div>

        {/* 7 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Post-Launch Support and Maintenance */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              7. Post-Launch Support and Maintenance
            </h2>
            <p className="text-gray-600 mt-2">
              Our relationship doesn’t end with the launch. We offer ongoing
              support and maintenance services to ensure your website continues
              to perform optimally. This includes:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>Regular updates and security patches.</li>
              <li>Performance monitoring and analytics</li>
              <li>
                Adding new features and functionalities as your business
                evolves.
              </li>
            </ul>
          </div>
          <div>
            <img
              src={PostLaunch}
              alt="Discovery Consultation"
              className="w-full"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-6">
          {/* Key Features Section */}
          <section className="mb-8">
            <div className="flex gap-5">
              <h2 className="bg-blue-400 text-white text-3xl font-bold px-9 py-2 inline-block rounded-3xl">
                Key Features
              </h2>
              <h3 className="text-3xl font-semibold mt-2 text-gray-500">
                Of Custom Website Development
              </h3>
            </div>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li className="text-2xl text-gray-500">
                <strong className="text-gray-700">Responsive Design:</strong>{" "}
                Optimized for desktops, tablets, and mobile devices.
              </li>
              <li className="text-2xl text-gray-500">
                <strong className="text-gray-700">SEO Optimization:</strong>{" "}
                Built with best SEO practices.
              </li>
              <li className="text-2xl text-gray-500">
                <strong className="text-gray-700">Fast Loading Speeds:</strong>{" "}
                Lightweight and optimized for speed.
              </li>
              <li className="text-2xl text-gray-500">
                <strong className="text-gray-700">Secure Architecture:</strong>{" "}
                Protection against vulnerabilities.
              </li>
              <li className="text-2xl text-gray-500">
                <strong className="text-gray-700">Custom Integrations:</strong>{" "}
                Seamless third-party service integration.
              </li>
            </ul>
          </section>

          {/* Benefits Section */}

          {/* Industries Section */}
          <section className="mb-8">
            <div className="flex gap-4">
              <h2 className="bg-orange-400 text-white text-3xl font-bold px-9 py-2 inline-block rounded-3xl">
                Industries
              </h2>
              <h3 className="text-3xl text-gray-600 font-semibold mt-2">
                We Serve At Fascave IT Solutions
              </h3>
            </div>

            <ul className="list-disc list-inside mt-3 space-y-2">
              <li className="text-2xl text-gray-500">
                <strong className="text-gray-700">Retail & E-commerce:</strong>{" "}
                Online shopping platforms.
              </li>
              <li className="text-2xl text-gray-500">
                <strong className="text-gray-700">Healthcare:</strong> Patient
                portals, medical record management.
              </li>
              <li className="text-2xl text-gray-500">
                <strong className="text-gray-700">Finance:</strong> Secure
                transactions and reporting software.
              </li>
              <li className="text-2xl text-gray-500">
                <strong className="text-gray-700">Real Estate:</strong> Property
                management software.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RightComp;
