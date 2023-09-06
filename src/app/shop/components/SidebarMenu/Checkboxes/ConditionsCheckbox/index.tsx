import { Checkbox } from '@/components/ui/checkbox';
import { atom, useAtom } from 'jotai';

const conditions = [
  { id: 'brand_new', desc: 'Brand New' },
  { id: 'like_new', desc: 'Like New' },
  { id: 'good', desc: 'Good' },
  { id: 'fair', desc: 'Fair' },
];

export const conditionsAtom = atom<string[]>([]);

export function ConditionsCheckbox() {
  const [selectedConditions, setSelectedConditions] = useAtom(conditionsAtom);

  function handleCheckChange(
    checked: boolean | 'indeterminate',
    condition: { id: string; desc: string },
  ) {
    if (checked) {
      setSelectedConditions([...selectedConditions, condition.id]);
    } else {
      const updatedCondition = selectedConditions.filter((id) => {
        return id !== condition.id;
      });

      setSelectedConditions(updatedCondition);
    }
  }
  return (
    <div className="flex flex-col gap-y-4">
      {conditions.map((condition) => (
        <div key={condition.id} className="flex items-center gap-x-2">
          <Checkbox
            id={condition.id.toString()}
            onCheckedChange={(value) => {
              handleCheckChange(value, condition);
            }}
          />
          <label
            htmlFor={condition.id.toString()}
            className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {condition.desc}
          </label>
        </div>
      ))}
    </div>
  );
}
