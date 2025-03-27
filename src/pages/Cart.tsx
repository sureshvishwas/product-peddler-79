
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, ArrowRight, Trash2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartItem from '@/components/CartItem';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Header />
      
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container-custom">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl font-medium mb-8"
          >
            Your Cart
          </motion.h1>
          
          {totalItems === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6">
                <ShoppingCart className="w-8 h-8 text-primary/70" />
              </div>
              <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">Add some products to your cart to continue shopping</p>
              <Link to="/" className="btn-primary inline-flex">
                Continue Shopping
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg border border-border/40 overflow-hidden">
                  <div className="p-6 border-b border-border">
                    <div className="flex justify-between items-center">
                      <h2 className="font-medium">Cart Items ({totalItems})</h2>
                      <button 
                        onClick={clearCart}
                        className="text-sm flex items-center text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Clear Cart
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <AnimatePresence>
                      {items.map((item) => (
                        <CartItem
                          key={item.id}
                          id={item.id}
                          name={item.name}
                          price={item.price}
                          image={item.image}
                          quantity={item.quantity}
                        />
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg border border-border/40 overflow-hidden sticky top-24">
                  <div className="p-6 border-b border-border">
                    <h2 className="font-medium">Order Summary</h2>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>Free</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax</span>
                        <span>${(totalPrice * 0.07).toFixed(2)}</span>
                      </div>
                      
                      <div className="border-t border-border pt-4 mt-4">
                        <div className="flex justify-between font-medium">
                          <span>Total</span>
                          <span>${(totalPrice + totalPrice * 0.07).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Link to="/checkout" className="btn-primary w-full flex items-center justify-center">
                        Checkout
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                      
                      <Link to="/" className="mt-4 text-sm text-center w-full block text-muted-foreground hover:text-primary transition-colors">
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Cart;
