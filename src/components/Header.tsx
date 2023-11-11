import React from 'react';
import { Logo } from './Logo';
import DarkModeToggle from './DarkModeToggle';
import UserProfile from './UserProfile';
import { getServerSession } from 'next-auth';
import { authOptions } from '@src/auth';
import Link from 'next/link';
import { MessagesSquareIcon } from 'lucide-react';
import CreateChatButton from './CreateChatButton';

async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col items-center p-5 pl-2 sm:flex-row bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* language selec  */}
          {/* session && ..  */}
          {/* darkmode  */}
          {session ? (
            <>
              <Link href={'/chat'} prefetch={false}>
                <MessagesSquareIcon className="text-black dark:text-white" />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <Link href={'/pricing'}>pricing</Link>
          )}

          <DarkModeToggle />
          {/* userbutton  */}
          <UserProfile session={session} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
