import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface HeadingProps {
	children?: ReactNode
}

export default function Heading({ children }: HeadingProps) {
  return (
		<h2 className={styles.heading}>{children}</h2>
  );
}
