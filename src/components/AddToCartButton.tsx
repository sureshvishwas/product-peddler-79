
import React from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { useCart, Product } from '@/context/CartContext';
import { AnimatePresence, motion } from 'framer-motion';

interface AddToCartButtonProps {
  product: Product;
  className?: string;
  showText?: boolean;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ 
  product,
  className = '',
  showText = true
}) => {
  const { addItem, items } = useCart();
  const [isAdded, setIsAdded] = React.useState(false);
  
  // Check if item is already in cart
  const isInCart = items.some(item => item.id === product.id);
  
  const handleClick = () => {
    addItem(product);
    setIsAdded(true);
    
    // Reset animation after 1.5 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };
  
  return (
    <button
      onClick={handleClick}
      className={`btn-primary w-full flex items-center justify-center ${className}`}
    >
      <AnimatePresence mode="wait">
        {isAdded ? (
          <motion.div
            key="added"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="flex items-center"
          >
            <Check className="w-4 h-4 mr-2" />
            {showText && "Added"}
          </motion.div>
        ) : (
          <motion.div
            key="add"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="flex items-center"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {showText && (isInCart ? "Add Again" : "Add to Cart")}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default AddToCartButton;
