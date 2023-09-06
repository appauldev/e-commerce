import { Checkbox } from '@/components/ui/checkbox';
import { atom, useAtom } from 'jotai';

const categories = [
  { id: 'airpods', desc: 'AirPods' },
  { id: 'macbook', desc: 'Macbook' },
  { id: 'macmini', desc: 'Mac Mini' },
  { id: 'iphone', desc: 'iPhone' },
];

export const categoriesAtom = atom<string[]>([]);

export function CategoriesCheckbox() {
  const [selectedCategories, setSelectedCategories] = useAtom(categoriesAtom);
  function handleCheckChange(
    checked: boolean | 'indeterminate',
    category: { id: string; desc: string },
  ) {
    // console.log(checked);
    if (checked) {
      // console.log([...selectedCategories, category.desc]);
      setSelectedCategories([...selectedCategories, category.id]);
    } else {
      const updatedCategories = selectedCategories.filter((id) => {
        return id !== category.id;
      });
      // console.log(updatedCategories);
      setSelectedCategories(updatedCategories);
    }
  }
  return (
    <div className="flex flex-col gap-y-4">
      {categories.map((category) => (
        <div key={category.id} className="flex items-center gap-x-2">
          <Checkbox
            id={category.id}
            onCheckedChange={(c) => {
              handleCheckChange(c, category);
            }}
          />
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
