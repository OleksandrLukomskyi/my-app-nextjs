import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './app-link.module.css';

export function AppLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link className={styles.root} href={href}>
      {children}
    </Link>
  );
}
