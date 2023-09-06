import { products } from '@/lib/data/dummy_products';
import ProductCard from './ProductCard';
import { useAtomValue, useAtom, atom } from 'jotai';
import { categoriesAtom } from '../SidebarMenu/Checkboxes/CategoriesCheckbox';
import { useEffect, useState } from 'react';
import { ProductCardProps } from '@/lib/interfaces/props/ProductCardProps';
import { conditionsAtom } from '../SidebarMenu/Checkboxes/ConditionsCheckbox';

export const displayedProductsAtom = atom<ProductCardProps[]>([]);

function filterByCategory(
  selectedCategories: Array<string>,
  products: ProductCardProps[],
) {
  const filteredProducts = products.filter((product) => {
    return selectedCategories.includes(product.category);
  });

  return filteredProducts;
}

function filterByCondition(
  selectedConditions: Array<string>,
  products: ProductCardProps[],
) {
  const filteredProducts = products.filter((product) => {
    return selectedConditions.includes(product.condition);
  });

  return filteredProducts;
}

export default function ProductList() {
  const selectedCategories = useAtomValue(categoriesAtom);
  const selectedConditions = useAtomValue(conditionsAtom);
  // console.log(selectedCategories);
  const [displayedProducts, setDisplayedProducts] = useAtom(
    displayedProductsAtom,
  );

  useEffect(() => {
    let p: ProductCardProps[] = [];
    if (selectedCategories.length !== 0) {
      p = filterByCategory(selectedCategories, displayedProducts);
      setDisplayedProducts(p);
    }
    if (selectedConditions.length !== 0) {
      p = filterByCondition(selectedConditions, displayedProducts);
      setDisplayedProducts(p);
    }
    console.log(p);

    if (p.length === 0) {
      setDisplayedProducts(products);
      console.log('no product match the selected criteria');
    } else {
      setDisplayedProducts(p);
    }
  }, [selectedCategories, selectedConditions, setDisplayedProducts]);

  return (
    <div className="grid h-full gap-6 px-8 pb-8 pt-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {displayedProducts.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          product_name={p.product_name}
          category={p.category}
          condition={p.condition}
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
