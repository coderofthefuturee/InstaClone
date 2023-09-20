import React from 'react';
import Image from 'next/image';

export default function Story({ className="relative z-10 h-15 p-[2px] hover:p-[4px] rounded-full hover:scale-125 transition-transform duration-200 ease-out bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500", src, width = 50, height = 50, alt = 'user-image' }) {
  return (
    <div>
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
