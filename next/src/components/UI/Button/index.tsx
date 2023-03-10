import React, { ButtonHTMLAttributes } from 'react';

import { IconType } from 'react-icons';
import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	children?: string
	small?: boolean
	bg?: string
	color?: string
	leftIcon?: IconType
	rightIcon?: IconType
}

export default function Button({
  children,
  small = false,
  bg = '#FFE604',
  color = '#000000',
  leftIcon,
  rightIcon,
  className,
  ...rest
}: ButtonProps) {
  return (
		<button
			className={`${styles.button} ${className}`}
			style={{
			  background: bg,
			  color,
			  fontSize: small ? '1rem' : '1.25rem',
			  height: small ? '2.5rem' : '4rem',
			  padding: small ? '0 1.5rem' : '0 2.3rem',
			}}
			{...rest}
		>
			<>
				{leftIcon && React.createElement(leftIcon, { size: small ? 16 : 30 })}
				{children}
				{rightIcon && React.createElement(rightIcon, { size: small ? 16 : 30 })}
			</>
		</button>
  );
}
