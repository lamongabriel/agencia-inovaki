import { InputHTMLAttributes, ForwardRefRenderFunction, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	errors?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    label, name, className, errors = null, ...rest
  },
  ref,
) => (
	<div className={className}>
		<label className={styles.label}>
			{label}
		</label>
		<input
			id={name}
			name={name}
			ref={ref}
			className={styles.input}
			{...rest}
		/>
		{!!errors && <span className={styles.error}>{errors.message}</span>}
	</div>
);

const Input = forwardRef(InputBase);
export default Input;
