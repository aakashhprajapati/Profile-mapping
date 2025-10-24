
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Learn. Grow. Succeed.</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our immersive bootcamps and transform your career in tech with hands-on learning and expert mentorship.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Explore Bootcamps
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
              Talk to Advisor
            </button>
          </div>
        </div>
      </section>

      {/* Featured Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover insights, tips, and strategies from industry experts to advance your tech career.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-64">
                <div className="h-48 md:h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Featured Image</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  How to attract the first 1000 visitors to your website
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn proven strategies to drive traffic to your website and build your online presence from scratch.
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span>August 15, 2023</span>
                  <span className="mx-2">•</span>
                  <span>8 min read</span>
                </div>
                <Link 
                  to="/blog/how-to-attract-the-first-1000-visitors-to-your-website"
                  className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-white-700 transition-colors"
                >
                  Read Article
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link 
              to="/resources"
              className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated with Our Latest Insights</h2>
          <p className="mb-6 max-w-2xl mx-auto">Subscribe to our newsletter and get the latest tips and strategies delivered directly to your inbox.</p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-red-800 px-6 py-3 rounded-r-lg font-medium hover:bg-brown-900 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;