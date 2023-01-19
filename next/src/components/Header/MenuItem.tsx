import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import styles from './styles.module.scss';

interface MenuItemProps {
	name: string
	href: string
	image: StaticImageData
}

export default function MenuItem({ name, image, href }: MenuItemProps) {
  const ref = useRef<HTMLLIElement>(null);

  function handleHover(entered: boolean) {
    if (entered) {
      ref.current?.classList.add(styles.open);
      ref.current?.classList.remove(styles['is-closing']);
      return;
    }
    ref.current?.classList.remove(styles.open);
    ref.current?.classList.add(styles['is-closing']);
  }

  return (
		<li
			className={styles['fsmenu--list-element']}
			onMouseOver={() => handleHover(true)}
			onMouseOut={() => handleHover(false)}
			ref={ref}
		>
			<Link href={href}>
				<span>{name}</span>
			</Link>
			<div className={styles['fsmenu--scrolling-text']}>
				<span>{name}</span>
				<span>{name}</span>
				<span>{name}</span>
				<span>{name}</span>
				<span>{name}</span>
			</div>
			<div className={styles['fsmenu--link-img']}>
				<div className={styles['fsmenu--img-container']}>
					<Image src={image} alt={name} />
				</div>
			</div>
		</li>
  );
}
