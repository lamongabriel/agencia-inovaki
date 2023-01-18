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
  ...rest
}: ButtonProps) {
  return (
		<button
			className={styles.button}
			style={{
			  background: bg,
			  color,
			  height: small ? '2rem' : '4rem',
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
