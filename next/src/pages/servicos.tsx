import Image from 'next/image';

// Bootstrap
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

// Components
import Layout from '../components/UI/Layout';
import BannerTop from '../components/UI/Banner/BannerTop';
import Text from '../components/UI/Text';
import ArrowLink from '../components/UI/ArrowLink';
import Button from '../components/UI/Button';
import SEO from '../components/SEO';

// Images
import bg from '../assets/images/Servicos/bg-sobre.png';
import arrowDown from '../assets/images/Servicos/arrow-down.png';

import logoVtex from '../assets/images/logos/logo-vtex.svg';
import logoBling from '../assets/images/logos/logo-bling.svg';
import logoSendgrid from '../assets/images/logos/logo-sendgrid.svg';
import logoWordpress from '../assets/images/logos/logo-wordpress.svg';

// Styles
import styles from '../styles/pages/servicos.module.scss';

export default function Servicos() {
  return (
		<Layout>
			<SEO
				pageTitle='Inovaki | Atuação e Serviços'
				pageDescription='Conheça as nossas soluções em inovação e desenvolvimento digital.'
				pageUrl='https://inovaki.vercel.app/servicos'
				pageImage='/images/inovaki-bg.png'
			/>
			<BannerTop auxiliaryText="O que podemos fazer pelo seu negócio" image={bg}>
				<strong>ATUAÇÃO</strong> E SERVIÇOS
			</BannerTop>
			<section className={styles.areasOfExperience}>
				<div className={`${styles.arrowDown} container d-flex justify-content-center align-items-center pb-5`}>
					<Image src={arrowDown} alt='Seta apontando para baixo' />
				</div>

				<div className={`${styles.experience} container mx-auto text-center text-lg-left`}>
					<div className={`${styles.experienceContent} row`}>
						<div className="col-lg-5">
							<Image src={logoVtex} alt='Logo VTEX' />
						</div>
						<div className="col-lg-5 offset-lg-2 text-start">
							<Text>
								Nossa agência conta com um time especialista em serviços VTEX,
								a plataforma de comércio digital para grandes empresas.
								Dê o próximo passo na sua jornada com uma plataforma
								de comércio completa para os desafios de hoje.
							</Text>
							<ArrowLink target="_blank" href='https://vtex.com/br-pt/'>
								Saiba mais
							</ArrowLink>
						</div>
					</div>

					<hr className={styles.hr1} />

					<div className={`${styles.experienceContent} row`}>
						<div className="col-lg-5 offset-lg-2 order-lg-2 order-1">
							<Image src={logoBling} alt='Logo bling' />
						</div>
						<div className="col-lg-5 order-lg-1 order-2 text-end">
							<Text>
								o Bling é o sistema de gestão online que descomplica o seu negócio!
								Nossa agência trabalha com a integração e desenvolvimento
								de soluções que integrem sua plataforma com as aplicações da Bling.
							</Text>
							<ArrowLink target="_blank" href='https://www.bling.com.br/'>
								Saiba mais
							</ArrowLink>
						</div>
					</div>

					<hr className={styles.hr2} />

					<div className={`${styles.experienceContent} row`}>
						<div className="col-lg-5">
							<Image src={logoSendgrid} alt='Logo Sendgrid' />
						</div>
						<div className="col-lg-5 offset-lg-2 text-start">
							<Text>
								Gerenciamos e integramos a ferramenta SendGrid em sistema e
								websites para disparos eficientes de e-mail e mail marketing.
							</Text>
							<ArrowLink target="_blank" href='https://sendgrid.com/'>
								Saiba mais
							</ArrowLink>
						</div>
					</div>

					<hr className={styles.hr1} />

					<div className={`${styles.experienceContent} row`}>
						<div className="col-lg-5 offset-lg-2 order-lg-2 order-1">
							<Image src={logoWordpress} alt='Logo Wordpress' />
						</div>
						<div className="col-lg-5 order-lg-1 order-2 text-end">
							<Text>
								Desenvolvimento, suporte e manuteção em websites com a
								utilização da ferramenta Wordpress. A Inovaki conta com
								profissionais capacitados e com experiência.
							</Text>
							<ArrowLink target="_blank" href='https://br.wordpress.org/'>
								Saiba mais
							</ArrowLink>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.services}>
				<div className={`${styles.arrowDown} container d-flex justify-content-center align-items-center pb-5`}>
					<Image src={arrowDown} alt='Seta apontando para baixo' />
				</div>
				<div className='container'>
					<h3>SERVIÇOS</h3>
					<Tab.Container id="left-tabs-example" defaultActiveKey="first">
						<Row>
							<Col lg={5}>
								<Nav className="flex-column gap-4 gap-lg-5">
									<Nav.Item>
										<Nav.Link eventKey="first" className={styles.tabButton}>
											Desenvolvimento Digital
										</Nav.Link>
									</Nav.Item>

									<Nav.Item>
										<Nav.Link eventKey="second" className={styles.tabButton}>
											Marketing Estratégico
										</Nav.Link>
									</Nav.Item>

									<Nav.Item>
										<Nav.Link eventKey="third" className={styles.tabButton}>
											Comunicação Visual
										</Nav.Link>
									</Nav.Item>

									<Nav.Item>
										<Nav.Link eventKey="four" className={styles.tabButton}>
											Sistemas Personalizados
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Col>
							<Col lg={2} />
							<Col lg={5} className={`${styles.tabs} py-5 py-lg-0`}>
								<Tab.Content>
									<Tab.Pane eventKey="first">
										<div className='d-flex flex-wrap gap-2'>
											<Button small color='#fff' bg='#333333'>WEBSITE</Button>
											<Button small color='#fff' bg='#333333'>HOTSITE</Button>
											<Button small color='#fff' bg='#333333'>E-COMMERCE</Button>
											<Button small color='#fff' bg='#333333'>MOBILE</Button>
											<Button small color='#fff' bg='#333333'>LANDING PAGE</Button>
											<Button small color='#fff' bg='#333333'>SISTEMAS</Button>
										</div>
										<Text className='my-5'>
											Trabalhamos com a criação de Websites, Hotsites,
											Portais, Blogs e outros ambientes digitais. Integramos seu serviço
											com as melhores plataformas e-commerces do mercado.
										</Text>
										<ArrowLink href='/contato'>
											Saiba mais
										</ArrowLink>
									</Tab.Pane>
									<Tab.Pane eventKey="second">
										<div className='d-flex flex-wrap gap-2'>
											<Button small color='#fff' bg='#333333'>MIDIAS SOCIAIS</Button>
											<Button small color='#fff' bg='#333333'>SEO</Button>
											<Button small color='#fff' bg='#333333'>LINKS PATROCINADOS</Button>
											<Button small color='#fff' bg='#333333'>E-MAIL MARKETING</Button>
											<Button small color='#fff' bg='#333333'>MARKETING DIGITAL</Button>
										</div>
										<Text className='my-5'>
											Amplie e comunique-se de forma objetiva pelas Mídias Sociais,
											E-mail Marketing, Links patrocinados e demais soluções do marketing digital.
										</Text>
										<ArrowLink href='/contato'>
											Saiba mais
										</ArrowLink>
									</Tab.Pane>
									<Tab.Pane eventKey="third">
										<div className='d-flex flex-wrap gap-2'>
											<Button small color='#fff' bg='#333333'>CONSTRUÇÃO DE MARCA</Button>
											<Button small color='#fff' bg='#333333'>IDENTIDADE VISUAL</Button>
											<Button small color='#fff' bg='#333333'>BRANDING</Button>
											<Button small color='#fff' bg='#333333'>PROJETOS IMPRESSOS</Button>
											<Button small color='#fff' bg='#333333'>PROJETOS DE FACHADA</Button>
										</div>
										<Text className='my-5'>
										Somos especializados na criação de identidades visuais
										com técnicas de Branding e construção de materiais impressos.
										</Text>
										<ArrowLink href='/contato'>
											Saiba mais
										</ArrowLink>
									</Tab.Pane>
									<Tab.Pane eventKey="four">
										<div className='d-flex flex-wrap gap-2'>
											<Button small color='#fff' bg='#333333'>CONTROLE DE ESTOQUE</Button>
											<Button small color='#fff' bg='#333333'>SISTEMA FINANCEIRO</Button>
											<Button small color='#fff' bg='#333333'>GESTÃO DE PRODUTO</Button>
											<Button small color='#fff' bg='#333333'>E-COMMERCE</Button>
											<Button small color='#fff' bg='#333333'>INTEGRAÇÃO E MIGRAÇÃO</Button>
										</div>
										<Text className='my-5'>
											Nós produzimos sistemas de acordo com a necessidade da sua
											empresa, analisamos o cenário e atuamos sobre as causas.
										</Text>
										<ArrowLink href='/contato'>
											Saiba mais
										</ArrowLink>
									</Tab.Pane>
								</Tab.Content>
							</Col>
						</Row>
					</Tab.Container>
				</div>
			</section>
		</Layout>
  );
}
