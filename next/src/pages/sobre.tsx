import Image from 'next/image';
import { Gi3DGlasses } from 'react-icons/gi';
import { IoIosRocket } from 'react-icons/io';
import { FiArrowRightCircle } from 'react-icons/fi';
import Link from 'next/link';
import BannerTop from '../components/UI/Banner/BannerTop';

import bg from '../assets/images/Sobre/bg-sobre.png';
import Layout from '../components/UI/Layout';

import styles from '../styles/pages/sobre.module.scss';
import Text from '../components/UI/Text';
import Heading from '../components/UI/Heading';

import pc from '../assets/images/Sobre/agency-pc.png';
import bgPartner from '../assets/images/Sobre/bg-partner.png';
import logoApae from '../assets/images/logos/logo-apae.png';
import logoApecom from '../assets/images/logos/logo-apecom.png';
import logoAquamar from '../assets/images/logos/logo-aquamar.png';
import logoContabilidade from '../assets/images/logos/logo-contabilidade.png';
import logoCustaPouco from '../assets/images/logos/logo-custapouco.png';
import logoFashly from '../assets/images/logos/logo-fashly.png';
import logoForeverLiss from '../assets/images/logos/logo-foreveliss.png';
import logoHope from '../assets/images/logos/logo-hope.png';
import logoIPB from '../assets/images/logos/logo-ipb.png';
import logoMaktub from '../assets/images/logos/logo-maktub.png';
import logoMastercar from '../assets/images/logos/logo-mastercar.png';
import logoPestalozzi from '../assets/images/logos/logo-pestalozzi.png';

import Button from '../components/UI/Button';
import SEO from '../components/SEO';

export default function Sobre() {
  return (
		<Layout>
			<SEO
				pageTitle='Inovaki | Quem Somos'
				pageDescription='Local onde a sua identidade digital é criada e desenvolvida de forma única.'
				pageUrl='https://inovaki.vercel.app/sobre'
				pageImage='/images/inovaki-bg.png'
			/>
			<BannerTop image={bg} auxiliaryText="Conheça nossa Agência!">
				<strong>QUEM</strong>SOMOS
			</BannerTop>
			<section className={styles.agency}>
				<div className={`${styles.agencyContent} container`}>
					<div className="row pb-5">
						<div className="col-lg-6 py-5">
							<Heading small className='text-start'>
								<strong>Somos uma agência focada em evoluir junto aos clientes.</strong>
							</Heading>
							<Text>
								Seus objetivos são analisados pela nossa equipe onde traçamos
								estratégias de curto e longo prazo para que os resultados sejam
								conquistados e os objetivos ultrapassados.
							</Text>
							<a href="#">&gt; Fale Conosco &lt;</a>
						</div>
						<div className="col-lg-6">
							<Image src={pc} alt='Pc em cima da mesa'/>
						</div>
					</div>

					<hr />
					<hr />

					<div className="row py-5">
						<div className="col-lg-6 col-12 pb-5">
							<Gi3DGlasses className='mb-3' size={90} color='#000'/>
							<Heading small className='text-start'>
								<strong>Nossa Visão</strong>
							</Heading>
							<Text>
								Ser uma empresa referência no ramo e reconhecida por parte dos clientes,
								parceiros, colaboradores e concorrentes como uma empresa inovadora.
							</Text>
						</div>

						<div className="col-lg-6 col-12">
							<IoIosRocket className='mb-3' size={90} color='#000'/>
							<Heading small className='text-start'>
								<strong>Nossa Missão</strong>
							</Heading>
							<Text>
								Atender a todas as demandas dos clientes com excelência e inovação.
								Gerando serviços e projetos que melhorem cada vez mais a qualidade na
								gestão e visualização de nossos clientes.
							</Text>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.partner} style={{ backgroundImage: `url(${bgPartner.src})` }}>
				<div className="container">
					<Text>
						Somos um <span>parceiro estratégico</span> para nossos clientes.
						Ajudaremos você a <span> idealizar, projetar e implementar </span>
						seu produto desde a concepção até o suporte ao desenvolvimento interativo,
						sempre <span>tomando a iniciativa</span> e <span>trabalhando de forma proativa.</span>
					</Text>
				</div>
  		</section>
			<section className={styles.interact}>
				<div className="container mx-auto text-center row">
					<div className="col-12">
						<Heading>
							<span>INTERAJA</span> CONOSCO
						</Heading>
						<Heading>
							Veja o que fazemos pelo <span>seu negócio.</span>
						</Heading>
					</div>
					<div className="col-lg-6 col-12 mb-3">
					<Button rightIcon={FiArrowRightCircle}>
						CONHEÇA NOSSOS SERVIÇOS
					</Button>
					</div>
					<div className="col-lg-6 col-12">
					<Button rightIcon={FiArrowRightCircle}>
						ENVIE-NOS UMA MENSAGEM
					</Button>
					</div>
				</div>
			</section>
			<section className={styles.ourClients}>
				<div className="container mx-auto row pb-5">
					<div className="col-lg-5 col-12 pb-2">
						<Heading>
							<span>NOSSOS</span> CLIENTES
						</Heading>
					</div>
					<div className="col-lg-5 col-12 offset-lg-2">
						<Text>
							Nosso compromisso com a qualidade dos projetos executados,
							ampla experiência e esforço genuíno para alcançar os objetivos
							de cada desafio nos garantiram clientes e parcceiros satisfeitos e
							bons resultados frente ao mercado.
						</Text>
					</div>
				</div>
				<div className={`${styles.clientsLogo} container mx-auto row justify-content-center`}>
					<div className='row row-cols-lg-4 row-cols-sm-3 row-cols-2'>
						<div>
							<Link href="#">
								<Image src={logoIPB} alt='Logo IPB'/>
							</Link>
						</div>
						<div>
							<Link href="#">
								<Image src={logoApecom} alt='Logo Apecom'/>
							</Link>
						</div>
						<div>
							<Link href="#">
								<Image src={logoHope} alt='Logo Hope'/>
							</Link>
						</div>
						<div>
							<Link href="#">
								<Image src={logoForeverLiss} alt='Logo Forever Liss'/>
							</Link>
						</div>
						<div>
							<Link href="#">
								<Image src={logoAquamar} alt='Logo Aquamar'/>
							</Link>
						</div>
						<div>
							<Link href="#">
								<Image src={logoFashly} alt='Logo Fashly'/>
							</Link>
						</div>
						<div>
							<Link href="#">
								<Image src={logoCustaPouco} alt='Logo Custa Pouco'/>
							</Link>
						</div>
						<div>
							<Link href="#">
								<Image src={logoContabilidade} alt='Logo Contabilidade'/>
							</Link>
						</div>
						<div>
							<Link href="#">
								<Image src={logoMaktub} alt='Logo Maktub'/>
							</Link>
						</div>
						<div>
							<Link href="#">
								<Image src={logoMastercar} alt='Logo Mastercar'/>
							</Link>
						</div>
						<div>
							<Link href="#">
								<Image src={logoApae} alt='Logo Apae'/>
							</Link>
						</div>
						<div>
							<Link href="#">
								<Image src={logoPestalozzi} alt='Logo Pestalozzi'/>
							</Link>
						</div>
					</div>
				</div>
  		</section>
		</Layout>
  );
}
