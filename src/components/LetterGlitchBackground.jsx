import React, { useEffect, useRef } from 'react';

const LetterGlitchBackground = ({ 
  glitchColors = ["#5227FF", "#7cff67", "#ff6b6b"],
  glitchSpeed = 50,
  centerVignette = true,
  smooth = true 
}) => {
  const canvasRef = useRef(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:,.<>?";

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let characters = [];
    let columns = 0;
    let rows = 0;
    let charSize = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initCharacters();
    };

    const initCharacters = () => {
      charSize = Math.min(40, Math.max(20, window.innerWidth / 40));
      columns = Math.ceil(canvas.width / charSize);
      rows = Math.ceil(canvas.height / charSize);
      
      characters = [];
      for (let i = 0; i < columns * rows; i++) {
        characters.push({
          char: letters[Math.floor(Math.random() * letters.length)],
          glitchIntensity: 0,
          glitchTimer: 0,
          color: glitchColors[0]
        });
      }
    };

    const updateGlitch = () => {
      for (let i = 0; i < characters.length; i++) {
        if (characters[i].glitchTimer <= 0) {
          if (Math.random() < 0.02) {
            characters[i].glitchIntensity = Math.random() * 0.8 + 0.2;
            characters[i].glitchTimer = Math.random() * glitchSpeed + 10;
            characters[i].char = letters[Math.floor(Math.random() * letters.length)];
            characters[i].color = glitchColors[Math.floor(Math.random() * glitchColors.length)];
          }
        } else {
          characters[i].glitchTimer--;
          characters[i].glitchIntensity *= 0.95;
        }
      }
    };

    const draw = () => {
      if (!ctx) return;
      
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.font = `${charSize}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
          const index = y * columns + x;
          const char = characters[index];
          
          if (!char) continue;
          
          const intensity = smooth ? Math.pow(char.glitchIntensity, 1.5) : char.glitchIntensity;
          
          if (intensity > 0.05) {
            const alpha = Math.min(0.3 + intensity * 0.7, 0.9);
            ctx.fillStyle = char.color;
            ctx.globalAlpha = alpha;
            
            const xPos = x * charSize + charSize / 2;
            const yPos = y * charSize + charSize / 2;
            
            // Glitch offset effect
            if (intensity > 0.3) {
              const offsetX = (Math.random() - 0.5) * intensity * charSize * 0.8;
              const offsetY = (Math.random() - 0.5) * intensity * charSize * 0.3;
              ctx.fillText(char.char, xPos + offsetX, yPos + offsetY);
            }
            
            ctx.fillText(char.char, xPos, yPos);
          } else {
            ctx.fillStyle = `rgba(100, 255, 100, 0.15)`;
            ctx.globalAlpha = 0.15;
            const xPos = x * charSize + charSize / 2;
            const yPos = y * charSize + charSize / 2;
            ctx.fillText(char.char, xPos, yPos);
          }
        }
      }
      
      // Center Vignette Effect
      if (centerVignette) {
        const gradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, canvas.width / 1.5
        );
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.7)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      ctx.globalAlpha = 1;
    };
    
    const animate = () => {
      updateGlitch();
      draw();
      animationId = requestAnimationFrame(animate);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [glitchColors, glitchSpeed, centerVignette, smooth]);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
};

export default LetterGlitchBackground;