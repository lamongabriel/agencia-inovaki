import { InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
	label: string
}

export default function Input({ label, className, ...rest }: InputProps) {
  return (
		<div className={className}>
			<label className={styles.label}>
				{label}
			</label>
			<input className={styles.input} {...rest} />
		</div>
  );
}
