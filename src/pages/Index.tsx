
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/context/CartContext';

// Sample product data
const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Ceramic Vase',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1612546907452-6afbd5accb91?auto=format&fit=crop&q=80&w=1000',
    description: 'Handcrafted ceramic vase with a modern, minimalist design. Perfect for displaying fresh or dried flowers.'
  },
  {
    id: '2',
    name: 'Minimalist Table Lamp',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1530622069432-e79b64fcde86?auto=format&fit=crop&q=80&w=1000',
    description: 'Modern table lamp with adjustable brightness. Made from high-quality materials with a sleek design.'
  },
  {
    id: '3',
    name: 'Wooden Wall Clock',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1510290435580-3d7a25825ae6?auto=format&fit=crop&q=80&w=1000',
    description: 'Elegant wall clock crafted from sustainable wood. Silent mechanism ensures peaceful timekeeping.'
  },
  {
    id: '4',
    name: 'Designer Coffee Mug',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=1000',
    description: 'Premium ceramic coffee mug with a minimalist design. Comfortable handle and perfect size for your morning brew.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
              Elevate Your Space with Timeless Design
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Curated home decor and accessories for the modern minimalist. Quality craftsmanship meets contemporary design.
            </p>
            <Link to="/products" className="btn-primary inline-flex items-center">
              Shop Collection
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
          <img
            src="https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&q=80&w=1500"
            alt="Modern interior"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-3xl font-medium mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Our most popular items</p>
            </div>
            <Link to="/products" className="text-sm font-medium hover:text-primary flex items-center transition-colors">
              View All
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1616128618694-96e9e896ecb7?auto=format&fit=crop&q=80&w=1000"
                alt="Our workshop"
                className="rounded-lg w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-medium mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2018, Essence began with a simple mission: to create thoughtfully designed products that bring beauty and function to everyday life. We believe in the power of good design to elevate the ordinary.
              </p>
              <p className="text-muted-foreground mb-8">
                Every product in our collection is carefully selected or created to meet our exacting standards for quality, sustainability, and timeless design that transcends trends.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-3xl font-medium mb-4">Join Our Community</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, design inspiration, and first access to new collections.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
