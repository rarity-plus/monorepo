import { useEffect } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { useState } from "react";
import { FunctionComponent } from "react";

import Typed from "typed.js";

interface TyperProps {
  text: string[];
  speed?: number;
  className?: string;
}

const Typer: FunctionComponent<TyperProps> = ({
  text,
  speed = 40,
  className,
}) => {
  const textRef = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (textRef.current === null) return;

    typed.current = new Typed(textRef.current, {
      strings: text,
      typeSpeed: speed,
    });

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <div className={`items-center ${className}`}>
      <span ref={textRef}></span>
    </div>
  );
};

export default Typer;
