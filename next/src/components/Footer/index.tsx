import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';
import { FiArrowRightCircle } from 'react-icons/fi';

import Image from 'next/image';
import styles from './styles.module.scss';
import Button from '../UI/Button';

import touch from '../../assets/images/touch.png';

export default function Footer() {
  const router = useRouter();

  return (
		<footer>
			<section className={styles.contactUs}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-3 col-12 text-lg-start text-center order-lg-1 order-2">
							<Button rightIcon={FiArrowRightCircle} onClick={() => router.push('/contato')}>
								FALE CONOSCO
							</Button>
						</div>
						<div className='col-lg-5 col-12 text-lg-start mt-0 mt-lg-5 text-center order-lg-2 order-1 mb-5 mb-lg-0'>
							<h2 className={styles.contactTitle}>
								Precisando
								evoluir o seu
								negócio?
							</h2>
						</div>
					</div>
					<aside className='d-none d-lg-block'>
						<p>
							Programação  -  Design  -  Marketing  -  Gestão
						</p>
					</aside>
					<aside className='d-lg-none mb-0'>
						<p>Programação</p>
						<p>Design</p>
						<p>Marketing</p>
						<p>Gestão</p>
					</aside>
					<div className="mx-auto text-center p-1">
						<Image src={touch} alt='Biometria de um dedo' />
					</div>
				</div>
			</section>

			<section className={styles.footer}>
				<section className="container">
					<div className={styles.footerContent}>
						<div className={`${styles.footerInfo} row`}>
							<div className={`${styles.footerContact} col-lg-6 col-12 ps-lg-5 ps-0 text-center text-lg-start`}>
								<div className={styles.footerContactContainer}>
									<h2>AGÊNCIA <strong> INOVAKI </strong>
									</h2>
									<div className={styles.contacts}>
										<a href="https://wa.me/5524999814022?text=Ol%C3%A1%2C+acessei+o+site+da+Inovaki+e+gostaria+de+fazer+um+or%C3%A7amento.">(24) 99981-4022</a><br/>
										<a href="https://wa.me/5524999110148?text=Ol%C3%A1%2C+acessei+o+site+da+Inovaki+e+gostaria+de+fazer+um+or%C3%A7amento.">(24) 99911-0148</a>
									</div>
									<a>contato@inovaki.com.br</a>
									<p>
										Rua Mariana do Carmo N. Reis, 308 <br />
										Vila Mury - Volta Redonda / RJ
									</p>
								</div>
							</div>

							<div className={`${styles.footerNavigation} col-lg-6 col-12 text-center text-lg-start`}>
								<nav>
									<ul>
										<li><Link href='/'>Home</Link></li>
										<li><Link href='/sobre'>Quem Somos</Link></li>
										<li><Link href='/servicos'>Serviços</Link></li>
										<li><Link href='/projetos'>Projetos</Link></li>
										<li><Link href='/contato'>Contato</Link></li>
										<li><Link href='/orcamento'>Orçamento</Link></li>
									</ul>
									<div className='justify-content-center justify-content-lg-start'>
										<a href="https://www.instagram.com/agenciainovaki/">
											<FaInstagram size={20} color='#FFE604' />
										</a>
										<a href="https://www.facebook.com/agenciainovaki/">
											<FaFacebookF size={20} color='#FFE604' />
										</a>
										<a href="https://wa.me/5524999110148?text=Ol%C3%A1%2C+acessei+o+site+da+Inovaki+e+gostaria+de+fazer+um+or%C3%A7amento.">
											<FaWhatsapp size={20} color='#FFE604' />
										</a>
									</div>
								</nav>
							</div>
						</div>

						<div className={`${styles.footerCopyright} row`}>
							<small>
								Copyright © 2022 INOVAKI. Todos os direitos reservados.
							</small>
						</div>
					</div>
				</section>
			</section>
		</footer>
  );
}
