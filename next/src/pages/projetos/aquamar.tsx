import Image from 'next/image';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';
import Link from 'next/link';
import BannerTop from '../../components/UI/Banner/BannerTop';
import bg from '../../assets/images/Projetos/Aquamar/bg-aquamar.png';

import Layout from '../../components/UI/Layout';
import Heading from '../../components/UI/Heading';
import Text from '../../components/UI/Text';

import Button from '../../components/UI/Button';

import styles from '../../styles/pages/projetos/internal.module.scss';

import logoAquamar from '../../assets/images/logos/logo-aquamar.png';
import imageAquamar1 from '../../assets/images/Projetos/Aquamar/img-aquamar1.png';
import imageAquamar2 from '../../assets/images/Projetos/Aquamar/img-aquamar2.png';

export default function Aquamar() {
  return (
		<Layout>
			<BannerTop image={bg} auxiliaryText="AQUAMAR - Loja Virtual">
				<strong>CASES</strong> E PROJETOS
			</BannerTop>
			<section className={styles.contentArea}>
				<div className={`${styles.yellowBox} container row mx-auto`}>
					<div className='col-lg-3 col-12 text-center'>
						<div className={`${styles.arrowUp} mx-auto`}></div>
					</div>
					<Heading small className='d-flex align-items-center'>
						<strong>
							Atuação direta no E-commerce da marca prestando Suporte e Manutenção
							em Vtex e desenvolvimento de soluções inovadoras para o varejo.
						</strong>
					</Heading>
				</div>
				<div className={`${styles.content} container mx-auto`}>
					<Text>
						Durante os anos de 2020 e 2021 nossa agência foi responsável por prestar todo
						suporte e manutenção do site da marca Aquamar. Seu site é produzido utilizando a
						tecnologia da plataforma Vtex e neste período desenvolvemos melhorias na loja virtual
						com implementações de APIs, criação de Landing Pages e soluções administrativas.
					</Text>
					<div className='text-center'>
						<Image src={imageAquamar1} alt='Logo Aquamar'/>
					</div>
					<Text>
						Iniciamos nosso trabalho junto a empresa no ano de 2020, antes da pandemia, onde
						começamos prestando o suporte e manutenção em uma parte de seu e-commerce e com o
						reflexo positivo da nossa equipe junto a equipe da empresa fomos contratados para
						trabalhar em tempo integral com a VTEX. Foi um grande desafio para nossa empresa e
						equipe, pois o projeto vinha de outra empresa sem informações e tivemos que desbravar
						os códigos e os problemas encontrados durante nossas análises técnicas.
					</Text>
					<div className='text-center'>
						<Image src={imageAquamar2} alt='Logo Aquamar'/>
					</div>
				</div>
			</section>
			<section className={styles.projectSheet}>
				<div>
					<Button small color='#fff' bg='#333'>FICHA DO PROJETO</Button>
				</div>
				<div className={`${styles.projectSheetContent} container row mx-auto`}>
					<div>
						<div>
							<strong>Plataforma: </strong> <span>Vtex</span>
						</div>
						<div>
							<strong>Período: </strong> <span>2020 - 2021</span>
						</div>
						<div>
							<strong>Framework: </strong> <span>HTML - Javascript - React</span>
						</div>
						<div className={styles.projectSheetCards}>
							<Button small color='#000' bg='#ffe604'>APP</Button>
							<Button small color='#000' bg='#ffe604'>WEBSITE</Button>
							<Button small color='#000' bg='#ffe604'>API</Button>
							<Button small color='#000' bg='#ffe604'>LANDING PAGE</Button>
						</div>
					</div>
					<hr />

					<div>
						<div>
							<Link href="https://www.eaquamar.com.br/">
								<Image src={logoAquamar} alt='Logo Aquamar'/>
							</Link>
						</div>
						<div>
							<Link href="https://www.instagram.com/agenciainovaki/">
								<FaInstagram size="40"/>
							</Link>
							<Link href="https://www.instagram.com/agenciainovaki/">
								<FaFacebookF size="40"/>
							</Link>
							<Link href="https://www.instagram.com/agenciainovaki/">
								<FaWhatsapp size="40"/>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</Layout>
  );
}
