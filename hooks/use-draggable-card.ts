"use client";

import { useRef, useState } from "react";

const DAMPING = 0.85;

/**
 * Pointer-drag physics for the hero profile card: follows the pointer with
 * damping while dragging, then springs back to origin on release.
 */
export function useDraggableCard() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const start = useRef({ x: 0, y: 0 });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    start.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    setPos({
      x: (e.clientX - start.current.x) * DAMPING,
      y: (e.clientY - start.current.y) * DAMPING,
    });
  };

  const onPointerUp = () => {
    setDragging(false);
    setPos({ x: 0, y: 0 });
  };

  return {
    x: pos.x,
    y: pos.y,
    dragging,
    transition: dragging ? "none" : "transform .6s cubic-bezier(0.2,1.4,0.3,1)",
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel: onPointerUp,
    },
  };
}
