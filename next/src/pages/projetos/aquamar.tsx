import Image from 'next/image';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';
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
				<div>
					<div className={`${styles.yellowBox} container row mx-auto`}>
						<div className='col-lg-3 col-12 text-center'>
						<div className={`${styles.arrowUp} mx-auto`}></div>
						</div>
						<Heading small className='text-start d-flex align-items-center'>
							<strong>
							Atuação direta no E-commerce da marca prestando Suporte e Manutenção
							em Vtex e desenvolvimento de soluções inovadoras para o varejo.
							</strong>
						</Heading>
					</div>
				</div>
				<div className={`${styles.content} container mx-auto`}>
					<Text className='mb-5'>
						Durante os anos de 2020 e 2021 nossa agência foi responsável por todo
					 	suporte e manutenção do site da Aquamar na plataforma Vtex. Neste período
					  desenvolvemos melhorias na loja com implementações de APIs, criação de Landing
						Pages e soluções administrativas.
					</Text>
					<Text className='mb-5'>
						Iniciamos nosso trabalho junto a marca no ano de 2020, antes da pandemia, onde
						começamos prestando o suporte e manutenção em seu e-commerce utilizando a ferramenta
						VTEX. Foi um grande desafio para nossa empresa e equipe, pois o projeto vinha de
						outra empresa sem informações e tivemos que desbravar os códigos e os problemas
						encontrados	durante nossas análises técnicas.
					</Text>
					<div className='mb-5'>
						<Image src={imageAquamar} alt='Logo Aquamar' className='w-100'/>
					</div>
					<Text className='mb-5'>
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
				<div className='mx-auto'>
					<div className='text-center mb-4'>
						<Button small color='#fff' bg='#333333'>FICHA DO PROJETO</Button>
					</div>
					<div className={`${styles.projectContent} d-flex flex-column gap-5`}>
						<div className='mb-5'>
							<div className='row'>
								<strong className='col-6 text-end'>Plataforma:</strong> <span className='col-6 text-start'>Vtex</span>
							</div>
							<div className='row'>
								<strong className='col-6 text-end'>Período:</strong> <span className='col-6 text-start'>2020 - 2021</span>
							</div>
							<div className='row mb-5'>
								<strong className='col-6 text-end'>Framework:</strong> <span className='col-6 text-start'>HTML - Javascript - React</span>
							</div>
						</div>
					</div>
					<div className='mb-5'>
						<div className='d-flex justify-content-center mb-5'>
							<a href="#"><Image src={logoAquamar} alt='Logo Aquamar'/></a>
						</div>
						<div>
							<div className='d-flex justify-content-center gap-5 mb-5'>
								<a href="https://www.instagram.com/agenciainovaki/">
									<FaInstagram size={40}/>
								</a>
								<a href="https://www.instagram.com/agenciainovaki/">
									<FaFacebookF size={40}/>
								</a>
								<a href="https://www.instagram.com/agenciainovaki/">
									<FaWhatsapp size={40}/>
								</a>
							</div>
						</div>
					</div>
					<div className=' d-flex gap-2 justify-content-center mb-5'>
						<Button small>WEBSITE</Button>
						<Button small>APP</Button>
						<Button small>LANDING PAGE</Button>
						<Button small>API</Button>
					</div>
				</div>
			</section>
		</Layout>
  );
}
