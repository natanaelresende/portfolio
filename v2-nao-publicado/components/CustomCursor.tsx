"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    const pos = trailsRef.current.map(() => ({ x: mx, y: my }));
    let active = true;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate3d(${mx}px,${my}px,0) translate(-50%,-50%)`;
    };
    const onLeave = () => { dot.style.opacity = "0"; ring.style.opacity = "0"; trailsRef.current.forEach(t=>t.style.opacity="0"); active=false; };
    const onEnter = () => { dot.style.opacity = "1"; ring.style.opacity = "1"; active=true; };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);

    let raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
      let px = mx, py = my;
      trailsRef.current.forEach((el, i) => {
        pos[i].x += (px - pos[i].x) * 0.22;
        pos[i].y += (py - pos[i].y) * 0.22;
        const scale = 1 - i * 0.11;
        const opacity = active ? 0.42 - i * 0.06 : 0;
        el.style.transform = `translate3d(${pos[i].x}px,${pos[i].y}px,0) translate(-50%,-50%) scale(${scale})`;
        el.style.opacity = String(opacity);
        px = pos[i].x; py = pos[i].y;
      });
      raf = requestAnimationFrame(loop);
    };
    loop();

    const enters = Array.from(document.querySelectorAll("a, button, .btn"));
    const hEnter = () => { ring.style.width="36px"; ring.style.height="36px"; ring.style.borderColor="var(--accent)"; };
    const hLeave = () => { ring.style.width="26px"; ring.style.height="26px"; ring.style.borderColor="rgba(201,184,150,.45)"; };
    enters.forEach(el => { el.addEventListener("mouseenter", hEnter); el.addEventListener("mouseleave", hLeave); });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      enters.forEach(el => { el.removeEventListener("mouseenter", hEnter); el.removeEventListener("mouseleave", hLeave); });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} ref={(el) => { if (el) trailsRef.current[i] = el; }} className="cursor-trail" aria-hidden />
      ))}
    </>
  );
}
