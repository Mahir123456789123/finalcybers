"use client";

import { forwardRef } from "react";
import type React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-lg shadow-lg p-6 ${className || ""}`}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export default Card;
