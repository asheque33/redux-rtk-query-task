const Logo = ({ size = 34, className = '', showAnimation = true }) => {
  return (
    <>
      <style>{`
        .pulse-animation {
          animation: pulse 5s infinite;
        }
        .glow-animation {
          animation: glow 3s infinite;
        }
      `}</style>

      <div
        className={`relative ${className}`}
        style={{ width: size, height: size }}
      >
        {/* Brain Container SVG */}
        <svg
          className={`absolute top-0 left-0 w-full h-full ${
            showAnimation ? 'pulse-animation' : ''
          } filter drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]`}
          viewBox='0 0 100 100'
        >
          <path
            d='M20 40 C20 25, 40 15, 50 15 C60 15, 80 25, 80 40 C80 50, 70 60, 60 65 C70 70, 80 80, 80 90 C80 105, 60 115, 50 115 C40 115, 20 105, 20 90 C20 80, 30 70, 40 65 C30 60, 20 50, 20 40 Z'
            fill='none'
            stroke='#60a5fa'
            strokeWidth='2'
          />
        </svg>

        {/* Circuit Lines SVG */}
        <svg
          className={`absolute top-0 left-0 w-full h-full ${
            showAnimation ? 'glow-animation' : ''
          }`}
          viewBox='0 0 100 100'
        >
          <path
            d='M35 40 H65 M50 40 V80 M35 60 H65 M25 50 H75'
            stroke='#93c5fd'
            strokeWidth='1.5'
            fill='none'
          />
          <circle cx='35' cy='40' r='2' fill='#93c5fd' />
          <circle cx='65' cy='40' r='2' fill='#93c5fd' />
          <circle cx='50' cy='60' r='2' fill='#93c5fd' />
          <circle cx='35' cy='80' r='2' fill='#93c5fd' />
          <circle cx='65' cy='80' r='2' fill='#93c5fd' />
        </svg>
      </div>
    </>
  );
};
export default Logo;
