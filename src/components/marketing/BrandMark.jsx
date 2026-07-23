const BRAND_ICON = '/favicon.svg?v=20260723';

export default function BrandMark({ className = 'w-7 h-7', alt = 'Precision Studios' }) {
  return (
    <img
      src={BRAND_ICON}
      alt={alt}
      className={`object-contain shrink-0 ${className}`}
      width={28}
      height={28}
    />
  );
}
