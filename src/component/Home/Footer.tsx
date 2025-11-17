//create a react component
import React from 'react';
import { Building2, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import gizeServices from '../../constant/service';
import img from "../../Asset/Image/logoDark.png"

export default function Footer() {
    return (
              <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="rounded-lg flex items-center justify-center">
                  <Image src={img} width={100} height={60} alt="Logo" />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Delivering excellence in logistics, from global freight forwarding to local transportation, since 1992.
              </p>
              <div className="flex space-x-4">
                <a href="https://web.facebook.com/people/Gize-PLC/100066721911011/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://x.com/LogisticsPlc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/gize-plc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/gize_plc?igsh=MWEzeWY5ZWxsYm9mZw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</a></li>
                <li><a href="/service" className="text-gray-400 hover:text-orange-500 transition-colors">Services</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3 lg:columns-2 lg:gap-x-8">
                {gizeServices.map((service) => (
                  <li key={service.id}>
                    <a href={`/service/${service.id}`} className="text-gray-400 hover:text-orange-500 transition-colors">
                      {service.title}
                    </a>
                  </li>
                ))}
                {/* Service links can be added here dynamically if needed in the future */}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Bole Rwanda Embassy Road<br />Addis Ababa, Ethiopia</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-400">+251 115 528080</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-400"> +251 911 516478</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-400">gize@gizeplc.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="text-center">
              <p className="text-gray-400 text-sm">&copy; 2025 Gize. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
}