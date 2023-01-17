import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface TextProps {
	children?: ReactNode
	className?: string
}

export default function Text({ children, className }: TextProps) {
  return (
		<p className={`${styles.text} ${className}`}>{children}</p>
  );
}
