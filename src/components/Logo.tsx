import React from 'react';
import LogoImage from '../images/logos/logo-svgrepo-com.svg';
import { AspectRatio } from './ui/aspect-ratio';
import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <div>
    <Link href="/" prefetch={false} className='overflow-hidden'>
      <div className='flex items-center w-72 h-14'>
        <AspectRatio
          ratio={19 / 4}
          className="flex items center justify-center"
        >
          <Image 
            priority
            src={LogoImage}
            alt="Anychat logo"
            className="dark:filter dark:invert"
          />
        </AspectRatio>
      </div>
    </Link>
</div>
  );
}

// export default Logo
