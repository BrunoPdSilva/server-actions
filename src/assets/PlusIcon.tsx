"use client";

import { IconWeight, Plus } from "phosphor-react";

interface PlusIconProps {
  size?: number;
  className?: string;
  weight?: string;
}

export function PlusIcon({
  size = 20,
  weight = "regular",
  className,
}: PlusIconProps) {
  return (
    <Plus
      size={size}
      weight={weight as IconWeight}
      className={`text-neutral-50 ${className}`}
    />
  );
}
