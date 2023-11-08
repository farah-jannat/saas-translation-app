import React from 'react';
import { Logo } from './Logo';
import DarkModeToggle from './DarkModeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col items-center p-5 pl-2 sm:flex-row bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />
        <div className='flex flex-1 items-center justify-end space-x-4'>
          {/* language selec  */}
          {/* session && ..  */}
          {/* darkmode  */}
          <DarkModeToggle />
          {/* userbutton  */}
        </div>
      </nav>
    </header>
  );
}

// export  Header
