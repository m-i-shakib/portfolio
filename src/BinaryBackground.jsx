import { useEffect, useRef } from "react";
import "./BinaryBackground.css";

function BinaryBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = 0;
    let height = 0;
    const fontSize = 18;
    let columns = 0;
    let drops = [];
    const chars = "01<>/{}[]+=-*#@$%ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1;

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () =>
        Math.floor(Math.random() * height)
      );
    };

    const draw = () => {
      ctx.fillStyle = "rgba(233, 251, 251, 0.16)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px Consolas, monospace`;
      ctx.shadowBlur = 6;
      ctx.shadowColor = "#1199a8";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const glow = Math.random();

        if (glow > 0.95) {
          ctx.fillStyle = "#ffffff";
        } else if (glow > 0.75) {
          ctx.fillStyle = "#7dd3fc";
        } else {
          ctx.fillStyle = "#1199a8";
        }

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.98) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="binary-background" aria-hidden="true">
      <canvas ref={canvasRef}></canvas>
      <div className="binary-overlay"></div>
    </div>
  );
}

export default BinaryBackground;
