import { Checkbox } from "@/components/ui/checkbox";

const conditions = [
  { id: 0, desc: "Brand New" },
  { id: 1, desc: "Like New" },
  { id: 2, desc: "Good" },
  { id: 3, desc: "Fair" },
];

export function ConditionsCheckbox() {
  return (
    <div className="flex flex-col gap-y-4">
      {conditions.map((condition) => (
        <div key={condition.id} className="flex items-center gap-x-2">
          <Checkbox id={condition.id.toString()} />
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
