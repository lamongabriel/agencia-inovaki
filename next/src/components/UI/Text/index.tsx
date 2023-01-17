import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface TextProps {
	children?: ReactNode
}

export default function Text({ children }: TextProps) {
  return (
		<p className={styles.text}>{children}</p>
  );
}
