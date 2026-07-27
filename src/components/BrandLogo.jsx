import logoMark from '../assets/logo-mark.png';

/**
 * Original Indu Dyes symbol (unchanged) + clear HTML wordmark.
 * Baked-in black text on the sun was unreadable; wordmark sits beside the mark.
 */
export default function BrandLogo({
  className = '',
  imgClassName = '',
  size = 'md',
}) {
  const sizes = {
    sm: { mark: 'h-9', text: 'text-base' },
    md: { mark: 'h-11 sm:h-12', text: 'text-lg sm:text-xl' },
    lg: { mark: 'h-14 sm:h-16', text: 'text-2xl sm:text-3xl' },
    xl: { mark: 'h-16 sm:h-20', text: 'text-3xl sm:text-4xl' },
  };

  const s = sizes[size] || sizes.md;

  return (
    <span
      className={`inline-flex items-center gap-0.5 sm:gap-1 min-w-0 ${className}`}
      aria-label="Indu Dyes"
    >
      <img
        src={logoMark}
        alt=""
        width={480}
        height={356}
        decoding="async"
        aria-hidden="true"
        className={`${s.mark} w-auto object-contain object-left select-none shrink-0 ${imgClassName}`}
      />
      <span
        className={`font-serif font-bold tracking-tight text-foreground leading-none whitespace-nowrap -ml-1 ${s.text}`}
      >
        indu dyes
      </span>
    </span>
  );
}
