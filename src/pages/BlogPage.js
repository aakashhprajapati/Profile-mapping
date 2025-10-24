
import { Link } from 'react-router-dom';

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
      
        <div className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-blue-600">Home</Link> / <Link to="/resources" className="hover:text-blue-600">Resources</Link> / <span className="text-gray-800">How to attract the first 1000 visitors to your website</span>
        </div>


        <article>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to attract the first 1000 visitors to your website
          </h1>
          
          <div className="flex items-center text-gray-600 mb-8">
            <div className="flex items-center mr-6">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <span>Author Name</span>
            </div>
            <span>August 15, 2023</span>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Featured Image</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Attracting the first 1000 visitors to your website can feel like an impossible task, especially when you're just starting out. However, with the right strategies and consistent effort, it's an achievable milestone that can set the foundation for your online presence.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Optimize for Search Engines (SEO)</h2>
            <p className="text-gray-700 mb-6">
              Search Engine Optimization is crucial for organic growth. Start by researching relevant keywords for your niche and incorporate them naturally into your content. Ensure your website has a clean structure, fast loading times, and is mobile-friendly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Leverage Social Media Platforms</h2>
            <p className="text-gray-700 mb-6">
              Identify which social platforms your target audience uses most and create valuable content for those channels. Don't just promote your website—engage with communities, answer questions, and build relationships.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Content Marketing</h2>
            <p className="text-gray-700 mb-6">
              Create high-quality, useful content that addresses your audience's pain points. Blog posts, how-to guides, and tutorials can attract visitors who are searching for solutions you provide.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Guest Posting</h2>
            <p className="text-gray-700 mb-6">
              Reach out to established blogs in your industry and offer to write guest posts. This exposes your brand to a new audience and drives referral traffic back to your website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Email Marketing</h2>
            <p className="text-gray-700 mb-6">
              Build an email list from day one. Offer a lead magnet like a free ebook, checklist, or discount in exchange for email addresses. Then nurture these subscribers with valuable content.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Key Takeaway</h3>
              <p className="text-gray-700">
                Consistency is more important than perfection when building your initial audience. Focus on providing value, and the visitors will follow.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
            <p className="text-gray-700 mb-6">
              Attracting your first 1000 website visitors requires a multi-channel approach and patience. By implementing these strategies consistently, you'll not only reach that initial milestone but also build a foundation for sustainable growth.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Digital Marketing</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">SEO</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Content Strategy</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Website Traffic</span>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-start">
              <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h3 className="font-bold text-lg">About the Author</h3>
                <p className="text-gray-700 mt-2">
                  Author Name is a digital marketing expert with over 5 years of experience helping businesses grow their online presence. They specialize in SEO and content strategy for early-stage startups.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Related Article 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">10 SEO Tips for Beginners</h3>
                <p className="text-gray-600 text-sm mb-4">Learn the fundamentals of search engine optimization to improve your website's visibility.</p>
                <Link to="/blog/seo-tips-for-beginners" className="text-blue-600 font-medium hover:text-blue-800">Read More</Link>
              </div>
            </div>
            
            {/* Related Article 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Content Marketing Strategies That Work</h3>
                <p className="text-gray-600 text-sm mb-4">Discover how to create content that resonates with your audience and drives engagement.</p>
                <Link to="/blog/content-marketing-strategies" className="text-blue-600 font-medium hover:text-blue-800">Read More</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;