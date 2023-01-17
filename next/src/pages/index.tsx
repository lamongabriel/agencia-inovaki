import Image from 'next/image';

// Components
import { FiArrowRightCircle } from 'react-icons/fi';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from '../components/UI/Button';
import TopSwiper from '../components/UI/Swiper/TopSwiper';
import CasesSwiper from '../components/UI/Swiper/CasesSwiper';

// Swiper Images
import swiperTop1 from '../assets/images/Home/swiper-1.png';
import swiperTop2 from '../assets/images/Home/swiper-2.png';

import casesSwiper1 from '../assets/images/Home/casesSwiper-1.png';

// Other images
import dottedPattern from '../assets/images/dotted-pattern.png';
import clouds from '../assets/images/Home/clouds.png';
import avatarSlogan from '../assets/images/Home/avatar-slogan.png';
import video from '../assets/images/Home/video.png';

import blingLogo from '../assets/images/logos/logo-bling.png';
import bgBling from '../assets/images/Home/bgBling.png';

import sendgridLogo from '../assets/images/logos/logo-sendgrid.png';
import bgSendgrid from '../assets/images/Home/bgSendgrid.png';

import vtexLogo from '../assets/images/logos/logo-vtex.png';
import bgVtex from '../assets/images/Home/bgVtex.png';

import wordpressLogo from '../assets/images/logos/logo-wordpress.png';
import bgWordpress from '../assets/images/Home/bgWordpress.png';

// Styles
import styles from '../styles/pages/home.module.scss';
import Text from '../components/UI/Text';
import Heading from '../components/UI/Heading';

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

export default function Home() {
  return (
		<>
			<Header />
			<section id="top-home">
				<TopSwiper slides={slides} />
			</section>
			<section className={styles.whoWeAre}>

				<div className={styles.dottedPattern}>
					<Image src={dottedPattern} className="w-100" alt='Textura de bolinhas' />
				</div>

				<p className={`${styles.whoWeAreTitle} d-flex py-3 py-lg-5`}>
					<span>QUEM</span> SOMOS <span>QUEM</span> SOMOS <span>QUEM</span> SOMOS
					<span>QUEM</span> SOMOS <span>QUEM</span> SOMOS <span>QUEM</span> SOMOS
					<span>QUEM</span> SOMOS <span>QUEM</span> SOMOS <span>QUEM</span> SOMOS
					<span>QUEM</span> SOMOS <span>QUEM</span> SOMOS <span>QUEM</span> SOMOS
					<span>QUEM</span> SOMOS <span>QUEM</span> SOMOS <span>QUEM</span> SOMOS
				</p>

				<div className={`${styles.whoWeAreContent} container mx-auto row`}>
					<div className="col-xl-5 col-lg-6 col-12 pb-5 row justify-content-center">
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

						<div className={`${styles.areasBg} col-lg-8 order-lg-2 order-3`}>
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

					<Button rightIcon={FiArrowRightCircle}>
						VER TODOS OS PROJETOS
					</Button>
				</div>
			</section>
			<Footer />
		</>
  );
}
