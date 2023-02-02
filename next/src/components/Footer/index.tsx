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
									<a href='mailto:contato@inovaki.com.br'>contato@inovaki.com.br</a>
									<p>
										<a href="https://www.google.com/maps/dir/-22.5246462,-44.1055362/Av.+Mariana+do+Carmo+Nogueira+Reis,+308+-+Vila+Mury,+Volta+Redonda+-+RJ,+27281-520/@-22.5113303,-44.1106322,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x9e981b77d93bed:0xed98f836196b9588!2m2!1d-44.1079096!2d-22.5009416">
											Rua Mariana do Carmo N. Reis, 308 <br />
											Vila Mury - Volta Redonda / RJ
										</a>
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
