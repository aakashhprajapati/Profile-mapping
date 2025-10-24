
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ResourcesPage from './pages/ResourcesPage';

const AboutPage = () => (
  <div className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
    <p className="text-gray-600 max-w-2xl mx-auto">Learn more about our mission and team.</p>
  </div>
);

const ContactPage = () => (
  <div className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
    <p className="text-gray-600 max-w-2xl mx-auto">Get in touch with our team.</p>
  </div>
);

const WebDevelopmentPage = () => (
  <div className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Web Development Bootcamp</h1>
    <p className="text-gray-600 max-w-2xl mx-auto">Become a full-stack web developer.</p>
  </div>
);

const DataSciencePage = () => (
  <div className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Data Science Bootcamp</h1>
    <p className="text-gray-600 max-w-2xl mx-auto">Master data analysis and machine learning.</p>
  </div>
);

const UXUIDesignPage = () => (
  <div className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">UX/UI Design Bootcamp</h1>
    <p className="text-gray-600 max-w-2xl mx-auto">Learn user-centered design principles.</p>
  </div>
);

const DigitalMarketingPage = () => (
  <div className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Digital Marketing Bootcamp</h1>
    <p className="text-gray-600 max-w-2xl mx-auto">Master digital marketing strategies.</p>
  </div>
);

const SEOTipsPage = () => (
  <div className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">10 SEO Tips for Beginners</h1>
    <p className="text-gray-600 max-w-2xl mx-auto">Learn the fundamentals of search engine optimization.</p>
  </div>
);

const ContentMarketingPage = () => (
  <div className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Content Marketing Strategies That Work</h1>
    <p className="text-gray-600 max-w-2xl mx-auto">Discover effective content marketing approaches.</p>
  </div>
);

const PersonalBrandingPage = () => (
  <div className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Building Your Personal Brand Online</h1>
    <p className="text-gray-600 max-w-2xl mx-auto">Establish a strong personal brand in the digital space.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
         <Route path="/" element={<HomePage />} />
            <Route path="/blog/how-to-attract-the-first-1000-visitors-to-your-website" element={<BlogPage />} />
         <Route path="/resources" element={<ResourcesPage />} />
            
            {/* New routes for navigation */}
         <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
         <Route path="/web-development" element={<WebDevelopmentPage />} />
            <Route path="/data-science" element={<DataSciencePage />} />
            <Route path="/ux-ui-design" element={<UXUIDesignPage />} />
         <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/blog/seo-tips-for-beginners" element={<SEOTipsPage />} />
         <Route path="/blog/content-marketing-strategies" element={<ContentMarketingPage />} />
            <Route path="/blog/building-personal-brand-online" element={<PersonalBrandingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;