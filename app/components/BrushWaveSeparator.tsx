// import React from 'react';

// interface BrushSeparatorProps {
//   color?: string;
//   height?: number;
// }

// const BrushSeparator: React.FC<BrushSeparatorProps> = ({
//   color = '#1E22AA',
//   height = 100
// }) => {
//   return (
//     <div 
//       style={{ 
//         position: 'relative',
//         width: '100%', 
//         height: `${height}px`,
//         overflow: 'hidden'
//       }}
//     >
//       {/* Main brush stroke */}
//       <svg 
//         preserveAspectRatio="none" 
//         width="100%" 
//         height="100%" 
//         viewBox="0 0 1000 100"
//         style={{ position: 'absolute', top: 0, left: 0 }}
//       >
//         <path 
//           d="M0,50 C150,20 250,80 350,50 C450,20 550,70 650,40 C750,10 850,60 1000,30 L1000,100 L0,100 Z" 
//           fill={color}
//         />
//       </svg>

//       {/* Secondary brush stroke for texture */}
//       <svg 
//         preserveAspectRatio="none" 
//         width="100%" 
//         height="100%" 
//         viewBox="0 0 1000 100"
//         style={{ position: 'absolute', top: 10, left: 0, opacity: 0.7 }}
//       >
//         <path 
//           d="M0,60 C200,30 300,70 500,50 C700,30 800,70 1000,40 L1000,100 L0,100 Z" 
//           fill={color}
//         />
//       </svg>
//     </div>
//   );
// };

// export default BrushSeparator;


// import React from 'react';

// interface BrushSeparatorProps {
//   color?: string;
//   height?: number;
// }

// const BrushSeparator: React.FC<BrushSeparatorProps> = ({
//   color = '#1E22AA',
//   height = 100
// }) => {
//   return (
//     <div 
//       style={{ 
//         position: 'relative',
//         width: '100%', 
//         height: `${height}px`,
//         overflow: 'hidden'
//       }}
//     >
//       {/* Main brush stroke (rotated 180°) */}
//       <svg 
//         preserveAspectRatio="none" 
//         width="100%" 
//         height="100%" 
//         viewBox="0 0 1000 100"
//         style={{ 
//           position: 'absolute', 
//           top: 0, 
//           left: 0,
//           transform: 'rotate(180deg)',
//           transformOrigin: 'center center'
//         }}
//       >
//         <path 
//           d="M0,50 C150,20 250,80 350,50 C450,20 550,70 650,40 C750,10 850,60 1000,30 L1000,100 L0,100 Z" 
//           fill={color}
//         />
//       </svg>

//       {/* Secondary brush stroke for texture (rotated 180°) */}
//       <svg 
//         preserveAspectRatio="none" 
//         width="100%" 
//         height="100%" 
//         viewBox="0 0 1000 100"
//         style={{ 
//           position: 'absolute', 
//           top: 0, 
//           left: 0, 
//           opacity: 0.7,
//           transform: 'rotate(180deg)',
//           transformOrigin: 'center center'
//         }}
//       >
//         <path 
//           d="M0,60 C200,30 300,70 500,50 C700,30 800,70 1000,40 L1000,100 L0,100 Z" 
//           fill={color}
//         />
//       </svg>
//     </div>
//   );
// };

// export default BrushSeparator;


import React, { useEffect, useRef } from 'react';

interface AdvancedWaveSeparatorProps {
  color?: string;
  secondaryColor?: string;
  height?: number;
  animationSpeed?: number;
  complexity?: number;
  layers?: number;
}

const AdvancedWaveSeparator: React.FC<AdvancedWaveSeparatorProps> = ({
  color = '#1E22AA',
  secondaryColor = '#2D30BB', // Optional secondary color for gradient effect
  height = 120,
  animationSpeed = 0.6,
  complexity = 3,  // Controls wave complexity
  layers = 3       // Number of wave layers
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Create waves with different parameters for more realistic effect
    const waves = Array.from({ length: layers }, (_, i) => ({
      amplitude: 8 + (i * 3) + (Math.random() * 4), // Varies by layer
      wavelength: 0.6 + (i * 0.2) + (Math.random() * 0.2),
      speed: 0.03 + (i * 0.01) - (Math.random() * 0.01),
      phase: Math.random() * Math.PI * 2,
      // Each wave gets slightly different color
      color: i === 0 ? color : blendColors(color, secondaryColor, i / layers)
    }));
    
    let animationTime = 0;
    
    const drawFrame = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update animation time
      animationTime += 0.01 * animationSpeed;
      
      // Draw each wave layer from back to front
      for (let i = waves.length - 1; i >= 0; i--) {
        const wave = waves[i];
        
        // Calculate wave parameters
        const amplitude = wave.amplitude;
        const wavelength = wave.wavelength;
        const phase = wave.phase + (animationTime * wave.speed);
        
        // Setup gradient for this wave
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        
        // More transparent at the top, opaque at the bottom
        const opacity = 0.4 + (i * 0.2);
        gradient.addColorStop(0, hexToRgba(wave.color, opacity - 0.2));
        gradient.addColorStop(1, hexToRgba(wave.color, opacity));
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        
        // Start at bottom left
        ctx.moveTo(0, canvas.height);
        
        // Complex wave formula with multiple sine components
        for (let x = 0; x <= canvas.width; x++) {
          let y = 0;
          
          // Base sine wave
          y += amplitude * Math.sin(x * wavelength * 0.01 + phase);
          
          // Add harmonics for more complex wave shapes based on complexity setting
          for (let h = 1; h <= complexity; h++) {
            const harmonicAmplitude = amplitude * (0.2 / h);
            const harmonicWavelength = wavelength * h * 1.5;
            const harmonicPhase = phase * h * 0.7;
            
            y += harmonicAmplitude * Math.sin(x * harmonicWavelength * 0.01 + harmonicPhase);
          }
          
          // Position waves in upper portion of canvas with offset based on layer
          const baseHeight = canvas.height * 0.4 - (i * 5);
          ctx.lineTo(x, baseHeight + y);
        }
        
        // Complete the path
        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        ctx.fill();
        
        // Add subtle highlight to wave peaks
        if (i === 0) {
          ctx.strokeStyle = hexToRgba(lightenColor(wave.color, 30), 0.4);
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }
      
      // Add subtle texture overlay
      addNoiseTexture(ctx, canvas, 0.03);
      
      animationRef.current = requestAnimationFrame(drawFrame);
    };
    
    animationRef.current = requestAnimationFrame(drawFrame);
    
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [color, secondaryColor, animationSpeed, complexity, layers]);
  
  // Helper function to blend colors
  function blendColors(color1: string, color2: string, ratio: number): string {
    // Convert hex to rgb
    const r1 = parseInt(color1.substring(1, 3), 16);
    const g1 = parseInt(color1.substring(3, 5), 16);
    const b1 = parseInt(color1.substring(5, 7), 16);
    
    const r2 = parseInt(color2.substring(1, 3), 16);
    const g2 = parseInt(color2.substring(3, 5), 16);
    const b2 = parseInt(color2.substring(5, 7), 16);
    
    // Blend colors
    const r = Math.round(r1 * (1 - ratio) + r2 * ratio);
    const g = Math.round(g1 * (1 - ratio) + g2 * ratio);
    const b = Math.round(b1 * (1 - ratio) + b2 * ratio);
    
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }
  
  // Helper function to convert hex color to rgba
  function hexToRgba(hex: string, alpha: number): string {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  
  // Helper function to lighten a color
  function lightenColor(color: string, amount: number): string {
    const r = Math.min(255, parseInt(color.substring(1, 3), 16) + amount);
    const g = Math.min(255, parseInt(color.substring(3, 5), 16) + amount);
    const b = Math.min(255, parseInt(color.substring(5, 7), 16) + amount);
    
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }
  
  // Add subtle noise texture for brush-like effect
  function addNoiseTexture(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, opacity: number) {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      // Only add noise to non-transparent pixels
      if (data[i + 3] > 0) {
        const noise = (Math.random() - 0.5) * opacity * 255;
        data[i] = Math.max(0, Math.min(255, data[i] + noise));
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));
      }
    }
    
    ctx.putImageData(imageData, 0, 0);
  }
  
  return (
    <div 
      style={{ 
        position: 'relative',
        width: '100%', 
        height: `${height}px`,
        overflow: 'hidden',
        transform: 'rotate(180deg)'
      }}
      className='dark:bg-gray-900'
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
    </div>
  );
};

export default AdvancedWaveSeparator;

// Example usage:
// <AdvancedWaveSeparator 
//   color="#1E22AA" 
//   secondaryColor="#3D41CC"
//   height={120} 
//   animationSpeed={0.6}
//   complexity={3}
//   layers={3}
// />