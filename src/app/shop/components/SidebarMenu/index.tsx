'use client';

import { CategoriesCheckbox } from './Checkboxes/CategoriesCheckbox';
import { ConditionsCheckbox } from './Checkboxes/ConditionsCheckbox';
import { RatingsCheckbox } from './Checkboxes/RatingsCheckbox';
import PriceSlider from './Sliders/PriceSlider';
import { Separator } from '../../../../components/ui/separator';

const SideBarMenu = () => {
  return (
    <>
      <div className="flex w-96 flex-col gap-y-4 border-r border-r-slate-200 p-8 pr-16">
        <span className=" text-2xl font-semibold">Filters</span>
        <div>
          {/* Categories */}
          <div className="flex flex-col">
            <span className="mb-4 text-xl font-medium">Categories</span>
            <CategoriesCheckbox />
          </div>
          <Separator className="my-4" />
          {/* Condition */}
          <div className="flex flex-col">
            <span className="mb-4 text-xl font-medium">Condition</span>
            <ConditionsCheckbox />
          </div>
          <Separator className="my-4" />
          {/* Condition */}
          <div className="flex flex-col">
            <span className="mb-4 text-xl font-medium">Price</span>
            <PriceSlider />
          </div>
          <Separator className="my-4" />
          {/* Rating */}
          <div className="flex flex-col">
            <span className="mb-4 text-xl font-medium">Rating</span>
            <RatingsCheckbox />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarMenu;
