import { Checkbox } from "@/components/ui/checkbox";

const categories = [
  { id: 0, desc: "AirPods" },
  { id: 1, desc: "Macbook" },
  { id: 2, desc: "Mac Mini" },
  { id: 3, desc: "iPhone" },
];

export function CategoriesCheckbox() {
  return (
    <div className="flex flex-col gap-y-4">
      {categories.map((category) => (
        <div key={category.id} className="flex items-center gap-x-2">
          <Checkbox id={category.id.toString()} />
          <label
            htmlFor={category.id.toString()}
            className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {category.desc}
          </label>
        </div>
      ))}
    </div>
  );
}
