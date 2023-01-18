import Image from 'next/image';
import { Gi3DGlasses } from 'react-icons/gi';
import { IoIosRocket } from 'react-icons/io';
import BannerTop from '../components/UI/Banner/BannerTop';

import bg from '../assets/images/Sobre/bg-sobre.png';
import Layout from '../components/UI/Layout';

import styles from '../styles/pages/sobre.module.scss';
import Text from '../components/UI/Text';
import Heading from '../components/UI/Heading';

import pc from '../assets/images/Sobre/agency-pc.png';
import bgPartner from '../assets/images/Sobre/bg-partner.png';

export default function Sobre() {
  return (
		<Layout>
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

					<div className="row">
						<div className="col-lg-6 col-12 pb-5">
							<Gi3DGlasses className='mb-3' size={90} color='#000'/>
							<Heading small className='text-start'>
								<strong>Nossa Visão</strong>
							</Heading>
							<Text>
								Seus objetivos são analisados pela nossa equipe onde traçamos
								estratégias de curto e longo prazo para que os resultados sejam
								conquistados e os objetivos ultrapassados.
							</Text>
						</div>

						<div className="col-lg-6 col-12">
							<IoIosRocket className='mb-3' size={90} color='#000'/>
							<Heading small className='text-start'>
								<strong>Nossa Missão</strong>
							</Heading>
							<Text>
								Seus objetivos são analisados pela nossa equipe onde traçamos
								estratégias de curto e longo prazo para que os resultados sejam
								conquistados e os objetivos ultrapassados.
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
		</Layout>
  );
}
