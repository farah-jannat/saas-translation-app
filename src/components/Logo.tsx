import React from 'react';
import LogoImage from '@logos/images.png';
import { AspectRatio } from './ui/aspect-ratio';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/">
      go home
      <div>
        <AspectRatio
          ratio={16 / 9}
          className="flex items center justify-center"
        >
          <image
            priority
            src={LogoImage}
            alt="Anychat logo"
            className="rounded-full dark:filter dark:invert"
          />
        </AspectRatio>
      </div>
    </Link>
  );
}

// export default Logo
