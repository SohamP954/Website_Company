interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'light', className = '', size = 'md' }: LogoProps) {
  const isDark = variant === 'dark'; // dark theme / background means light text

  const sizeClasses = {
    sm: { icon: 'w-7 h-7', text: 'text-lg', sub: 'text-[9px]' },
    md: { icon: 'w-9 h-9', text: 'text-xl', sub: 'text-[10px]' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl', sub: 'text-xs' },
  }[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Three-leaf emblem inspired by Expogold logo */}
      <svg
        className={`${sizeClasses.icon} shrink-0`}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gold turmeric gradient */}
          <linearGradient id="goldLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FAC830" />
            <stop offset="45%" stopColor="#E8A800" />
            <stop offset="80%" stopColor="#C8941A" />
            <stop offset="100%" stopColor="#A67714" />
          </linearGradient>

          {/* Deep green left leaf gradient */}
          <linearGradient id="greenLeafLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E6B48" />
            <stop offset="60%" stopColor="#1B4D31" />
            <stop offset="100%" stopColor="#0F331F" />
          </linearGradient>

          {/* Center green leaf gradient */}
          <linearGradient id="greenLeafCenter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3C8559" />
            <stop offset="50%" stopColor="#225E3B" />
            <stop offset="100%" stopColor="#143E26" />
          </linearGradient>

          {/* Gold text gradient */}
          <linearGradient id="goldTextGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE096" />
            <stop offset="40%" stopColor="#E8A800" />
            <stop offset="100%" stopColor="#C8941A" />
          </linearGradient>
        </defs>

        {/* Left Leaf (Green with veins) */}
        <path
          d="M 54 112 C 50 82 20 72 16 48 C 12 30 28 12 44 26 C 54 36 56 68 56 94 Z"
          fill="url(#greenLeafLeft)"
        />
        <path
          d="M 52 100 C 44 76 34 54 26 36"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 40 70 C 32 66 26 68 20 62"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M 46 54 C 38 48 32 50 28 42"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Center Leaf (Upright Green) */}
        <path
          d="M 58 114 C 58 75 42 42 58 10 C 76 42 64 75 62 114 Z"
          fill="url(#greenLeafCenter)"
        />
        <path
          d="M 59 108 L 59 20"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 59 75 C 52 68 48 62 46 54"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M 59 75 C 66 68 70 62 72 54"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M 59 50 C 53 44 50 38 49 32"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M 59 50 C 65 44 68 38 69 32"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Right Leaf (Golden Turmeric Leaf with powder texture feel) */}
        <path
          d="M 64 112 C 68 84 84 68 98 48 C 108 34 106 18 92 22 C 78 28 66 58 64 94 Z"
          fill="url(#goldLeafGrad)"
        />
        {/* Powder texture sparkles inside gold leaf */}
        <path
          d="M 66 100 C 74 76 84 54 92 36"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="82" cy="52" r="1.5" fill="#FFFBF0" opacity="0.8" />
        <circle cx="76" cy="64" r="1.2" fill="#7D590E" opacity="0.5" />
        <circle cx="88" cy="42" r="1.3" fill="#FFFBF0" opacity="0.9" />
        <circle cx="85" cy="68" r="1.5" fill="#FAC830" opacity="0.7" />
        <circle cx="72" cy="80" r="1.2" fill="#7D590E" opacity="0.4" />
      </svg>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1">
          <span
            className={`font-bold tracking-tight font-display ${
              isDark ? 'text-white' : 'text-[#0D2A1C]'
            } ${sizeClasses.text}`}
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
          >
            EXPOGOLD
          </span>
          <span
            className={`font-bold tracking-tight font-display bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent ${sizeClasses.text}`}
            style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              backgroundImage: 'linear-gradient(135deg, #FDE096 0%, #FAC830 40%, #C8941A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            EXIM
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="w-3 h-px bg-gold-400 opacity-70" />
          <span
            className={`tracking-[0.24em] uppercase font-semibold text-gold-500 ${sizeClasses.sub}`}
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Exporters of Turmeric
          </span>
          <span className="w-3 h-px bg-gold-400 opacity-70" />
        </div>
      </div>
    </div>
  );
}
