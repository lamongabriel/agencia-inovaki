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

import styles from '../../styles/pages/projetos/aquamar.module.scss';

import logoAquamar from '../../assets/images/logos/logo-aquamar.png';
import imageAquamar from '../../assets/images/Projetos/Aquamar/img-aquamar.png';

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
						Durante os anos de 2020 e 2021 nossa agência foi responsável por todo
					 	suporte e manutenção do site da Aquamar na plataforma Vtex. Neste período
					  desenvolvemos melhorias na loja com implementações de APIs, criação de Landing
						Pages e soluções administrativas.
					</Text>
					<Text>
						Iniciamos nosso trabalho junto a marca no ano de 2020, antes da pandemia, onde
						começamos prestando o suporte e manutenção em seu e-commerce utilizando a ferramenta
						VTEX. Foi um grande desafio para nossa empresa e equipe, pois o projeto vinha de
						outra empresa sem informações e tivemos que desbravar os códigos e os problemas
						encontrados	durante nossas análises técnicas.
					</Text>
					<div>
						<Image src={imageAquamar} alt='Logo Aquamar' className='w-100'/>
					</div>
					<Text>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
					Ipsum has been the industrys standard dummy text ever since the 1500s, when an
					unknown printer took a galley of type and scrambled it to make a type specimen book.
					It has survived not only five centuries. Lorem Ipsum is simply dummy text of the
					printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy
					text ever since the 1500s, when an unknown printer took a galley of type and scrambled
					it to make a type specimen book. It has survived not only five centuries.
					</Text>
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
