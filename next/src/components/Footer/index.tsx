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
  return (
		<footer>
			<section className={styles.contactUs}>
				<div className="container mx-auto">
					<div className="row justify-content-center">
						<div className="col-lg-3 col-12 text-lg-start text-center order-lg-1 order-2">
							<Button rightIcon={FiArrowRightCircle}>
								FALE CONOSCO
							</Button>
						</div>
						<div className={`${styles.contactTitle} col-lg-5 col-12 text-lg-start text-center order-lg-2 order-1 mb-5 mb-lg-0`}>
							<h2>
								Precisando
								evoluir o seu
								negócio?
							</h2>
						</div>
					</div>
					<p>Programação  -  Design  -  Marketing  -  Gestão</p>
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
										<a href="#">(24) 99981-4022</a>
										<a href="#">(24) 99911-0148</a>
									</div>
									<a href="#">contato@inovaki.com.br</a>
									<p>
										Rua Mariana do Carmo N. Reis, 308 <br />
										Vila Mury - Volta Redonda / RJ
									</p>
								</div>
							</div>

							<div className={`${styles.footerNavigation} col-lg-6 col-12 text-center text-lg-start`}>
								<nav>
									<ul>
										<li>Home</li>
										<li>Quem Somos</li>
										<li>Cases e Projetos</li>
										<li>Atuação</li>
										<li>Fale Conosco</li>
									</ul>
									<div className='justify-content-center justify-content-lg-start'>
										<a href="#">
											<FaInstagram size={20} color='#FFE604' />
										</a>
										<a href="#">
											<FaFacebookF size={20} color='#FFE604' />
										</a>
										<a href="#">
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
