import { BaseHTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.scss';

interface InfiniteTextProps extends BaseHTMLAttributes<HTMLHeadingElement>{
	children: ReactNode
	color?: string
}

export default function InfiniteText({
  children, color = '#FFC804', className, ...rest
}: InfiniteTextProps) {
  const arr = [...Array(15)];

  return (
		<div className={`${styles.infiniteText} ${className}`} style={{ color }} {...rest}>
			{arr.map((_, index) => <span key={index}>{children}</span>)}
		</div>
  );
}
