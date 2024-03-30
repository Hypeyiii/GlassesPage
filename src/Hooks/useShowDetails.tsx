import { useState } from 'react';
import { useCart } from './useCart';

interface Products {
    id: number;
    brand: string;
    price: number;
    image: string;
    description: string;
    quantity: number;
    total: number;
    countProducts: number;
    category: string;
    genre: string;
    shape: string;
    color: string;
    stock: number;
}

export function useShowDetails() {
    const [selectedProduct, setSelectedProduct] = useState<Products | null>(null);
    const {allProducts} = useCart();

    const showProductDetails = (product: Products): Products[] => {
        setSelectedProduct(product);
        return allProducts;
    };

    return { showProductDetails, selectedProduct };
}