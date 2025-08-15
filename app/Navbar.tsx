import Link from 'next/link';
import React from 'react';
import { IoBug } from 'react-icons/io5';

const Navbar = () => {
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
              className='text-zinc-500 hover:text-zinc-300 transition-all duration-300'
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
