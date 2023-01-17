import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface HeadingProps {
	children?: ReactNode
	className?: string
	small?: boolean
}

export default function Heading({ children, className, small }: HeadingProps) {
  return (
		<h2 className={`${small ? styles.small : styles.normal} ${className}`}>{children}</h2>
  );
}
