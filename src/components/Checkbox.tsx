"use client";

import { Check } from "phosphor-react";
import { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  isChecked?: boolean;
}

export function Checkbox({ isChecked, ...rest }: CheckboxProps) {
  return (
    <label className="relative w-8 h-8">
      <input
        {...rest}
        type="checkbox"
        defaultChecked={isChecked}
        className="appearance-none w-8 h-8 rounded-full border-2 border-neutral-700 cursor-pointer checked:bg-green-600 checked:border-green-600 peer"
      />
      <Check
        size={20}
        weight="bold"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  pointer-events-none hidden peer-checked:block"
      />
    </label>
  );
}
