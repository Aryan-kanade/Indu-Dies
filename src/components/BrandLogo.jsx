import logoSrc from '../assets/logo.png';

/**
 * Official Indu Dyes mark — original artwork only (not redrawn).
 * Size props scale the whole mark; the symbol itself is unchanged.
 */
export default function BrandLogo({
  className = '',
  imgClassName = '',
  size = 'md',
}) {
  // Slightly larger defaults so the baked-in wordmark reads clearly
  const heights = {
    sm: 'h-11',
    md: 'h-14 sm:h-16',
    lg: 'h-16 sm:h-20',
    xl: 'h-20 sm:h-24 md:h-28',
  };

  return (
    <img
      src={logoSrc}
      alt="Indu Dyes"
      width={560}
      height={420}
      decoding="async"
      className={`${heights[size] || heights.md} w-auto object-contain object-left select-none ${className} ${imgClassName}`}
    />
  );
}
