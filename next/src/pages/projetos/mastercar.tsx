import Image from 'next/image';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';
import Link from 'next/link';
import BannerTop from '../../components/UI/Banner/BannerTop';
import bg from '../../assets/images/Projetos/MasterCar/bg-mastercar.png';

import Layout from '../../components/UI/Layout';
import Heading from '../../components/UI/Heading';
import Text from '../../components/UI/Text';

import Button from '../../components/UI/Button';

import styles from '../../styles/pages/projetos/internal.module.scss';

import logoMasterCar from '../../assets/images/logos/logo-mastercar.png';
import imageMasterCar1 from '../../assets/images/Projetos/MasterCar/img-mastercar1.png';
import SEO from '../../components/SEO';

export default function MasterCar() {
  return (
		<Layout>
			<SEO
				pageTitle='Inovaki | Projeto - MasterCar'
				pageDescription='A mais de 5 anos trabalhando juntos, nós e a MasterCar ABM traçamos o site ideal para seus cliente contendo todas as informações dos serviços prestados.'
				pageUrl='https://inovaki.vercel.app/projetos/mastercar'
				pageImage='/images/inovaki-bg.png'
			/>
			<BannerTop image={bg} auxiliaryText="MASTERCAR">
				<strong>CASES</strong> E PROJETOS
			</BannerTop>
			<section className={styles.contentArea}>
				<div className={`${styles.yellowBox} container row mx-auto`}>
					<div className='col-lg-3 col-12 text-center'>
						<div className={`${styles.arrowUp} mx-auto`}></div>
					</div>
					<Heading small className='d-flex align-items-center'>
						<strong>
							A mais de 5 anos trabalhando juntos, nós e a MasterCar ABM traçamos o site
							ideal para seus cliente contendo todas as informações dos serviços prestados
							e facilitando para seus associados a comunicação com empresa.
						</strong>
					</Heading>
				</div>
				<div className={`${styles.content} container mx-auto`}>
					<Text>
						Atualmente contamos com um site moderno e com conteúdos atualizados visando
						apresentar de forma clara e rápida todos os serviços e benefícios prestados pela
						MasterCar ABM. Pelo portal os associados e outros usuários tem acesso a informações
						como sobre a MasterCar ABM, Benefícios, Informativos, Parceiros da empresa, Abertura
						de eventos, Cotação da Proteção Veicular, Contato direto via formulários e outros
						conteúdos importantes.
					</Text>
					<div className='text-center'>
						<Image src={imageMasterCar1} alt='Imagem MasterCar'/>
					</div>
					<Text className='my-5'>
						Algumas áreas de formulários foram criadas para facilitar o processo de abertura de
						chamados dos associados para a empresa e também um formulário exclusivo para cotação
						que é direcionado para a equipe de vendas com as informações do cliente e de seu
						veículo. Esses formulários são disparados e controlados via e-mail a pedido do cliente
						no momento do desenvolvimento do projeto.
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
							<strong>Plataforma: </strong> <span>Desenvolvimento próprio</span>
						</div>
						<div>
							<strong>Período: </strong> <span>2021 - atulamente ativo</span>
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
							<Link href="https://mastercarabm.com.br/">
								<Image src={logoMasterCar} alt='Logo MasterCar'/>
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
