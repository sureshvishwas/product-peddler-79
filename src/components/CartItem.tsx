
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  image,
  quantity,
}) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex items-center border-b border-border py-4"
    >
      <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="ml-4 flex-grow">
        <Link to={`/product/${id}`}>
          <h3 className="font-medium hover:text-primary transition-colors">{name}</h3>
        </Link>
        <p className="text-muted-foreground text-sm">${price.toFixed(2)}</p>
      </div>

      <div className="flex items-center border border-border rounded-md">
        <button
          onClick={() => updateQuantity(id, quantity - 1)}
          disabled={quantity <= 1}
          className="p-2 text-foreground/70 hover:text-primary disabled:opacity-50"
          aria-label="Decrease quantity"
        >
          <Minus className="w-3 h-3" />
        </button>
        
        <span className="px-3 py-1 text-sm">{quantity}</span>
        
        <button
          onClick={() => updateQuantity(id, quantity + 1)}
          className="p-2 text-foreground/70 hover:text-primary"
          aria-label="Increase quantity"
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>

      <div className="ml-6 text-right">
        <p className="font-medium">${(price * quantity).toFixed(2)}</p>
      </div>

      <button
        onClick={() => removeItem(id)}
        className="ml-4 p-2 text-foreground/70 hover:text-primary"
        aria-label="Remove item"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export default CartItem;
