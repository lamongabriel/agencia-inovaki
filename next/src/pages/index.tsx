import Image from 'next/image';

// Components
import { FiArrowRightCircle } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Button from '../components/UI/Button';
import TopSwiper from '../components/UI/Swiper/TopSwiper';
import CasesSwiper from '../components/UI/Swiper/CasesSwiper';
import Text from '../components/UI/Text';
import Heading from '../components/UI/Heading';
import Layout from '../components/UI/Layout';

// Swiper Images
import swiperTop1 from '../assets/images/Home/swiper-1.png';
import swiperTop2 from '../assets/images/Home/swiper-2.png';
import casesSwiper1 from '../assets/images/Home/swiper-cases-1.png';

// Other images
import dottedPattern from '../assets/images/dotted-pattern.png';
import clouds from '../assets/images/Home/clouds.png';
import avatarSlogan from '../assets/images/Home/avatar-slogan.png';
import video from '../assets/images/Home/video.png';

import card1 from '../assets/images/Home/card-1.png';
import card2 from '../assets/images/Home/card-2.png';
import card3 from '../assets/images/Home/card-3.png';
import card4 from '../assets/images/Home/card-4.png';

import blingLogo from '../assets/images/logos/logo-bling-white.svg';
import bgBling from '../assets/images/Home/bgBling.png';

import sendgridLogo from '../assets/images/logos/logo-sendgrid.svg';
import bgSendgrid from '../assets/images/Home/bgSendgrid.png';

import vtexLogo from '../assets/images/logos/logo-vtex.svg';
import bgVtex from '../assets/images/Home/bgVtex.png';

import wordpressLogo from '../assets/images/logos/logo-wordpress.svg';
import bgWordpress from '../assets/images/Home/bgWordpress.png';

import logoApae from '../assets/images/logos/logo-apae.png';
import logoApecom from '../assets/images/logos/logo-apecom.png';
import logoAquamar from '../assets/images/logos/logo-aquamar.png';
import logoCustaPouco from '../assets/images/logos/logo-custapouco.png';
import logoFashly from '../assets/images/logos/logo-fashly.png';
import logoForeverLiss from '../assets/images/logos/logo-foreveliss.png';
import logoHope from '../assets/images/logos/logo-hope.png';
import logoIPB from '../assets/images/logos/logo-ipb.png';
import logoMastercar from '../assets/images/logos/logo-mastercar.png';

// Styles
import styles from '../styles/pages/home.module.scss';
import InfiniteText from '../components/UI/InfiniteText';
import 'swiper/css/pagination';
import SEO from '../components/SEO';

const slides = [
  { image: swiperTop1, alt: 'Conheça nossas soluções.', href: 'https://google.com.br' },
  { image: swiperTop2, alt: 'Nós desenvolvemos sua solução com e-commerce.', href: 'https://google.com.br' },
];

const casesSlides = [
  {
    title: 'igreja presbiteriana do brasil - site oficial',
    tag: 'Desenvolvimento Web',
    text: 'Nossa agência foi responsável pelo desenvolvimento do novo site oficial da instituição religiosa no Brasil. O atual website conta com áreas para notícias, eventos, compartilhamento de documenntos e outras funcionalidades importantes para divulgação de conteúdos institucionais e evangelísticos.',
    image: casesSwiper1,
  },
  {
    title: 'igreja presbiteriana do brasil - site oficial',
    tag: 'Desenvolvimento Web',
    text: 'Nossa agência foi responsável pelo desenvolvimento do novo site oficial da instituição religiosa no Brasil. O atual website conta com áreas para notícias, eventos, compartilhamento de documenntos e outras funcionalidades importantes para divulgação de conteúdos institucionais e evangelísticos.',
    image: casesSwiper1,
  },
];

const cardsSwiperConfig = {
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 4,
    },
  },
};

export default function Home() {
  return (
		<Layout>
			<SEO
				pageTitle='Inovaki | Sua identidade Digital'
				pageDescription='Agência digital focada nos resultados da sua empresa, desenvolvemos projetos focados em evolução da comunicação digital e presença online. Forme aqui sua identidade digital!'
				pageUrl='https://inovaki.vercel.app/'
				pageImage='/images/logo-inovaki-square.png'
			/>
			<section>
				<TopSwiper slides={slides} />
			</section>
			<section className={styles.whoWeAre}>

				<div className={styles.dottedPattern}>
					<Image src={dottedPattern} className="w-100" alt='Textura de bolinhas' />
				</div>

				<InfiniteText className={`${styles.whoWeAreTitle} d-flex py-3 py-lg-5`}>
					<strong>QUEM</strong>SOMOS
				</InfiniteText>

				<div className={`${styles.whoWeAreContent} container mx-auto row`}>
					<div className="col-xl-5 col-lg-6 col-12 pb-5 row justify-content-center mx-auto">
						<Image src={avatarSlogan} alt="Não há outro cliente como você ou outra ideia melhor que a sua" />
					</div>

					<div className="col-xl-2 col-lg-1"></div>

					<div className="col-lg-5 col-12 justify-content-center">
						<h2>Aqui, cada projeto é único!</h2>
						<Text>
							Nós pensamos no seu diferencial, SEJA ÚNICO! <br />
							Sua identidade digital começa aqui. A INOVAKI oferece todo suporte para você
							começar bem, nossa equipe é especializada no desenvolvimento
							de identidade visual e comunicação digital.
						</Text>
						<a href="#">&#62; Conheça nossa Agência &#60;</a>
					</div>
				</div>

				<div className={`${styles.areasOfExpertise} container mx-auto`}>
					<Heading>
						<strong>ÁREAS</strong> DE ATUAÇÃO
					</Heading>

					<div className="row mx-auto">

						<div className={`${styles.areasBg} col-lg-4 col-12 col-md-6 order-lg-1 order-2`}>
							<div className={styles.areasOfExpertiseBg} style={{ backgroundImage: `url(${bgWordpress.src})` }}>
								<Image src={wordpressLogo} alt="Wordpress Logo" />
								<p>
									Desenvolvimento e suporte de Websites utilizando a ferramenta Wordpress.
								</p>
								<a href="#">&#62; Saiba Mais</a>
							</div>
						</div>

						<div className={`${styles.areasBg} col-lg-8 order-lg-2 order-1`}>
							<div className={styles.areasOfExpertiseBg} style={{ backgroundImage: `url(${bgVtex.src})` }}>
								<Image src={vtexLogo} alt="Vtex Logo" />
								<p>
									Desenvolvimento e suporte especializado da plataforma Vtex e Vtex IO.
								</p>
								<a href="#">&#62; Saiba Mais</a>
							</div>
						</div>

						<div className={`${styles.areasBg} ${styles.bling} col-lg-8 order-lg-2 order-3`}>
							<div className={styles.areasOfExpertiseBg} style={{ backgroundImage: `url(${bgBling.src})` }}>
								<Image src={blingLogo} alt="Bling Logo" />
								<p>
									Nossa agência trabalha com a integração e desenvolvimento de
									soluções que integrem sua plataforma com as aplicações da Bling.
								</p>
								<a href="#">&#62; Saiba Mais</a>
							</div>
						</div>

						<div className={`${styles.areasBg} col-lg-4 col-12 col-md-6 order-lg-2 order-2`}>
							<div className={styles.areasOfExpertiseBg} style={{ backgroundImage: `url(${bgSendgrid.src})` }}>
								<Image src={sendgridLogo} alt="Sendgrid Logo" />
								<p>
									Gerenciamos e integramos a ferramenta SendGrid em sistema e
									websites para disparos eficientes de e-mail e mail marketing.
								</p>
								<a href="#">&#62; Saiba Mais</a>
							</div>
						</div>

					</div>
				</div>

				<div className={styles.video}>
					<Image src={video} alt="Video background" />
				</div>

				<div className={styles.dottedPattern}>
					<Image src={dottedPattern} className="w-100" alt='Textura de bolinhas' />
				</div>
			</section>
			<section className={styles.casesAndProjects} style={{ backgroundImage: ` url(${clouds.src})` }}>
				<div className='container'>
					<h1>
						<strong>CASES</strong> E PROJETOS
					</h1>

					<CasesSwiper slides={casesSlides} />
					<div className='d-flex'>
						<Button rightIcon={FiArrowRightCircle}>
							VER TODOS OS PROJETOS
						</Button>
					</div>
				</div>
			</section>
			<section className={styles.cards}>
				<Swiper
					breakpoints={cardsSwiperConfig.breakpoints}
					modules={[Pagination]}
					pagination={{ clickable: true }}
				>
					<SwiperSlide>
						<div className={`${styles.cardImg} col-12 col-sm-6 col-lg-3`} style={{ backgroundImage: ` url(${card1.src})` }}>
							<Text>
								<b>DESENVOLVIMENTO</b> E INOVAÇÃO
							</Text>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={`${styles.cardImg} col-12 col-sm-6 col-lg-3`} style={{ backgroundImage: ` url(${card2.src})` }}>
							<p>
								<b>MARKETING</b> ESTRATÉGICO
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={`${styles.cardImg} col-12 col-sm-6 col-lg-3`} style={{ backgroundImage: ` url(${card3.src})` }}>
							<Text>
								<b>COMUNICAÇÃO</b> VISUAL
							</Text>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={`${styles.cardImg} col-12 col-sm-6 col-lg-3`} style={{ backgroundImage: ` url(${card4.src})` }}>
							<Text>
								<b>SISTEMAS</b> PERSONALIZADOS
							</Text>
						</div>
					</SwiperSlide>
				</Swiper>
			</section>
			<section className={styles.clients}>
				<div className="container mx-auto row">
					<div className="col-lg-6 order-lg-1 order-2 mx-auto">
						<div className="row row-cols-lg-3 row-cols-2 justify-content-around">
							<Image src={logoApae} alt='Apae Logo'/>
							<Image src={logoApecom} alt='Apecom Logo'/>
							<Image src={logoAquamar} alt='Aquamar Logo'/>
							<Image src={logoCustaPouco} alt='Custa Pouco Logo'/>
							<Image src={logoFashly} alt='Fashly Logo'/>
							<Image src={logoForeverLiss} alt='Foreverliss Logo'/>
							<Image src={logoHope} alt='Hope Logo'/>
							<Image src={logoIPB} alt='IPB Logo'/>
							<Image src={logoMastercar} alt='Acc Amaral Logo'/>
						</div>
					</div>

					<div className="col-lg-5 offset-lg-1 d-flex flex-column justify-content-center order-lg-2 order-1 mb-5 mb-lg-0">
						<Heading small>
							Mais de <strong>65 CLIENTES</strong> atendidos
						</Heading>
						<Text>
							Temos a sorte de ter desenvolvido projeto para todos os setores de atividade
							e portes de empresas, em diversas formas de programação e universos gráficos.
						</Text>
						<a href="#">&gt; Torne-se nosso parceiro! </a>
					</div>
				</div>
			</section>
		</Layout>
  );
}
