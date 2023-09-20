import React from 'react';
import Image from 'next/image';

export default function Story({ className="h-15 p-[2px] border-2 hover:border-4 border-red-500 hover:border-purple-500 cursor-pointer rounded-full hover:scale-125 transition-transform duration-200 ease-out", src, width = 50, height = 50, alt = 'user-image' }) {
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
