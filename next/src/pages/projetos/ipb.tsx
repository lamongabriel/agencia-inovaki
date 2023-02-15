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

import logoIpb from '../../assets/images/logos/logo-ipb.png';
import imageIpb from '../../assets/images/Projetos/IPB/image-ipb.png';

export default function Ipb() {
  return (
		<Layout>
			<BannerTop image={bg} auxiliaryText="IPB - Site Oficial">
				<strong>CASES</strong> E PROJETOS
			</BannerTop>
			<section className={styles.contentArea}>
				<div className={`${styles.yellowBox} container row mx-auto`}>
					<div className='col-lg-3 col-12 text-center'>
						<div className={`${styles.arrowUp} mx-auto`}></div>
					</div>
					<Heading small className='d-flex align-items-center'>
						<strong>
						Desde o ano de 2019 estamos atuando juntamente com a APECOM
						(Agência Presbiteriana de Comunicação) no desenvolvimento e
						ampliação do Site Oficial da 10ª maior denominação evanglica do Brasil.
						</strong>
					</Heading>
				</div>
				<div className={`${styles.content} container mx-auto`}>
					<Text>
						O site oficial da Igreja Presbiteriana do Brasil foi desenvolvido por
						nossa equipe após uma análise inicial juntamente com a APECOM onde encontramos
						melhorias necessárias para que os membros da denominação e outros usuários do portal
						tivessem acesso mais acertivo a informações institucionais e conteúdos.
					</Text>
					<div className='text-center'>
						<Image src={imageIpb} alt='Imagem mostrando o desktop e o mobile da ipb'/>
					</div>
					<Text>
						Durante o estudo do projeto vimos que seria importante a ampliação da área de
						Conteúdos do site e possibilidade de aplicação de filtros/buscas o que diminuiria
						o tempo de procura das informações no portal. Agora pelo novo site os usuários
						conseguem ir direto a filtros com tags, realizar pesquisas pelo campo de busca
						ou acessar diretamente uma categoria de assunto.
					</Text>
					<Text>
						Hoje contamos com um portal formado por mais de 80 páginas com conteúdos atualizados,
						informações acertivas sobre cada área da instituição e controle total dos conteúdos
						via CRM próprio, desenvolvido especialmente para o projeto, o que facilita para a
						APECOM a administração destas informações.
					</Text>
					<Text>
						O projeto conta bom responsividade para Desktop, Tablet e Mobile. Ao ser acessado pelo
						device do usuário, automaticamente ele é adaptado para que haja uma boa experiência do
						usuário com o portal.
					</Text>
					<Text>
						Veja abaixo a ficha técnica do projeto e tenha acesso ao portal para navegar e
						conhecer um pouco mais.
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
							<strong>Tipo do Projeto: </strong> <span>Website - Portal</span>
						</div>
						<div>
							<strong>Período: </strong> <span>2019 - em andamento</span>
						</div>
						<div>
							<strong>Framework: </strong> <span>HTML - PHP - Javascript</span>
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
							<Link href="https://ipb.org.br/">
								<Image src={logoIpb} alt='Logo Ipb'/>
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
