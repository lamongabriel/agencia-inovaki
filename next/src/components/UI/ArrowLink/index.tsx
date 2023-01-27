import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface ArrowLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
	children: string
	href: string
}

export default function ArrowLink({
  href, children, className, ...rest
}: ArrowLinkProps) {
  const classes = className ? `${className} ${styles.link}` : styles.link;
  return (
		<Link href={href} className={classes} {...rest}>
			&gt; { children } &lt;
		</Link>
  );
}
