import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AddToCartButton from '@/components/AddToCartButton';
import { Product } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

// Sample product data
const products: Product[] = [
  {
    id: '1',
    name: 'Premium Ceramic Vase',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1612546907452-6afbd5accb91?auto=format&fit=crop&q=80&w=1000',
    description: 'Handcrafted ceramic vase with a modern, minimalist design. Perfect for displaying fresh or dried flowers. Each vase is unique with slight variations in texture and color, making it a truly one-of-a-kind piece for your home.'
  },
  {
    id: '2',
    name: 'Minimalist Table Lamp',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1530622069432-e79b64fcde86?auto=format&fit=crop&q=80&w=1000',
    description: 'Modern table lamp with adjustable brightness. Made from high-quality materials with a sleek design that complements any interior style. The energy-efficient LED light provides warm, flicker-free illumination perfect for reading or creating ambiance.'
  },
  {
    id: '3',
    name: 'Wooden Wall Clock',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1510290435580-3d7a25825ae6?auto=format&fit=crop&q=80&w=1000',
    description: 'Elegant wall clock crafted from sustainable wood. Silent mechanism ensures peaceful timekeeping. The minimalist design features clean lines and a natural wood finish that adds warmth to any space. Battery operated with easy installation.'
  },
  {
    id: '4',
    name: 'Designer Coffee Mug',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=1000',
    description: 'Premium ceramic coffee mug with a minimalist design. Comfortable handle and perfect size for your morning brew. Dishwasher and microwave safe. The glazed interior prevents staining while the matte exterior provides a modern aesthetic.'
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // In a real app, this would be an API call
    setTimeout(() => {
      const foundProduct = products.find(p => p.id === id) || null;
      setProduct(foundProduct);
      setLoading(false);
    }, 300);
  }, [id]);
  
  if (loading) {
    return (
      <>
        <Header />
        <div className="container-custom min-h-screen flex items-center justify-center pt-16">
          <div className="animate-pulse">
            <div className="h-8 w-32 bg-secondary rounded mb-4"></div>
            <div className="h-80 w-full max-w-lg bg-secondary rounded"></div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  if (!product) {
    return (
      <>
        <Header />
        <div className="container-custom min-h-screen flex flex-col items-center justify-center pt-16 text-center">
          <h2 className="text-2xl font-medium mb-4">Product Not Found</h2>
          <p className="text-muted-foreground mb-8">The product you are looking for does not exist or has been removed.</p>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to home
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-lg overflow-hidden border border-border/40">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="font-display text-3xl font-medium mb-2">{product.name}</h1>
              <p className="text-2xl mb-6">${product.price.toFixed(2)}</p>
              
              <div className="mb-8">
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="font-medium mb-2">Details</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Free shipping</li>
                  <li>• 30-day returns</li>
                  <li>• 1-year warranty</li>
                </ul>
              </div>
              
              <AddToCartButton product={product} className="max-w-xs" />
            </motion.div>
          </div>
          
          {/* Related Products */}
          <section className="mt-24">
            <h2 className="font-display text-2xl font-medium mb-8">You might also like</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products
                .filter(p => p.id !== product.id)
                .slice(0, 4)
                .map(relatedProduct => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))
              }
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ProductDetail;
