"use client";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function PriceSlider() {
  const [currentPrice, setCurrentPrice] = useState([8000]);

  return (
    <>
      <span className="mb-4">Max price: {currentPrice}</span>
      <Slider
        value={currentPrice}
        min={5000}
        max={30000}
        step={500}
        onValueChange={(val) => {
          setCurrentPrice(val);
        }}
      />
    </>
  );
}
