import React from 'react';
import { IconType } from 'react-icons';
import styles from './styles.module.scss';

interface ButtonProps {
	children: string
	bg?: string
	color?: string
	leftIcon?: IconType
	rightIcon?: IconType
}

export default function Button({
  children,
  bg = '#FFE604',
  color = '#000000',
  leftIcon,
  rightIcon,
}: ButtonProps) {
  return (
		<button
			className={styles.button}
			style={{ background: bg, color }}
		>
			<>
				{leftIcon && React.createElement(leftIcon, { size: 30 })}
				{children}
				{rightIcon && React.createElement(rightIcon, { size: 30 })}
			</>
		</button>
  );
}
