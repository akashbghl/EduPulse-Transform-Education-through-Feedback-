import React from 'react';
import Logo from '../../assets/logo.jpg';

const footerLinks = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Testimonials', 'FAQ'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy'],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 border-b pb-8">
        {/* Logo and Description */}
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="EduPulse" className="w-10 h-10" />
            <span className="text-xl font-bold">EduPulse</span>
          </div>
          <p className="text-gray-600 mt-2">
            Transforming education through feedback and engagement.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-2">{section.title}</h4>
              <ul className="space-y-1 text-gray-600">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © 2025 EduPulse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
