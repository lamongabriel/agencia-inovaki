import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

import { FaBars, FaTimes } from 'react-icons/fa';
import logoInovaki from '../../assets/images/logo-inovaki.png';
import logoInovakiWhite from '../../assets/images/logo-inovaki-white.png';
import styles from './styles.module.scss';

import Button from '../UI/Button';
import MenuItem from './MenuItem';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'auto';
  }, [menuOpen]);

  function handleToggleMenu() {
    if (!menuOpen) {
      menuRef.current?.classList.add(styles['is-active']);
      menuRef.current?.classList.remove(styles['close-menu']);
    } else {
      menuRef.current?.classList.remove(styles['is-active']);
      menuRef.current?.classList.add(styles['close-menu']);
    }
    setMenuOpen((prev) => !prev);
  }

  return (
		<>
			<header className={`${styles.header} container px-2  px-md-0`}>
				<Image
					src={menuOpen ? logoInovakiWhite : logoInovaki}
					alt='Logo Inovaki'
				/>
				<Button
					color={menuOpen ? '#fff' : '#000'}
					bg={menuOpen ? '#000' : undefined}
					leftIcon={menuOpen ? FaTimes : FaBars}
					small
					onClick={handleToggleMenu}
				/>
			</header>
			<div
				className={styles.fsmenu}
				ref={menuRef}
			>
				<div className={styles['fsmenu--container']}>
					<div className={styles['fsmenu--text-block']}>
						<div className={styles['fsmenu--text-container']}>
							<ul className={styles['fsmenu--list']}>
								<MenuItem
									name='Agentur'
									image='https://witwinkel.ch/themes/witwinkel/assets/images/content/WITWINKEL-buero-albisrieden-2019.jpg'
									href='https://google.com.br'
								/>
								<MenuItem
									name='Portfolio'
									image='https://witwinkel.ch/themes/witwinkel/assets/projects/gourmet-festival-2019/content12.jpg'
									href='https://google.com.br'
								/>
								<MenuItem
									name='Team'
									image='https://witwinkel.ch/themes/witwinkel/assets/images/team/wirsind-witwinkel.jpg'
									href='https://google.com.br'
								/>
								<MenuItem
									name='Kontakt'
									image='https://witwinkel.ch/themes/witwinkel/assets/projects/metzler/content1.jpg'
									href='https://google.com.br'
								/>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
  );
}
