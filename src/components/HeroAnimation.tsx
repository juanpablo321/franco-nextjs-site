"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  brightness: number;
  pulsePhase: number;
  pulseSpeed: number;
}

interface Pulse {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
  size: number;
}

const COLORS = {
  node: "rgba(255,255,255,",
  edge: "rgba(255,255,255,",
  pulse1: "#ffffff",
  pulse2: "#e8d5ff",
  pulse3: "#ffb347",
};

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let frame = 0;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initNodes();
    };

    const initNodes = () => {
      const count = Math.max(18, Math.floor((width * height) / 22000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        radius: Math.random() * 2.5 + 1.5,
        brightness: Math.random() * 0.5 + 0.5,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.01 + 0.005,
      }));
      pulses = [];
    };

    const getEdges = (maxDist: number) => {
      const edges: [number, number, number][] = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) edges.push([i, j, dist]);
        }
      }
      return edges;
    };

    const spawnPulse = (edges: [number, number, number][]) => {
      if (edges.length === 0) return;
      const edge = edges[Math.floor(Math.random() * edges.length)];
      const colorOptions = [COLORS.pulse1, COLORS.pulse2, COLORS.pulse3];
      pulses.push({
        fromNode: edge[0],
        toNode: edge[1],
        progress: 0,
        speed: Math.random() * 0.008 + 0.005,
        color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
        size: Math.random() * 3 + 2,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const maxDist = Math.min(width, height) * 0.38;
      const edges = getEdges(maxDist);

      // Draw edges
      for (const [i, j, dist] of edges) {
        const opacity = (1 - dist / maxDist) * 0.18;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = `${COLORS.edge}${opacity})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Draw pulses
      pulses = pulses.filter((p) => p.progress <= 1);
      for (const pulse of pulses) {
        const from = nodes[pulse.fromNode];
        const to = nodes[pulse.toNode];
        const px = from.x + (to.x - from.x) * pulse.progress;
        const py = from.y + (to.y - from.y) * pulse.progress;

        // Glow trail
        const grad = ctx.createRadialGradient(px, py, 0, px, py, pulse.size * 4);
        grad.addColorStop(0, pulse.color.replace(")", ", 0.9)").replace("rgb", "rgba").replace("#ffffff", "rgba(255,255,255,0.9)").replace("#e8d5ff", "rgba(232,213,255,0.9)").replace("#ffb347", "rgba(255,179,71,0.9)"));
        grad.addColorStop(1, "rgba(0,0,0,0)");

        ctx.beginPath();
        ctx.arc(px, py, pulse.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(px, py, pulse.size, 0, Math.PI * 2);
        ctx.fillStyle = pulse.color;
        ctx.fill();

        pulse.progress += pulse.speed;
      }

      // Draw nodes
      for (const node of nodes) {
        node.pulsePhase += node.pulseSpeed;
        const glow = 0.6 + Math.sin(node.pulsePhase) * 0.4;
        const alpha = node.brightness * glow;

        // Outer glow
        const grad = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 5
        );
        grad.addColorStop(0, `rgba(255,255,255,${alpha * 0.4})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();

        // Move
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }

      // Spawn pulses periodically
      if (frame % 30 === 0 && pulses.length < 8) {
        spawnPulse(edges);
      }
      // Occasionally spawn a burst of 2-3 pulses (simulates a "decision moment")
      if (frame % 150 === 0) {
        for (let k = 0; k < 2; k++) spawnPulse(edges);
      }

      frame++;
      animRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
