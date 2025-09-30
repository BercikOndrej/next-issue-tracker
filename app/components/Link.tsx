import { Link as RadixLink } from '@radix-ui/themes';
import NextLink from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
}

const Link = ({ children, href }: Props) => {
  return (
    <RadixLink asChild>
      <NextLink href={href} passHref>
        {children}
      </NextLink>
    </RadixLink>
  );
};

export default Link;
