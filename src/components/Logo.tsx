import React from 'react';
import LogoImage from '../images/logos/images.png';
import { AspectRatio } from './ui/aspect-ratio';
import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <div>
    <Link href="/">
      go home
      <div className='flex items-center w-72 h-14 bg-red-800'>
        <AspectRatio
          ratio={16 / 9}
          className="flex items center justify-center"
        >
          <Image 
            priority
            src={LogoImage}
            alt="Anychat logo"
            className="rounded-full dark:filter dark:invert"
          />
        </AspectRatio>
      </div>
    </Link>
</div>
  );
}

// export default Logo
