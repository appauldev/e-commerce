import { Checkbox } from "@/components/ui/checkbox";

const ratings = [
  { id: 0, desc: "5 stars" },
  { id: 1, desc: "4 stars" },
  { id: 2, desc: "3 stars" },
  { id: 3, desc: "0-2 stars" },
];

export function RatingsCheckbox() {
  return (
    <div className="flex flex-col gap-y-4">
      {ratings.map((rating) => (
        <div key={rating.id} className="flex items-center gap-x-2">
          <Checkbox id={rating.id.toString()} />
          <label
            htmlFor={rating.id.toString()}
            className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {rating.desc}
          </label>
        </div>
      ))}
    </div>
  );
}
