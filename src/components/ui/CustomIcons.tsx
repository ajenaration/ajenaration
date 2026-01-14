import React from 'react';

export const TiktokIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 16 16" className={className}>
    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
  </svg>
);

export const BlueskyIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M12 10.8c-1.6-3.6-5.3-5.4-8.4-5.4-1 0-1.8.1-2.3.3-.6.2-1 .8-.9 1.5.1 1.4 1.1 5.1 4.8 8.8-3.4 1.3-6.1 4.2-5.1 8.3.1.4.5.7.9.7h.1c3.5 0 7.3-3.3 10.9-9.1 3.6 5.8 7.4 9.1 10.9 9.1h.1c.4 0 .8-.3.9-.7 1-4.1-1.7-7-5.1-8.3 3.7-3.7 4.7-7.4 4.8-8.8.1-.7-.3-1.3-.9-1.5-.5-.2-1.3-.3-2.3-.3-3.1 0-6.8 1.8-8.4 5.4z"/>
  </svg>
);

export const WaveIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {/* Surfer-style curling wave */}
    <path d="M2 15c3-6 8-9 12-7 3 1.8 3.5 4 6 4 1.5 0 2.5-0.8 3.5-1.8" />
    <path d="M6 13c1.5-1.6 3-2 5-1.2 1.8.7 2.8 2 5 2.6" />
    <path d="M9 17c2-1 4-2 7-1.5" opacity="0.9" />
  </svg>
);