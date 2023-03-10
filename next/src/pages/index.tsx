import Link from 'next/link';
import Image from 'next/image';

// Components
import { FiArrowRightCircle } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useRouter } from 'next/router';
import { Reveal } from 'react-awesome-reveal';
import Button from '../components/UI/Button';
import TopSwiper from '../components/UI/Swiper/TopSwiper';
import CasesSwiper from '../components/UI/Swiper/CasesSwiper';
import Text from '../components/UI/Text';
import Heading from '../components/UI/Heading';
import Layout from '../components/UI/Layout';
import SEO from '../components/SEO';
import InfiniteText from '../components/UI/InfiniteText';

// Swiper Images
import swiperTop1 from '../assets/images/Home/swiper-1.png';
import swiperTop3 from '../assets/images/Home/swiper-3.png';
import casesSwiper1 from '../assets/images/Home/swiper-cases-1.png';
import casesSwiper2 from '../assets/images/Home/swiper-cases-2.png';
import casesSwiper3 from '../assets/images/Home/swiper-cases-3.png';

// Other images
import dottedPattern from '../assets/images/dotted-pattern.png';
import clouds from '../assets/images/Home/clouds.png';
import avatarSlogan from '../assets/images/Home/avatar-slogan.png';
// import video from '../assets/images/Home/video.png';

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
import 'swiper/css/pagination';

const slides = [
  { image: swiperTop1, alt: 'Conhe??a nossas solu????es.', href: 'https://google.com.br' },
  { image: swiperTop3, alt: 'N??s desenvolvemos sua solu????o com e-commerce.', href: 'https://google.com.br' },
];

const casesSlides = [
  {
    title: 'Igreja Presbiteriana do Brasil - Site Oficial',
    tag: 'Desenvolvimento Web',
    text: 'Nossa ag??ncia foi respons??vel pelo desenvolvimento do novo site oficial da institui????o religiosa no Brasil. O atual website conta com ??reas para not??cias, eventos, compartilhamento de documenntos e outras funcionalidades importantes para divulga????o de conte??dos institucionais e evangel??sticos.',
    image: casesSwiper1,
    link: '/projetos/ipb',
  },
  {
    title: 'Aquamar',
    tag: 'E-commerce',
    text: 'Atuamos diretamente no E-commerce da marca prestando Suporte e Manuten????o na plataforma Vtex e desenvolvendo solu????es inovadoras para o  p??blico do varejo.',
    image: casesSwiper2,
    link: '/projetos/aquamar',
  },
  {
    title: 'Fashion Masks',
    tag: 'E-commerce',
    text: 'Em 2020 fomos desafiados por uma pandemia e abra??amos um projeto com foco em ajudar pessoas e fam??lias. Em menos de 1 m??s a primeira loja virtual da Fashion Masks j?? estava liberada para acesso e recebendo pedidos de todo Brasil. Chegamos tamb??m em um resultado incr??vel onde em menos de 6 meses alcan??amos o resultado de arrecada????o de mais de R$1 milh??o.',
    image: casesSwiper3,
    link: '/projetos/fashionmasks',
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
  const router = useRouter();

  return (
		<Layout>
			<SEO
				pageTitle='Inovaki | Sua identidade Digital'
				pageDescription='Ag??ncia digital focada nos resultados da sua empresa, desenvolvemos projetos focados em evolu????o da comunica????o digital e presen??a online. Forme aqui sua identidade digital!'
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
						<Image src={avatarSlogan} alt="N??o h?? outro cliente como voc?? ou outra ideia melhor que a sua" />
					</div>

					<div className="col-xl-2 col-lg-1"></div>

					<div className="col-lg-5 col-12 justify-content-center">
						<h2>Aqui, cada projeto ?? ??nico!</h2>
						<Text>
							N??s pensamos no seu diferencial, SEJA ??NICO! <br />
							Sua identidade digital come??a aqui. A INOVAKI oferece todo suporte para voc??
							come??ar bem, nossa equipe ?? especializada no desenvolvimento
							de identidade visual e comunica????o digital.
						</Text>
						<Link href="/sobre">&#62; Conhe??a nossa Ag??ncia &#60;</Link>
					</div>
				</div>

				<div className={`${styles.areasOfExpertise} container mx-auto`}>
					<Heading>
						<strong>??REAS</strong> DE ATUA????O
					</Heading>

					<div className="row mx-auto">

						<Reveal triggerOnce className={`${styles.areasBg} col-lg-4 col-12 col-md-6 order-lg-1 order-2`}>
							<div className={styles.areasOfExpertiseBg} style={{ backgroundImage: `url(${bgWordpress.src})` }}>
								<Image src={wordpressLogo} alt="Wordpress Logo" />
								<p>
									Desenvolvimento e suporte de Websites utilizando a ferramenta Wordpress.
								</p>
								<Link target="_blank" href="https://br.wordpress.org/">&#62; Saiba Mais</Link>
							</div>
						</Reveal>

						<Reveal triggerOnce delay={200} className={`${styles.areasBg} ${styles.vtex} col-lg-8 order-lg-2 order-1`}>
							<div className={styles.areasOfExpertiseBg} style={{ backgroundImage: `url(${bgVtex.src})` }}>
								<Image src={vtexLogo} alt="Vtex Logo" />
								<p>
									Desenvolvimento e suporte especializado da plataforma Vtex e Vtex IO.
									D?? o pr??ximo passo na sua jornada com uma plataforma
									de com??rcio completa para os desafios de hoje.
								</p>
								<Link target="_blank" href="https://vtex.com/br-pt/">&#62; Saiba Mais</Link>
							</div>
						</Reveal>

						<Reveal triggerOnce delay={400} className={`${styles.areasBg} ${styles.bling} col-lg-8 order-lg-2 order-3`}>
							<div className={styles.areasOfExpertiseBg} style={{ backgroundImage: `url(${bgBling.src})` }}>
								<Image src={blingLogo} alt="Bling Logo" />
								<p>
									Nossa ag??ncia trabalha com a integra????o e desenvolvimento de
									solu????es que integrem sua plataforma com as aplica????es da Bling.
								</p>
								<Link target="_blank" href="https://www.bling.com.br/">&#62; Saiba Mais</Link>
							</div>
						</Reveal>

						<Reveal triggerOnce delay={600} className={`${styles.areasBg} col-lg-4 col-12 col-md-6 order-lg-2 order-2`}>
							<div className={styles.areasOfExpertiseBg} style={{ backgroundImage: `url(${bgSendgrid.src})` }}>
								<Image src={sendgridLogo} alt="Sendgrid Logo" />
								<p>
									Gerenciamos e integramos a ferramenta SendGrid em sistema e
									websites para disparos eficientes de e-mail e mail marketing.
								</p>
								<Link target="_blank" href="https://sendgrid.com/">&#62; Saiba Mais</Link>
							</div>
						</Reveal>

					</div>
				</div>

			{/*
				<div className={styles.video} style={{
				  backgroundImage: `url(${bgTeste.src})`,
				}}>
					<div className={styles.gradient1}></div>
					<div className={styles.parallaxText}>
						<Image src={bgText} alt='teste'/>
					</div>
					<div className={styles.gradient2}></div>
				</div>
  			*/}

			<section className={styles.cards}>
				<Swiper
					breakpoints={cardsSwiperConfig.breakpoints}
					modules={[Pagination]}
					pagination={{ clickable: true }}
				>
					<SwiperSlide>
						<div className={`${styles.cardImg} col-12 col-sm-6 col-lg-3`} style={{ backgroundImage: ` url(${card1.src})` }}>
							<Text>
								<b>DESENVOLVIMENTO</b> E INOVA????O
							</Text>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={`${styles.cardImg} col-12 col-sm-6 col-lg-3`} style={{ backgroundImage: ` url(${card2.src})` }}>
							<p>
								<b>MARKETING</b> ESTRAT??GICO
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={`${styles.cardImg} col-12 col-sm-6 col-lg-3`} style={{ backgroundImage: ` url(${card3.src})` }}>
							<Text>
								<b>COMUNICA????O</b> VISUAL
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
						<Button onClick={() => router.push('/projetos')} rightIcon={FiArrowRightCircle}>
							VER TODOS OS PROJETOS
						</Button>
					</div>
				</div>
			</section>
			<section className={styles.clients}>
				<div className="container mx-auto row">
					<div className="col-lg-6 order-lg-1 order-2 mx-auto">
						<div className="row row-cols-lg-3 row-cols-2 justify-content-around">
							<Link target="_blank" href="https://www.apaebrasil.org.br">
								<div>
									<Image src={logoApae} alt='Apae Logo'/>
								</div>
							</Link>
							<Link target="_blank" href="https://cta.ipb.org.br">
								<div>
									<Image src={logoApecom} alt='Apecom Logo'/>
								</div>
							</Link>
							<Link target="_blank" href="https://www.eaquamar.com.br">
								<div>
									<Image src={logoAquamar} alt='Aquamar Logo'/>
								</div>
							</Link>
							<Link target="_blank" href="https://www.custapoucoseduzir.com.br">
								<div>
									<Image src={logoCustaPouco} alt='Custa Pouco Logo'/>
								</div>
							</Link>
							<Link target="_blank" href="https://www.instagram.com/fashlybrasil/">
								<div>
									<Image src={logoFashly} alt='Fashly Logo'/>
								</div>
							</Link>
							<Link target="_blank" href="https://www.foreverliss.com.br">
								<div>
									<Image src={logoForeverLiss} alt='Foreverliss Logo'/>
								</div>
							</Link>
							<Link target="_blank" href="https://www.hopelingerie.com.br">
								<div>
									<Image src={logoHope} alt='Hope Logo'/>
								</div>
							</Link>
							<Link target="_blank" href="https://ipb.org.br">
								<div>
									<Image src={logoIPB} alt='IPB Logo'/>
								</div>
							</Link>
							<Link target="_blank" href="https://mastercarabm.com.br">
								<div>
									<Image src={logoMastercar} alt='Acc Amaral Logo'/>
								</div>
							</Link>
						</div>
					</div>

					<div className="col-lg-5 offset-lg-1 d-flex flex-column justify-content-center order-lg-2 order-1 mb-5 mb-lg-0">
						<Heading small>
							Mais de <strong>65 CLIENTES</strong> atendidos
						</Heading>
						<Text>
							Temos a sorte de ter desenvolvido projeto para todos os setores de atividade
							e portes de empresas, em diversas formas de programa????o e universos gr??ficos.
						</Text>
						<Link href="/contato">&gt; Torne-se nosso parceiro!</Link>
					</div>
				</div>
			</section>
		</Layout>
  );
}
