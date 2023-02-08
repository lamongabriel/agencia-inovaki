import Image from 'next/image';

import { FaDollyFlatbed } from 'react-icons/fa';

import Link from 'next/link';
import BannerTop from '../../components/UI/Banner/BannerTop';
import Layout from '../../components/UI/Layout';
import Heading from '../../components/UI/Heading';
import Text from '../../components/UI/Text';

import logoVtex from '../../assets/images/logos/logo-vtex.svg';
import bgPC from '../../assets/images/Servicos/bg-vtex-pc.png';
import bg from '../../assets/images/Projetos/Aquamar/bg-aquamar.png';
import arrowDown from '../../assets/images/Servicos/arrow-down.png';
import dottedPattern from '../../assets/images/dotted-pattern.png';

import styles from '../../styles/pages/servicos/internal.module.scss';

export default function VTEX() {
  return (
		<Layout>
			<BannerTop image={bg} auxiliaryText="A maior plataforma E-Commerce">
				<strong>VTEX</strong> VTEX
			</BannerTop>
			<div className={styles.vtex}>
				<section className={styles.contentArea}>

					<div className={`${styles.arrowDown} container d-flex justify-content-center align-items-center`}>
						<Image src={arrowDown} alt='Seta apontando para baixo' />
					</div>

					<div className={`${styles.content} container mx-auto`}>
						<div className={styles.experienceContent}>
							<Image src={logoVtex} alt='Logo VTEX' />

							<Heading small>
								<strong>
									A plataforma de comércio digital para grandes empresas! <br/>
									 Proporcione a experiência que seus consumidores desejam com uma plataforma
									completa e robusta.
								</strong>
							</Heading>
						</div>

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
						<div className='w-100 text-center'>
							<Image className='w-100' src={bgPC} alt='PC Dashboard VTEX'/>
						</div>
					</div>
				</section>
				<section className={styles.projectSheet}>
					<div className={styles.buttonPlatform}>
						CONHEÇA A PLATAFORMA
					</div>
					<div className={`${styles.projectSheetContent} container row row-cols-lg-3 row-cols-1`}>
						<div className={styles.benefits}>
							<div>
								<FaDollyFlatbed color='white'/>
							</div>
							<Heading small>
								Motor de preços avançado
							</Heading>
							<Text>
								Gerencie suas estratégias de venda e use táticas
								avançadas de preço, baseadas nas suas próprias regras de segmentação.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaDollyFlatbed color='white'/>
							</div>
							<Heading small>
								Motor de preços avançado
							</Heading>
							<Text>
								Gerencie suas estratégias de venda e use táticas
								avançadas de preço, baseadas nas suas próprias regras de segmentação.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaDollyFlatbed color='white'/>
							</div>
							<Heading small>
								Motor de preços avançado
							</Heading>
							<Text>
								Gerencie suas estratégias de venda e use táticas
								avançadas de preço, baseadas nas suas próprias regras de segmentação.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaDollyFlatbed color='white'/>
							</div>
							<Heading small>
								Motor de preços avançado
							</Heading>
							<Text>
								Gerencie suas estratégias de venda e use táticas
								avançadas de preço, baseadas nas suas próprias regras de segmentação.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaDollyFlatbed color='white'/>
							</div>
							<Heading small>
								Motor de preços avançado
							</Heading>
							<Text>
								Gerencie suas estratégias de venda e use táticas
								avançadas de preço, baseadas nas suas próprias regras de segmentação.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaDollyFlatbed color='white'/>
							</div>
							<Heading small>
								Motor de preços avançado
							</Heading>
							<Text>
								Gerencie suas estratégias de venda e use táticas
								avançadas de preço, baseadas nas suas próprias regras de segmentação.
							</Text>
						</div>
					</div>

					<div className={`${styles.buttonsMore} row container mx-auto`}>
						<Link href='https://vtex.com/br-pt/' className={`${styles.buttonPlatform} col-12 col-md-4`}>
							SAIBA MAIS
						</Link>
						<Link href='#' className={`${styles.buttonPlatform} col-12 col-md-4 offset-md-1`}>
							CONHEÇA NOSSOS PROJETOS
						</Link>
					</div>

					<div className={styles.dottedPattern}>
						<Image src={dottedPattern} className="w-100" alt='Textura de bolinhas' />
					</div>
				</section>
			</div>
		</Layout>
  );
}
