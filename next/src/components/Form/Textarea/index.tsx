import { TextareaHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
	label: string
}

export default function TextArea({ label, className, ...rest }: TextAreaProps) {
  return (
		<div className={className}>
			<label className={styles.label}>
				{label}
			</label>
			<textarea className={styles.textArea} rows={8} {...rest} />
		</div>
  );
}
