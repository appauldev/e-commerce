'use client';

import { products } from '@/lib/data/dummy_products';
import ProductCard from './ProductCard';
import { useAtomValue } from 'jotai';
import { categoriesAtom } from '../SidebarMenu/Checkboxes/CategoriesCheckbox';
import { useEffect, useState } from 'react';
import { ProductCardProps } from '@/lib/interfaces/props/ProductCardProps';

export default function ProductList() {
  const selectedCategories = useAtomValue(categoriesAtom);
  console.log(selectedCategories);

  const [displayedProducts, setDisplayedProducts] = useState<
    ProductCardProps[]
  >([]);
  useEffect(() => {
    function getProducts() {
      if (selectedCategories.length === 0) {
        setDisplayedProducts(products);
      } else {
        const productsToDisplay = products.filter((product) => {
          return selectedCategories.includes(product.category);
        });
        setDisplayedProducts(productsToDisplay);
      }
    }
    getProducts();
  }, [selectedCategories]);

  return (
    <div className="grid h-full gap-6 px-8 pb-8 pt-4 transition-all duration-200 ease-in-out sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {displayedProducts.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          product_name={p.product_name}
          category={p.category}
          status={p.status}
          price={p.price}
          rating={p.rating}
          sold={p.sold}
          description={p.description}
          img_url={p.img_url}
        />
      ))}
    </div>
  );
}
