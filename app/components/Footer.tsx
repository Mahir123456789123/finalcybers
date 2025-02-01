"use client";
import { Shield, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-500 mr-2" />
              <span className="text-2xl font-bold">CyberShield</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Protecting India's digital frontier
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <Instagram />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Email: info@cybershield.gov.in
            </p>
            <p className="text-sm text-gray-400">
              Emergency Hotline: 1800-XXX-XXXX
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2023 CyberShield. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
