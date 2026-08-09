import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string; // base name without extension, e.g., "me" or "travling"
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  widths?: number[]; // available widths
  priority?: boolean; // for above-fold images
  sizes?: string; // responsive sizes attribute
  fill?: boolean; // for hero/profile images that fill container
}

const AVIF_EXT = '.avif';
const WEBP_EXT = '.webp';
const JPG_EXT = '.jpg';
const BLUR_EXT = '-blur.webp';
const OPTIMIZED_PATH = '/optimized/';

export function OptimizedImage({
  src,
  alt,
  className = '',
  style,
  widths = [400, 600, 800, 1000],
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
  fill = false,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px', threshold: 0.01 }
    );

    const imgElement = document.querySelector(`[data-img-src="${src}"]`);
    if (imgElement) observer.observe(imgElement);

    return () => observer.disconnect();
  }, [src, priority, isInView]);

  // Build srcSet for each format
  const buildSrcSet = (ext: string) =>
    widths
      .map((w) => `${OPTIMIZED_PATH}${src}-${w}w${ext} ${w}w`)
      .join(', ');

  const avifSrcSet = buildSrcSet(AVIF_EXT);
  const webpSrcSet = buildSrcSet(WEBP_EXT);
  const jpgSrcSet = buildSrcSet(JPG_EXT);

  const blurSrc = `${OPTIMIZED_PATH}${src}${BLUR_EXT}`;

  if (hasError) {
    return (
      <div
        className={`inline-block bg-gray-800 text-center ${className}`}
        style={style}
        role="img"
        aria-label={`Failed to load: ${alt}`}
      >
        <div className="flex items-center justify-center w-full h-full text-gray-500">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <path d="M21 15l-5-5L5 21"/>
          </svg>
        </div>
      </div>
    );
  }

  const containerStyle = {
    ...style,
    position: 'relative' as const,
    overflow: 'hidden' as const,
  };

  const imgStyle = {
    width: '100%',
    height: fill ? '100%' : 'auto',
    display: 'block' as const,
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 300ms ease-out',
    objectFit: fill ? 'cover' : 'contain',
  };

  const blurStyle = {
    position: 'absolute' as const,
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'blur(20px)',
    transform: 'scale(1.1)',
    opacity: isLoaded ? 0 : 1,
    transition: 'opacity 300ms ease-out',
    pointerEvents: 'none' as const,
  };

  return (
    <picture data-img-src={src} className={className}>
      {/* AVIF - best compression */}
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      {/* WebP - good compression, wide support */}
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      {/* JPEG - fallback */}
      <source type="image/jpeg" srcSet={jpgSrcSet} sizes={sizes} />

      {/* Actual image */}
      <img
        src={`${OPTIMIZED_PATH}${src}-${Math.max(...widths)}w${JPG_EXT}`}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchpriority={priority ? 'high' : 'auto'}
        style={imgStyle}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        widths={widths}
        sizes={sizes}
      />

      {/* Blur placeholder */}
      {!isLoaded && (
        <img
          src={blurSrc}
          alt=""
          aria-hidden="true"
          style={blurStyle}
          onLoad={() => {}}
        />
      )}
    </picture>
  );
}

// Simplified version for project cards that fill their container
export function ProjectImage({
  src,
  alt,
  className = '',
  priority = false,
  fill = true, // Default to fill for project cards to ensure object-cover works
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
}) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={className}
      widths={[400, 600, 800]}
      priority={priority}
      sizes="(max-width: 768px) 100vw, 50vw"
      fill={fill}
    />
  );
}

// For hero/profile images that fill their container
export function HeroImage({
  src,
  alt,
  className = '',
  priority = true,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={className}
      widths={[600, 800, 1000]}
      priority={priority}
      sizes="(max-width: 768px) 100vw, 50vw"
      fill
    />
  );
}