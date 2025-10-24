
import { Link } from 'react-router-dom';

const ResourcesPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to attract the first 1000 visitors to your website",
      excerpt: "Learn proven strategies to drive traffic to your website and build your online presence from scratch.",
      date: "August 15, 2023",
      readTime: "8 min read",
      category: "Digital Marketing",
      slug: "how-to-attract-the-first-1000-visitors-to-your-website"
    },
    {
      id: 2,
      title: "10 SEO Tips for Beginners",
      excerpt: "Learn the fundamentals of search engine optimization to improve your website's visibility.",
      date: "August 10, 2023",
      readTime: "6 min read",
      category: "SEO",
      slug: "seo-tips-for-beginners"
    },
    {
      id: 3,
      title: "Content Marketing Strategies That Work",
      excerpt: "Discover how to create content that resonates with your audience and drives engagement.",
      date: "August 5, 2023",
      readTime: "10 min read",
      category: "Content Strategy",
      slug: "content-marketing-strategies"
    },
    {
      id: 4,
      title: "Building Your Personal Brand Online",
      excerpt: "Essential tips for establishing a strong personal brand that stands out in the digital space.",
      date: "July 28, 2023",
      readTime: "7 min read",
      category: "Personal Branding",
      slug: "building-personal-brand-online"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources & Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover insights, tips, and strategies from industry experts to advance your tech career and grow your business.
          </p>
        </div>

     
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-96">
              <div className="h-64 md:h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Featured Image</span>
              </div>
            </div>
            <div className="p-8">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Featured
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How to attract the first 1000 visitors to your website
              </h2>
              <p className="text-gray-600 mb-6">
                Learn proven strategies to drive traffic to your website and build your online presence from scratch. Perfect for startups and small businesses.
              </p>
              <div className="flex items-center text-gray-500 text-sm mb-6">
                <span>August 15, 2023</span>
                <span className="mx-2">•</span>
                <span>8 min read</span>
                <span className="mx-2">•</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">Digital Marketing</span>
              </div>
              <Link 
                to="/blog/how-to-attract-the-first-1000-visitors-to-your-website"
                className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Read Full Article
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-blue-600 font-medium hover:text-blue-800"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;