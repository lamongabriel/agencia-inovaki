import Image from 'next/image';

// Components
import Layout from '../components/UI/Layout';
import BannerTop from '../components/UI/Banner/BannerTop';
import Text from '../components/UI/Text';

// Images
import bg from '../assets/images/Servicos/bg-sobre.png';
import arrowDown from '../assets/images/Servicos/arrow-down.png';

import logoVtex from '../assets/images/logos/logo-vtex.svg';
import logoBling from '../assets/images/logos/logo-bling.svg';
import logoSendgrid from '../assets/images/logos/logo-sendgrid.svg';
import logoWordpress from '../assets/images/logos/logo-wordpress.svg';

// Styles
import styles from '../styles/pages/servicos.module.scss';

export default function Servicos() {
  return (
		<Layout>
			<BannerTop auxiliaryText="O que podemos fazer pelo seu negócio" image={bg}>
				<strong>ATUAÇÃO</strong> E SERVIÇOS
			</BannerTop>
			<section className={styles.areasOfExperience}>
				<div className="container d-flex justify-content-center align-items-center pb-5">
					<Image src={arrowDown} alt='Seta apontando para baixo' />
				</div>

				<div className={`${styles.experience} container mx-auto`}>
					<div className={`${styles.experienceContent} row pt-3`}>
						<div className="col-lg-5 pb-5">
							<Image src={logoVtex} alt='Logo VTEX'/>
						</div>
						<div className="col-lg-5 offset-lg-2 pb-5">
							<Text>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industrys standard
								dummy text ever since the 1500s.
							</Text>
							<a href="#">&gt; Saiba Mais &lt;</a>
						</div>
					</div>

					<hr className={styles.hr1} />

					<div className={`${styles.experienceContent} row pt-3`}>
						<div className="col-lg-5 offset-lg-2 order-lg-2 order-1 pb-5">
							<Image src={logoBling} alt='Logo bling' />
						</div>
						<div className="col-lg-5 order-lg-1 order-2 pb-5 text-end">
							<Text>
								Nossa agência trabalha com a integração e desenvolvimento de
								soluções que integrem sua plataforma com as aplicações da Bling.
							</Text>
							<a href="#">&gt; Saiba Mais &lt;</a>
						</div>
					</div>

					<hr className={styles.hr2} />

					<div className={`${styles.experienceContent} row pt-3`}>
						<div className="col-lg-5 pb-5">
						<Image src={logoSendgrid} alt='Logo Sendgrid' />
						</div>
						<div className="col-lg-5 offset-lg-2 pb-5">
							<Text>
								Gerenciamos e integramos a ferramenta SendGrid em sistema e
								websites para disparos eficientes de e-mail e mail marketing.
							</Text>
							<a href="#">&gt; Saiba Mais &lt;</a>
						</div>
					</div>

					<hr className={styles.hr1} />

					<div className={`${styles.experienceContent} row pt-3`}>
						<div className="col-lg-5 offset-lg-2 order-lg-2 order-1 pb-5">
							<Image src={logoWordpress} alt='Logo Wordpress' />
						</div>
						<div className="col-lg-5 order-lg-1 order-2 pb-5 text-end">
							<Text>
								Desenvolvimento, Suporte e Manuteção em Websites com a
								utilização da ferramenta Wordpress. A Inovaki conta com
								profissionais capacitados e com experiência.
							</Text>
							<a href="#">&gt; Saiba Mais &lt;</a>
						</div>
					</div>
				</div>
			</section>
		</Layout>
  );
}
