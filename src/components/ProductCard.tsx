
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart, Product } from '@/context/CartContext';
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price, image } = product;
  
  return (
    <div className="product-card group h-full flex flex-col">
      <Link to={`/product/${id}`} className="overflow-hidden">
        <div className="relative w-full pb-[120%] overflow-hidden">
          <img 
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover image-zoom"
            loading="lazy"
          />
        </div>
      </Link>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-medium text-base mb-1 transition-colors group-hover:text-primary">
          <Link to={`/product/${id}`}>{name}</Link>
        </h3>
        
        <p className="text-muted-foreground text-sm mb-auto">${price.toFixed(2)}</p>
        
        <div className="mt-4">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
