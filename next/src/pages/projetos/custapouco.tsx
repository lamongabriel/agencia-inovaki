import Image from 'next/image';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';
import Link from 'next/link';
import BannerTop from '../../components/UI/Banner/BannerTop';
import bg from '../../assets/images/Projetos/CustaPouco/bg-custapouco.png';

import Layout from '../../components/UI/Layout';
import Heading from '../../components/UI/Heading';
import Text from '../../components/UI/Text';

import Button from '../../components/UI/Button';

import styles from '../../styles/pages/projetos/internal.module.scss';

import logoCustaPouco from '../../assets/images/logos/logo-custapouco.png';
import imageCustaPouco1 from '../../assets/images/Projetos/CustaPouco/img-custapouco1.png';
import imageCustaPouco2 from '../../assets/images/Projetos/CustaPouco/img-custapouco2.png';
import SEO from '../../components/SEO';

export default function CustaPouco() {
  return (
		<Layout>
			<SEO
				pageTitle='Inovaki | Projeto - Custa Pouco Seduzir'
				pageDescription='A loja virtual Custa Pouco Seduzir conta com uma grande variedade de
				produtos como lingerie, acessórios e artigos eróticos.'
				pageUrl='https://inovaki.vercel.app/projetos/custapouco'
				pageImage='/images/inovaki-bg.png'
			/>
			<BannerTop image={bg} auxiliaryText="CUSTA POUCO SEDUZIR">
				<strong>CASES</strong> E PROJETOS
			</BannerTop>
			<section className={styles.contentArea}>
				<div className={`${styles.yellowBox} container row mx-auto`}>
					<div className='col-lg-3 col-12 text-center'>
						<div className={`${styles.arrowUp} mx-auto`}></div>
					</div>
					<Heading small className='d-flex align-items-center'>
						<strong>
							A loja virtual Custa Pouco Seduzir conta com uma grande variedade de
							produtos como lingerie, acessórios e artigos eróticos. Nosso papel
							junto a empresa é ampliar suas vendas com melhorias do e-commerce e
							aplicação de novas soluções para auxiliar a administração da loja virtual.
						</strong>
					</Heading>
				</div>
				<div className={`${styles.content} container mx-auto`}>
					<Text>
						Atualmente trabalhamos prestando suporte técnico na loja virtual da empresa
						com aplicações de novas ferramentas que auxiliam a administração, consultoria
						em melhorias que ampliam o potencial de vendas e desenvolvimento do ambiente
						de venda virtual dos seus produtos.
					</Text>
					<div className='text-center'>
						<Image src={imageCustaPouco1} alt='Imagem Custa Pouco Seduzir'/>
					</div>
					<Text className='my-5'>
						Neste projeto já atuamos com a reformulação das páginas internas para
						apresenntação mais detalhada dos produtos, reestruturação da página principal
						a tornando mais atrativa e com maior conversão de compras e também foi
						adaptado um novo modelo de carrinho onde descontos são aplicados com mais
						facilidade, os produtos são visualizados de forma mais objetiva e o cliente
						consegue ter seu checkout de maneira mais acertiva.
					</Text>
					<div className='text-center'>
						<Image src={imageCustaPouco2} alt='Logo Custa Pouco Seduzir'/>
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
							<strong>Período: </strong> <span>2022 - em andamento</span>
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
							<Link href="https://www.custapoucoseduzir.com.br/">
								<Image src={logoCustaPouco} alt='Logo Custa Pouco Seduzir'/>
							</Link>
						</div>
						<div>
							<Link href="https://www.instagram.com/custapoucoseduzir/">
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
