'use client';

import ProductList from './components/ProductList';
import { SortDropdown } from '@/app/shop/components/DropdownMenus/SortDropdown';
import SideBarMenu from '@/app/shop/components/SidebarMenu';
import { Button } from '@/components/ui/button';

const commonly_searched_products = [
  'Macbook M1 Air',
  'AirPods 3',
  'Macbook M2 Pro',
  'iPhone 14',
  'Mac Mini',
];

const ShopPage = () => {
  return (
    <>
      <div className="flex h-full flex-col ">
        <div className="flex flex-row border-b border-b-slate-200 p-4">
          {commonly_searched_products.map((product) => (
            <Button
              key={product}
              variant={'ghost'}
              className="text-lg font-normal text-slate-600"
            >
              {product}
            </Button>
          ))}
        </div>
        <div className="flex h-full flex-row ">
          <SideBarMenu />
          <div className="flex w-full flex-col ">
            <div className="flex w-full flex-row items-center justify-end gap-x-4 px-8 pb-4 pt-8 ">
              <span className="text-base">Sort by: </span>
              <SortDropdown />
            </div>
            <ProductList />
            {/* <div className="grid h-full gap-6 px-8 pb-8 pt-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {products.map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  product_name={p.product_name}
                  status={p.status}
                  price={p.price}
                  rating={p.rating}
                  sold={p.sold}
                  description={p.description}
                  img_url={p.img_url}
                />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
