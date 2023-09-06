import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { IconStar } from '@tabler/icons-react';
import Image from 'next/image';
import { ProductCardProps } from '@/lib/interfaces/props/ProductCardProps';

// format number to US dollar
let PHPeso = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'PHP',
});

const ProductCard = (props: ProductCardProps) => {
  return (
    <Card className="flex h-fit cursor-pointer flex-col items-center border-0 pt-0 shadow-sm">
      <CardHeader className="w-full">
        <div className="relative mb-4 h-[250px] w-full overflow-hidden rounded-xl shadow-sm">
          <Image
            className="  object-cover transition-transform duration-300 hover:scale-[1.1]"
            src={props.img_url}
            alt="Next.js Logo"
            fill={true}
            priority
          />
        </div>
        <div className="flex flex-col gap-y-4 px-2">
          <CardTitle className="font-semibold sm:text-3xl lg:text-3xl">
            {PHPeso.format(props.price)}
          </CardTitle>
          <div className="flex flex-col gap-y-2">
            <CardDescription className="text-lg">
              {props.product_name}
            </CardDescription>
            <div className="flex">
              <Badge variant={'secondary'}>{props.condition}</Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      {/* <CardContent>
        <p>Card Content</p>
      </CardContent> */}
      <CardFooter className="mt-6 flex w-full flex-row justify-between px-3 pb-6 ">
        <div className="flex flex-row gap-x-2">
          <IconStar className="text-yellow-300" />
          <span className="text-lg">{props.rating}</span>
        </div>
        <div className="flex flex-row gap-x-2">
          <span className="text-lg">{props.sold}</span>
          <span className="text-lg">Sold</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
