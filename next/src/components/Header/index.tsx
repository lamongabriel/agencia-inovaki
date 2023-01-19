import { useEffect, useState, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';

import { FaBars, FaTimes } from 'react-icons/fa';
import logoInovaki from '../../assets/images/logos/logo-inovaki.png';
import logoInovakiWhite from '../../assets/images/logos/logo-inovaki-white.png';
import styles from './styles.module.scss';

import Button from '../UI/Button';
import MenuItem from './MenuItem';

// images
import imgContato from '../../assets/images/header/header-contato.png';
import imgOrcamento from '../../assets/images/header/header-orcamentos.png';
import imgProjetos from '../../assets/images/header/header-projetos.png';
import imgServicos from '../../assets/images/header/header-servicos.png';
import imgSobre from '../../assets/images/header/header-sobre.png';

interface HeaderLink {
	name: string
	image: StaticImageData
	href: string
}

const headerLinks: HeaderLink[] = [
  {
    name: 'QUEM SOMOS',
    image: imgSobre,
    href: '/sobre',
  },
  {
    name: 'SERVIÇOS',
    image: imgServicos,
    href: '/servicos',
  },
  {
    name: 'PROJETOS',
    image: imgProjetos,
    href: '/projetos',
  },
  {
    name: 'CONTATO',
    image: imgContato,
    href: '/contato',
  },
  {
    name: 'ORÇAMENTO',
    image: imgOrcamento,
    href: '/404',
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflowY = 'hidden';
      return;
    }
    document.body.style.overflowY = 'auto';
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
			<header className={styles.header}>
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
								{headerLinks.map((opt, index) => (
									<MenuItem
										key={index}
										name={opt.name}
										image={opt.image}
										href={opt.href}
									/>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
  );
}
