
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary py-16 mt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="font-display text-xl mb-4">Essence</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Premium products crafted with care and attention to detail.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wide">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">All Products</Link></li>
              <li><Link to="/products/featured" className="text-muted-foreground hover:text-primary text-sm transition-colors">Featured</Link></li>
              <li><Link to="/products/new" className="text-muted-foreground hover:text-primary text-sm transition-colors">New Arrivals</Link></li>
              <li><Link to="/products/bestsellers" className="text-muted-foreground hover:text-primary text-sm transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</Link></li>
              <li><Link to="/sustainability" className="text-muted-foreground hover:text-primary text-sm transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary text-sm transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wide">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-muted-foreground hover:text-primary text-sm transition-colors">Help Center</Link></li>
              <li><Link to="/shipping" className="text-muted-foreground hover:text-primary text-sm transition-colors">Shipping</Link></li>
              <li><Link to="/returns" className="text-muted-foreground hover:text-primary text-sm transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-12 mt-12 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Essence. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
