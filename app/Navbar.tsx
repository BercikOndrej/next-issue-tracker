'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IoBug } from 'react-icons/io5';
import classNames from 'classnames';

const Navbar = () => {
  const pathname = usePathname();
  const items = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];

  return (
    <div className='flex gap-6 h-14 items-center px-6 border-b'>
      <Link href='/'>
        <IoBug size={28} />
      </Link>
      <ul className='flex gap-4 '>
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={classNames({
                'text-zinc-800 font-semibold': pathname === item.href,
                'text-zinc-500': pathname !== item.href,
                'hover:text-zinc-700 transition-all duration-300': true,
              })}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
