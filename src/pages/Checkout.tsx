
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Redirect to cart if cart is empty
    if (totalItems === 0) {
      navigate('/cart');
    }
  }, [totalItems, navigate]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      toast.success('Order placed successfully!');
      clearCart();
      navigate('/order-success');
    }, 1500);
  };
  
  if (totalItems === 0) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <>
      <Header />
      
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container-custom max-w-6xl">
          <button
            onClick={() => navigate('/cart')}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to cart
          </button>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl font-medium mb-8"
          >
            Checkout
          </motion.h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Checkout Form */}
            <div>
              <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-lg border border-border/40 overflow-hidden mb-8">
                  <div className="p-6 border-b border-border">
                    <h2 className="font-medium">Contact Information</h2>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg border border-border/40 overflow-hidden mb-8">
                  <div className="p-6 border-b border-border">
                    <h2 className="font-medium">Shipping Address</h2>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <label htmlFor="address" className="block mb-2 text-sm">Street Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block mb-2 text-sm">City</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="zip" className="block mb-2 text-sm">ZIP Code</label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          value={formData.zip}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="country" className="block mb-2 text-sm">Country</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg border border-border/40 overflow-hidden">
                  <div className="p-6 border-b border-border">
                    <h2 className="font-medium">Payment Information</h2>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <label htmlFor="cardNumber" className="block mb-2 text-sm">Card Number</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="0000 0000 0000 0000"
                        required
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiry" className="block mb-2 text-sm">Expiry Date</label>
                        <input
                          type="text"
                          id="expiry"
                          name="expiry"
                          value={formData.expiry}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          required
                          className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cvc" className="block mb-2 text-sm">CVC</label>
                        <input
                          type="text"
                          id="cvc"
                          name="cvc"
                          value={formData.cvc}
                          onChange={handleChange}
                          placeholder="000"
                          required
                          className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg border border-border/40 overflow-hidden sticky top-24">
                <div className="p-6 border-b border-border">
                  <h2 className="font-medium">Order Summary</h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4 max-h-[300px] overflow-y-auto mb-4">
                    {items.map(item => (
                      <div key={item.id} className="flex items-center pb-4 border-b border-border/40">
                        <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="ml-4 flex-grow">
                          <h3 className="font-medium text-sm">{item.name}</h3>
                          <p className="text-muted-foreground text-xs">Qty: {item.quantity}</p>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
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
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isProcessing}
                      className="btn-primary w-full flex items-center justify-center"
                    >
                      {isProcessing ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Place Order"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Checkout;
