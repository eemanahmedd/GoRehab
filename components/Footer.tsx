import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Apple,
  Smartphone,
} from "lucide-react";
import { Button } from "./ui/button";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { name: "Home", page: "home" },
    { name: "Features", page: "features" },
    { name: "About", page: "about" },
    { name: "Careers", page: "careers" },
    { name: "Contact", page: "contact" },
  ];

  const support: Array<{
    name: string;
    href?: string;
    page?: string;
  }> = [
    { name: "Help Center", href: "#" },
    { name: "Student Guide", href: "#" },
    { name: "FAQ", page: "faq" },
    { name: "Technical Support", page: "contact" },
    { name: "Feature Requests", page: "contact" },
    { name: "Bug Reports", page: "contact" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Academic Integrity", href: "#" },
    { name: "Refund Policy", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/goreehab/",
      label: "Instagram",
    },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div
              className="flex items-center space-x-2 mb-6 cursor-pointer"
              onClick={() => onNavigate("home")}
            >
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <span className="text-xl font-bold">GoRehab</span>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[var(--electric-blue)]" />
                <span className="text-gray-300">
                  support@gorehab.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[var(--electric-blue)]" />
                <span className="text-gray-300">
                  +92 300 1234567
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[var(--electric-blue)] transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-300 hover:text-[var(--electric-blue)] transition-colors duration-300 text-sm text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((link, index) => (
                <li key={index}>
                  {link.page ? (
                    <button
                      onClick={() => onNavigate(link.page)}
                      className="text-gray-300 hover:text-[var(--electric-blue)] transition-colors duration-300 text-sm text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-[var(--electric-blue)] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* App Download & Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6">
              Download GoRehab
            </h3>
            <div className="space-y-3 mb-8">
              <Button className="w-full bg-black text-white hover:bg-gray-800 justify-start text-sm py-2">
                <Apple className="w-4 h-4 mr-2" />
                <div className="text-left">
                  <div className="text-xs opacity-80">
                    Download on the
                  </div>
                  <div className="text-sm font-bold">
                    App Store
                  </div>
                </div>
              </Button>
              <Button className="w-full bg-green-600 text-white hover:bg-green-700 justify-start text-sm py-2">
                <Smartphone className="w-4 h-4 mr-2" />
                <div className="text-left">
                  <div className="text-xs opacity-80">
                    Get it on
                  </div>
                  <div className="text-sm font-bold">
                    Google Play
                  </div>
                </div>
              </Button>
            </div>

            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[var(--electric-blue)] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 GoRehab Technologies. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🇵🇰 Made in Pakistan</span>
              <span>•</span>
              <span>HEC Curriculum Aligned</span>
              <span>•</span>
              <span>Trusted by 5,000+ Students</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}