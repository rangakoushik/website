import React from 'react';
import { Card } from "../components/ui/card";
import { MessagesSquare, Zap, BarChart3, MessageCircle, Command, Users, Plus, Minus } from 'lucide-react';
import Design from '../images/Design.png';
import Product from '../images/product.png';
import software from '../images/software.png'
import png from '../images/imgoflady.png'
import  st from '../images/1st.png'
import ZYSK from '../images/ZYSK.png'
import thunder from '../images/Thunder.png'
import squ from '../images/squ.png'
import lightbox from '../images/light box.png'
import Niet from '../images/Niet.png'
import feather from '../images/feather.png'
import bank from '../images/bank.png'
import { ChevronDown } from 'lucide-react';


const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
      <div className="border-b border-gray-200 last:border-0">
        <button
          className="w-full py-6 flex justify-between items-center text-left"
          onClick={onClick}
        >
          <span className="text-lg font-medium">{question}</span>
          {isOpen ? (
            <Minus className="w-5 h-5 text-gray-400" />
          ) : (
            <Plus className="w-5 h-5 text-gray-400" />
          )}
        </button>
        {isOpen && (
          <div className="pb-6 text-gray-600">
            {answer}
          </div>
        )}
      </div>
    );
  };

const LandingPage = () => {
    const [openFAQ, setOpenFAQ] = React.useState("Is there a free trial available?");

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan at any time through your account settings."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription at any time through your account settings. There are no long-term contracts or cancellation fees."
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add additional information to your invoices including custom fields and notes."
    },
    {
      question: "How does billing work?",
      answer: "We bill monthly or annually, depending on your preference. All major credit cards are accepted."
    },
    {
      question: "How do I change my account email?",
      answer: "You can change your account email through your account settings. We'll send a verification email to confirm the change."
    }
  ];
  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b">
  <div className="flex items-center space-x-8">
    <img src={ZYSK} alt="ZYSK Logo" className="h-8" />
    <div className="flex space-x-4">
  <span className="text-gray-600">Home</span>
  <span className="text-gray-600 flex items-center">
    Products <ChevronDown className="ml-1 w-4 h-4" />
  </span>
  <span className="text-gray-600 flex items-center">
    Resources <ChevronDown className="ml-1 w-4 h-4" />
  </span>
  <span className="text-gray-600">Pricing</span>
</div>
  </div>
  <div className="w-8 h-8 rounded-full bg-gray-200">
    <img
      className="w-full h-full object-cover rounded-full"
      src={png}
      alt="Professional Woman Working"
    />
  </div>
</nav>
      <div className="flex justify-center py-4">
        <div className="flex items-center space-x-2 px-4 py-1 rounded-full bg-pink-50 border border-pink-200">
          <span className="text-sm text-pink-600">New feature</span>
          <span className="text-sm text-gray-600">Check out the team dashboard →</span>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl font-bold mb-6">Beautiful analytics to grow smarter</h1>
        <p className="text-xl text-gray-600 mb-8">
          Powerful, self-serve product and growth analytics to help you convert, engage,
          and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700">
            Demo
          </button>
          <button className="px-6 py-2 rounded-full bg-red-500 text-white">
            Sign up
          </button>
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-transparent rounded-3xl overflow-hidden flex shadow-xl">
        <div className="w-1/2 bg-black p-8 relative min-h-[600px]">
          <div className="flex items-center space-x-2 mb-12">
            <div className="text-white text-sm flex items-center">
              <span className="mr-2">✤</span>
              testmyskills
            </div>
          </div>
          <div className="text-gray-500 mb-2">Hello, Conor</div>
          <h1 className="text-4xl text-white font-semibold mb-8">Who are you?</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-lg p-4 cursor-pointer">
              <div className="mb-3">
                <svg className="w-6 h-6 text-purple-500" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M4 6h2v2H4V6zm0 5h2v2H4v-2zm0 5h2v2H4v-2zm16-8V6H8.023v2H20zm0 5v-2H8.023v2H20zm0 5v-2H8.023v2H20z"/>
                </svg>
              </div>
              <h3 className="text-black text-lg font-medium">Student</h3>
              <p className="text-gray-600 text-sm">Who is still studying</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4 cursor-pointer">
              <div className="mb-3">
                <svg className="w-6 h-6 text-purple-500" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5-2v2H9V4h6zM4 8h16v11H4V8z"/>
                </svg>
              </div>
              <h3 className="text-white text-lg font-medium">Professional</h3>
              <p className="text-gray-400 text-sm">One who is working</p>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 right-8">
            <div className="h-1 bg-gray-800 rounded mb-4">
              <div className="h-full w-1/4 bg-purple-500 rounded"></div>
            </div>
            <button className="bg-purple-500 text-white px-6 py-2 rounded-lg w-full">
              Continue
            </button>
          </div>
        </div>
        <div className="w-1/2 bg-gray-50 p-8">
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8">
                <img src={png} alt="Bot Avatar" className="rounded-full" />
              </div>
              <div className="bg-white rounded-2xl p-3 shadow-sm">
                <p>Welcome Conor! 👋 It's great to have you here</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8">
                <img src={png} alt="Bot Avatar" className="rounded-full" />
              </div>
              <div className="bg-white rounded-2xl p-3 shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-purple-500 text-white rounded-2xl px-4 py-2">
                I'm a student
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-center text-xl text-gray-600 mb-12">
          Join 4,000+ companies already growing
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          <div className="flex items-center space-x-2">
  <img src={thunder} alt="Thunder" className="w-8 h-8" />
  <span className="text-xl font-semibold">Boltshift</span>
</div>
          <div className="flex items-center space-x-2">
  <img src={lightbox} alt="Thunder" className="w-8 h-8" />
            <span className="text-xl font-semibold">Lightbox</span>
          </div>
          <div className="flex items-center space-x-2">
  <img src={feather} alt="Thunder" className="w-8 h-8" />
            <span className="text-xl font-semibold">FeatherDev</span>
          </div>
          <div className="flex items-center space-x-2">
  <img src={squ} alt="Thunder" className="w-8 h-8" />
            <span className="text-xl font-semibold">Spherule</span>
          </div>
          <div className="flex items-center space-x-2">
  <img src={bank} alt="Thunder" className="w-8 h-8" />
            <span className="text-xl font-semibold">GlobalBank</span>
          </div>
          <div className="flex items-center space-x-2">
  <img src={Niet} alt="Thunder" className="w-8 h-8" />
            <span className="text-xl font-semibold">Nietzsche</span>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-24 px-4">
        <div className="text-center mb-16">
          <p className="text-red-500 font-medium mb-4">Features</p>
          <h2 className="text-4xl font-bold mb-6">Analytics that feels like it's from the future</h2>
          <p className="text-xl text-gray-600">
            Powerful, self-serve product and growth analytics to help you convert, engage,
            and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gray-100 rounded-2xl">
                <MessagesSquare className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Share team inboxes</h3>
            <p className="text-gray-600">
              Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gray-100 rounded-2xl">
                <Zap className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Deliver instant answers</h3>
            <p className="text-gray-600">
              An all-in-one customer service platform that helps you balance everything your customers need to be happy.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gray-100 rounded-2xl">
                <BarChart3 className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Manage your team with reports</h3>
            <p className="text-gray-600">
              Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gray-100 rounded-2xl">
                <MessageCircle className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Connect with customers</h3>
            <p className="text-gray-600">
              Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gray-100 rounded-2xl">
                <Command className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Connect the tools you already use</h3>
            <p className="text-gray-600">
              Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gray-100 rounded-2xl">
                <Users className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Our people make the difference</h3>
            <p className="text-gray-600">
              We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-24 px-4">
        <div className="border border-gray-200 rounded-2xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 text-green-600">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xl font-semibold">Sisyphus</span>
            </div>
          </div>

          <blockquote className="text-center mb-8">
            <p className="text-3xl md:text-4xl font-medium leading-tight mb-8">
              We've been using Untitled to kick start every new project and can't imagine working without it.
            </p>
            <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-gray-200">
  <img className="w-full h-full object-cover rounded-full" src={png} alt="Professional Woman Working" />
</div>

              <div className="text-center">
                <p className="font-semibold text-lg">Candice Wu</p>
                <p className="text-gray-600">Product Manager, Sisyphus</p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
      <div className="max-w-3xl mx-auto py-24 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently asked questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="space-y-0">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === faq.question}
              onClick={() => setOpenFAQ(openFAQ === faq.question ? null : faq.question)}
            />
          ))}
        </div>
      </div>
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <div className="flex justify-center mb-4">
            <div className="flex -space-x-2">
              <img src={png} alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src={png} alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src={png} alt="Team member" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">Still have questions?</h2>
          <p className="text-gray-600 mb-4">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <button className="px-6 py-2 bg-red-500 text-white rounded-full">Get in touch</button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-24 px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="text-red-500 mb-2">Our blog</div>
            <h2 className="text-2xl font-bold">Latest blog posts</h2>
            <p className="text-gray-600">Tools and strategies modern teams need to help their companies grow.</p>
          </div>
          <button className="px-4 py-2 bg-red-500 text-white rounded-full">View all posts</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group">
            <div className="aspect-w-16 aspect-h-9 mb-4">
            <img src={Design} alt="UX review" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="text-red-500 mb-2">Design</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-red-500">UX review presentations</h3>
            <p className="text-gray-600 mb-4">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
            <div className="flex items-center">
              <img src={png} alt="Author" className="w-10 h-10 rounded-full mr-3" />
              <div>
                <div className="font-medium">Olivia Rhye</div>
                <div className="text-gray-600">20 Jan 2024</div>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="aspect-w-16 aspect-h-9 mb-4">
            <img src={Product} alt="Migration" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="text-red-500 mb-2">Product</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-red-500">Migrating to Linear 101</h3>
            <p className="text-gray-600 mb-4">Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.</p>
            <div className="flex items-center">
              <img src={png} alt="Author" className="w-10 h-10 rounded-full mr-3" />
              <div>
                <div className="font-medium">Phoenix Baker</div>
                <div className="text-gray-600">19 Jan 2024</div>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="aspect-w-16 aspect-h-9 mb-4">
            <img src={software} alt="API" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="text-red-500 mb-2">Software Engineering</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-red-500">Building your API stack</h3>
            <p className="text-gray-600 mb-4">The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
            <div className="flex items-center">
              <img src={png} alt="Author" className="w-10 h-10 rounded-full mr-3" />
              <div>
                <div className="font-medium">Lana Steiner</div>
                <div className="text-gray-600">18 Jan 2024</div>
              </div>bl
            </div>
          </div>
        </div>
      </div>
<div className="text-center py-24 px-4" style={{ backgroundColor: '#F9FAFB' }}>
  <h2 className="text-3xl font-bold mb-4">Start your free trial</h2>
  <p className="text-gray-600 mb-8">Join over 4,000+ startups already growing with Untitled.</p>
  <div className="flex justify-center space-x-4">
    <button className="px-6 py-2 border border-gray-300 rounded-full">Learn more</button>
    <button className="px-6 py-2 bg-red-500 text-white rounded-full">Get started</button>
  </div>
</div>
      <footer className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
          <img src={ZYSK} alt="ZYSK Logo" className="h-8" />
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-gray-600">
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions <span className="text-green-500 text-sm">New</span></li>
              <li>Tutorials</li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-600">
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>News</li>
              <li>Media kit</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-gray-600">
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Events</li>
              <li>Help centre</li>
              <li>Tutorials</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Use cases</h3>
            <ul className="space-y-3 text-gray-600">
              <li>Startups</li>
              <li>Enterprise</li>
              <li>Government</li>
              <li>SaaS centre</li>
              <li>Marketplaces</li>
              <li>Ecommerce</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
          <div className="text-gray-600">© 2077 zysktechnologies. All rights reserved.</div>
          <div className="flex space-x-6 text-gray-600">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Cookies</span>
            <span>Licenses</span>
            <span>Settings</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;