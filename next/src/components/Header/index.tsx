import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';

import logoInovaki from '../../assets/images/logos/logo-inovaki.png';
import logoInovakiWhite from '../../assets/images/logos/logo-inovaki-white.png';
import styles from './styles.module.scss';

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
  const Router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [headerBg, setHeaderBg] = useState(Router.asPath !== '/');

  const menuRef = useRef<HTMLDivElement>(null);

  function checkActiveLink(path: string, href: string) {
    if (path === '/') {
      return href === '/';
    }

    return path.startsWith(href);
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflowY = 'hidden';
      return;
    }
    document.body.style.overflowY = 'auto';
  }, [menuOpen]);

  useEffect(() => {
    function onScroll(e: Event) {
      const window = e.currentTarget as Window;

      if (Router.asPath !== '/') return;

      if (window.scrollY === 0) {
        setHeaderBg(false);
        return;
      }

      setHeaderBg(true);
    }

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [Router]);

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

  function getCurrentLogo() {
    if (headerBg || menuOpen) {
      return logoInovakiWhite;
    }

    return logoInovaki;
  }

  return (
		<>
			<header className={`${styles.header} ${(headerBg && !menuOpen) && styles.headerBg}`}>
				<Link href='/'>
					<Image
						priority
						src={getCurrentLogo()}
						alt='Logo Inovaki'
					/>
				</Link>
				<div className={styles.btnBox}>
					<button
						className={menuOpen ? styles.btnOpen : styles.btnClosed}
						onClick={handleToggleMenu}
						aria-haspopup="true"
						aria-controls="mainmenu"
						aria-expanded={menuOpen}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</header>
			<div
				id='mainmenu'
				className={styles.fsmenu}
				ref={menuRef}
				aria-hidden={!menuOpen}
			>
				<div className={styles['fsmenu--container']}>
					<div className={styles['fsmenu--text-block']}>
						<div className={styles['fsmenu--text-container']}>
							<ul className={styles['fsmenu--list']} role='menu'>
								{headerLinks.map((opt, index) => (
									<MenuItem
										key={index}
										name={opt.name}
										image={opt.image}
										href={opt.href}
										active={checkActiveLink(Router.asPath, opt.href)}
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
