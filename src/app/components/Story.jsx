import React from 'react';
import Image from 'next/image';

export default function Story({ className="h-15 cursor-pointer rounded-full hover:scale-125 transition-transform duration-200 ease-out", src, width = 50, height = 50, alt = 'user-image' }) {
  return (
    <div className={className}>
      <Image 
        className={className}
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  );
}
