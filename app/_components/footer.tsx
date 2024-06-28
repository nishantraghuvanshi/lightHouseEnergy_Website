import React from "react";
import { FaFacebook, FaTwitter,FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold">About Us</h3>
            <p className="mt-4 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias voluptates ipsum ipsa minima. Labore nostrum pariatur voluptatem, quia suscipit accusamus asperiores quae tempore consectetur, officiis voluptas enim excepturi totam dignissimos.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:underline">
                  Programs
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold">Contact Us</h3>
            <p className="mt-4 text-sm">1234 Street Name, City, State, 12345</p>
            <p className="mt-2 text-sm">
              Email:{" "}
              <a href="mailto:info@lighthouseenergy.org" className="underline">
                info@lighthouseenergy.org
              </a>
            </p>
            <p className="mt-2 text-sm">
              Phone:{" "}
              <a href="tel:+1234567890" className="underline">
                +1 (234) 567-890
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-500 pt-4 text-sm flex justify-between">
          <div className="flex gap-6">
            <p>&copy; 2024 LightHouse Energy. All rights reserved.</p>
            <button className="hover:underline">Privacy Policy</button>
            <button className="hover:underline">Terms of Service</button>
          </div>
          <div className="flex gap-5">
            <a href="https://www.facebook.com">
              <FaFacebook className="text-xl hover:text-2xl" />
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter className="text-xl hover:text-2xl" />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagram className="text-xl hover:text-2xl" />
            </a>
            <a href="https://www.linkedin.com">
              <FaLinkedinIn className="text-xl hover:text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
