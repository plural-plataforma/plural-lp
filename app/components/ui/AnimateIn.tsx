"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

const keyframeMap: Record<Direction, string> = {
  up:    "ai-fade-up",
  down:  "ai-fade-down",
  left:  "ai-fade-left",
  right: "ai-fade-right",
  scale: "ai-scale",
  fade:  "ai-fade",
};

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  /** ms delay before animation starts */
  delay?: number;
  /** animation direction / style */
  direction?: Direction;
  /** animation duration in ms */
  duration?: number;
  /** Intersection Observer threshold (0–1) */
  threshold?: number;
  /** render as a different HTML element */
  as?: React.ElementType;
}

export function AnimateIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 650,
  threshold = 0.12,
  as: Tag = "div",
}: AnimateInProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={
        visible
          ? {
              animation: `${keyframeMap[direction]} ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms both`,
            }
          : { opacity: 0 }
      }
    >
      {children}
    </Tag>
  );
}
