import React from 'react';

/**
 * Elegant Golden/Navy Islamic Arch Emblem
 */
export const MerkezEmblem: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Outer Arch Shape */}
      <path d="M15,90 L15,40 C15,20 30,5 50,5 C70,5 85,20 85,40 L85,90" fill="none" stroke="#3B2B20" strokeWidth="6" />
      {/* Crescent */}
      <path d="M35,60 C35,45 45,35 50,35 C55,35 65,45 65,60 C65,75 55,85 50,85 C45,85 35,75 35,60 Z" fill="#A68B6B" />
      {/* Star */}
      <path d="M50,15 L53,24 L62,24 L55,29 L57,38 L50,33 L43,38 L45,29 L38,24 L47,24 Z" fill="#A68B6B" />
      {/* Quran Outline */}
      <path d="M25,75 L50,65 L75,75 L50,85 Z" fill="#3B2B20" />
    </svg>
  );
};

/**
 * 8-Pointed Star Rosette (Khatam) - Core Islamic Geometric Motif
 */
export const GirihStar8: React.FC<{ className?: string; size?: number; fill?: string; stroke?: string }> = ({
  className = "w-6 h-6",
  size = 24,
  fill = "currentColor",
  stroke = "#8C6D46"
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`inline-block shrink-0 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer octagon / 8-pointed star */}
      <polygon
        points="50,5 62,38 95,50 62,62 50,95 38,62 5,50 38,38"
        fill={fill}
        fillOpacity="0.12"
        stroke={stroke}
        strokeWidth="2.5"
      />
      {/* Intertwined rotated square 1 */}
      <rect
        x="24"
        y="24"
        width="52"
        height="52"
        stroke={stroke}
        strokeWidth="1.8"
        transform="rotate(0 50 50)"
      />
      {/* Intertwined rotated square 2 */}
      <rect
        x="24"
        y="24"
        width="52"
        height="52"
        stroke={stroke}
        strokeWidth="1.8"
        transform="rotate(45 50 50)"
      />
      {/* Inner rosette core */}
      <circle cx="50" cy="50" r="10" stroke={stroke} strokeWidth="1.5" fill="none" />
      <circle cx="50" cy="50" r="4" fill={stroke} />
    </svg>
  );
};

/**
 * Islamic Arch / Mihrab SVG Frame
 */
export const MihrabArch: React.FC<{ className?: string; stroke?: string }> = ({
  className = "w-12 h-16",
  stroke = "#A68B6B"
}) => {
  return (
    <svg
      viewBox="0 0 100 130"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer pointed horseshoe arch */}
      <path
        d="M10,125 L10,65 C10,35 30,12 50,5 C70,12 90,35 90,65 L90,125"
        stroke={stroke}
        strokeWidth="2"
      />
      {/* Inner ornate arch */}
      <path
        d="M20,125 L20,70 C20,45 35,25 50,18 C65,25 80,45 80,70 L80,125"
        stroke={stroke}
        strokeWidth="1.2"
        strokeDasharray="2 3"
      />
      {/* Crown finial */}
      <circle cx="50" cy="5" r="3" fill={stroke} />
      {/* Hanging lamp chain representation */}
      <line x1="50" y1="18" x2="50" y2="45" stroke={stroke} strokeWidth="1" strokeDasharray="1 2" />
      <polygon points="46,45 54,45 52,55 48,55" fill={stroke} fillOpacity="0.4" stroke={stroke} strokeWidth="1" />
    </svg>
  );
};

/**
 * Ornate Arabesque Divider for Light Canvas
 */
export const ArabesqueDivider: React.FC<{ className?: string; light?: boolean }> = ({
  className = "w-full my-6",
  light = false
}) => {
  const color = light ? "rgba(255, 255, 255, 0.7)" : "#8C6D46";
  const centerFill = light ? "#FAF8F5" : "#2C1E16";

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#CBB8A2]/50 to-[#8C6D46]/60" />
      <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="shrink-0">
        {/* Diamond rosette center */}
        <polygon points="20,2 26,10 20,18 14,10" stroke={color} strokeWidth="1.2" fill="none" />
        <circle cx="20" cy="10" r="2.5" fill={centerFill} />
        {/* Curled palmette flourishes */}
        <path d="M14,10 C9,8 5,14 1,10" stroke={color} strokeWidth="1" fill="none" />
        <path d="M26,10 C31,8 35,14 39,10" stroke={color} strokeWidth="1" fill="none" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#CBB8A2]/50 to-[#8C6D46]/60" />
    </div>
  );
};

/**
 * Bismillah Calligraphic Header Emblem
 */
export const BismillahHeader: React.FC<{ className?: string; isDark?: boolean }> = ({
  className = "w-72",
  isDark = false
}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <span
        className={`font-amiri text-2xl md:text-3xl font-bold tracking-wide ${
          isDark ? "text-[#EAE0D5]" : "text-[#2C1E16]"
        }`}
      >
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </span>
      <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#A68B6B] to-transparent mt-1.5" />
    </div>
  );
};

/**
 * Geometric Lattice Background Overlay for Light Beige Canvas
 */
export const GeometricLatticeOverlay: React.FC<{ opacity?: number }> = ({ opacity = 0.08 }) => {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="islamic-girih-pattern-light" width="80" height="80" patternUnits="userSpaceOnUse">
            <path
              d="M40,0 L51,28 L80,40 L51,52 L40,80 L29,52 L0,40 L29,28 Z"
              fill="none"
              stroke="#8C6D46"
              strokeWidth="1.2"
            />
            <rect x="20" y="20" width="40" height="40" fill="none" stroke="#4A3F37" strokeWidth="0.6" strokeOpacity="0.4" />
            <rect
              x="20"
              y="20"
              width="40"
              height="40"
              fill="none"
              stroke="#4A3F37"
              strokeWidth="0.6"
              strokeOpacity="0.4"
              transform="rotate(45 40 40)"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-girih-pattern-light)" />
      </svg>
    </div>
  );
};

/**
 * Illuminated Manuscript Corner Accent
 */
export const ManuscriptCorner: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({
  position
}) => {
  const rotation = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <div className={`absolute ${position.split('-')[0]}-2 ${position.split('-')[1]}-2 pointer-events-none ${rotation}`} aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M2,2 L14,2 C8,2 2,8 2,14 L2,2 Z" fill="#A68B6B" fillOpacity="0.2" stroke="#8C6D46" strokeWidth="1" />
        <circle cx="5" cy="5" r="1.5" fill="#8C6D46" />
      </svg>
    </div>
  );
};

/**
 * Interactive Floating Arabic Letters & Brand Identity Atmosphere for Hero Section
 */
export const FloatingArabicLetters: React.FC = () => {
  const elements = [
    {
      text: "مركز الزهراء",
      className: "font-amiri text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#7A5C38] opacity-30 tracking-wider",
      top: "10%",
      left: "14%",
      animationClass: "animate-float-around",
      delay: "0s",
      duration: "11s",
    },
    {
      text: "MERKEZ ALZAHRAA",
      className: "font-serif text-sm sm:text-lg md:text-xl font-bold tracking-[0.25em] text-[#8C6D46] opacity-30 uppercase",
      top: "18%",
      right: "12%",
      animationClass: "animate-float-drift",
      delay: "1.5s",
      duration: "13s",
    },
    {
      text: "INSTITUT D'ÉTUDES ISLAMIQUES",
      className: "font-sans text-[11px] sm:text-xs md:text-sm font-extrabold tracking-[0.25em] text-[#7A5C38] opacity-30 uppercase",
      top: "76%",
      left: "16%",
      animationClass: "animate-float-around",
      delay: "2.8s",
      duration: "12s",
    },
    {
      text: "اقرأ",
      className: "font-amiri text-3xl sm:text-5xl font-bold text-[#8C6D46] opacity-30",
      top: "16%",
      right: "32%",
      animationClass: "animate-float-around",
      delay: "0.8s",
      duration: "9s",
    },
    {
      text: "القرآن",
      className: "font-amiri text-2xl sm:text-4xl font-bold text-[#7A5C38] opacity-30",
      top: "62%",
      right: "14%",
      animationClass: "animate-float-drift",
      delay: "2s",
      duration: "10s",
    },
    {
      text: "نور",
      className: "font-amiri text-2xl sm:text-3xl font-bold text-[#8C6D46] opacity-30",
      top: "32%",
      left: "8%",
      animationClass: "animate-float-around",
      delay: "3.2s",
      duration: "8s",
    },
    {
      text: "حكمة",
      className: "font-amiri text-2xl sm:text-3xl font-bold text-[#7A5C38] opacity-30",
      top: "48%",
      right: "8%",
      animationClass: "animate-float-drift",
      delay: "1.2s",
      duration: "11s",
    },
    {
      text: "أ",
      className: "font-amiri text-3xl sm:text-5xl font-extrabold text-[#8C6D46] opacity-30",
      top: "45%",
      left: "22%",
      animationClass: "animate-float-around",
      delay: "2.4s",
      duration: "7s",
    },
    {
      text: "ب",
      className: "font-amiri text-3xl sm:text-5xl font-extrabold text-[#7A5C38] opacity-30",
      top: "28%",
      right: "22%",
      animationClass: "animate-float-drift",
      delay: "4s",
      duration: "9s",
    },
    {
      text: "ت",
      className: "font-amiri text-3xl sm:text-5xl font-extrabold text-[#8C6D46] opacity-30",
      top: "68%",
      left: "34%",
      animationClass: "animate-float-around",
      delay: "1.8s",
      duration: "8.5s",
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {elements.map((item, i) => (
        <span
          key={i}
          className={`absolute ${item.className} ${item.animationClass}`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            animationDelay: item.delay,
            animationDuration: item.duration,
          }}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
};

