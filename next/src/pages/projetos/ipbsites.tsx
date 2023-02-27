import Image from 'next/image';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';
import Link from 'next/link';
import BannerTop from '../../components/UI/Banner/BannerTop';
import bg from '../../assets/images/Projetos/IPBSites/bg-IPBSites.png';

import Layout from '../../components/UI/Layout';
import Heading from '../../components/UI/Heading';
import Text from '../../components/UI/Text';

import Button from '../../components/UI/Button';

import styles from '../../styles/pages/projetos/internal.module.scss';

import logoIPBSites from '../../assets/images/logos/logo-ipb.png';
import imageIPBSites1 from '../../assets/images/Projetos/IPBSites/img-IPBSites1.png';
import imageIPBSites2 from '../../assets/images/Projetos/IPBSites/img-IPBSites2.png';
import imageIPBSites3 from '../../assets/images/Projetos/IPBSites/img-IPBSites3.png';
import SEO from '../../components/SEO';

export default function IPBsites() {
  return (
		<Layout>
			<SEO
				pageTitle='Inovaki | Projeto - IPB Sites'
				pageDescription='Em 2021 demos início a um projeto inovador e visionário dentro da Igreja Presbiteriana do Brasil, nossa intensão era levar um site para todas as mais de 6 mil igrejas da denominação pelo Brasil.'
				pageUrl='https://inovaki.vercel.app/projetos/ipbsites'
				pageImage='/images/inovaki-bg.png'
			/>
			<BannerTop image={bg} auxiliaryText="IPB - PLATAFORMA DE CRIAÇÃO DE SITES">
				<strong>CASES</strong> E PROJETOS
			</BannerTop>
			<section className={styles.contentArea}>
				<div className={`${styles.yellowBox} container row mx-auto`}>
					<div className='col-lg-3 col-12 text-center'>
						<div className={`${styles.arrowUp} mx-auto`}></div>
					</div>
					<Heading small className='d-flex align-items-center'>
						<strong>
							Em 2021 demos início a um projeto inovador e visionário dentro da
							Igreja Presbiteriana do Brasil, nossa intensão era levar um site
							para todas as mais de 6 mil igrejas da denominação pelo Brasil.
							Hoje já contamos com mais de 150 igrejas utilizando o projeto.
						</strong>
					</Heading>
				</div>
				<div className={`${styles.content} container mx-auto`}>
					<Text>
						Nossa ideia começou após nossa equipe analisar a necessidade que as
						igrejas tinham de ter um site atualizado automaticamente com informações
						da denominação como notícias, eventos, informativos, conteúdos do jornal
						da igreja e outros dados importantes para manter seus membros atualizados
						em tempo real.
					</Text>
					<div className='text-center'>
						<Image src={imageIPBSites1} alt='Imagem IPB Sites'/>
					</div>
					<Text className='my-5'>
						Com essa análise feita iniciamos o processo de construção da ideia. Foram
						3 meses estruturando todo o projeto para que o site modelo tivesse todas
						os conteúdos importantes para a igreja local e a Igreja Presbiteriana do
						Brasil. Hoje contamos com um projeto contendo mais de 20 áreas de conteúdo,
						sincronismo com o YouTube e Google Analytics, administrativo dos conteúdos
						para a denominação e administrativo de gestão do site da igreja local.
					</Text>
					<div className='text-center'>
						<Image src={imageIPBSites2} alt='Imagem IPB Sites'/>
					</div>
					<Text className='my-5'>
						Em 1 mês de lançamento, mais de 280 igrejas se cadastraram para ter acesso a
						plataforma desenvolvida pela nossa equipe e mais de 70 igrejas foram selecionadas
						 para terem seu site liberados. Atualmente contamos com mais de 150 igrejas ativas
						 na plataforma e acessos vindo de diversos países do exterior para consultar as
						 informações das igrejas locais da Igreja Presbiteriana do Brasil.
					</Text>
					<div className='text-center'>
						<Image src={imageIPBSites3} alt='Imagem IPB Sites'/>
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
							<strong>Plataforma: </strong> <span>Desenvolvimento Próprio</span>
						</div>
						<div>
							<strong>Período: </strong> <span>2021 - atualmente ativo</span>
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
							<Link href="https://ipb.org.br/ipbsites/">
								<Image src={logoIPBSites} alt='Logo IPB Sites'/>
							</Link>
						</div>
						<div>
							<Link href="https://www.instagram.com/ipboficial/">
								<FaInstagram size="40"/>
							</Link>
							<Link href="https://www.facebook.com/ipb.org.br">
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
