import { useEffect, useRef } from "react";
import "./BinaryBackground.css";

function BinaryBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });

    let animationFrameId;
    let width = 0;
    let height = 0;
    let fontSize = 18;
    let columns = 0;
    let drops = [];
    let lastTime = 0;

    const chars = "01010101  <> {} [] / AI ML JAVA REACT SQL API TEST";

    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1;

      width = window.innerWidth;
      height = window.innerHeight;

      if (width < 600) {
        fontSize = 14;
      } else if (width < 1000) {
        fontSize = 16;
      } else {
        fontSize = 18;
      }

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () =>
        Math.floor(Math.random() * (height / fontSize))
      );
    };

    const draw = (time) => {
      if (time - lastTime < 42) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      lastTime = time;

      ctx.fillStyle = "rgba(230, 250, 250, 0.12)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px Consolas, monospace`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#00b8c6";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const random = Math.random();

        if (random > 0.94) {
          ctx.fillStyle = "#ffffff";
        } else if (random > 0.72) {
          ctx.fillStyle = "#00d5e8";
        } else {
          ctx.fillStyle = "#0f9aaa";
        }

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.974) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    animationFrameId = requestAnimationFrame(draw);

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="binary-background" aria-hidden="true">
      <canvas ref={canvasRef}></canvas>
      <div className="binary-tint"></div>
      <div className="binary-soft-grid"></div>
    </div>
  );
}

export default BinaryBackground;
