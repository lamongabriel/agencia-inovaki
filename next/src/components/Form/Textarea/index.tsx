import { forwardRef, ForwardRefRenderFunction, TextareaHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

import styles from './styles.module.scss';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
	label: string
	errors?: FieldError
}

const TextAreaBase:ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = ({
  label, name, id, className, errors, ...rest
}, ref) => (
		<div className={className}>
			<label className={styles.label}>
				{label}
			</label>
			<textarea
				ref={ref}
				name={name}
				id={name}
				className={styles.textArea}
				rows={8}
				{...rest}
			/>
			{!!errors && <span className={styles.error}>{errors.message}</span>}
		</div>
);

const Textarea = forwardRef(TextAreaBase);
export default Textarea;
