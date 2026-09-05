import React, { useEffect, useRef, useState } from "react";
import { useInView, animate } from "motion/react";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({
  from = 0,
  to,
  duration = 2,
  decimals = 0,
  suffix = "",
  prefix = "",
  className = ""
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setValue(v);
      }
    });
    return () => controls.stop();
  }, [isInView, from, to, duration]);

  const formatted = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();

  return (
    <span ref={nodeRef} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};
