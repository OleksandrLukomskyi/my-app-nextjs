import Link from 'next/link';
import { ReactNode } from 'react';

export function AppLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return <Link href={href}>{children}</Link>;
}
