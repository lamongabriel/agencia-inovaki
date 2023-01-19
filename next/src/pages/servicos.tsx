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
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industrys standard
								dummy text ever since the 1500s.
							</Text>
							<ArrowLink href='/home'>
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
								Nossa agência trabalha com a integração e desenvolvimento de
								soluções que integrem sua plataforma com as aplicações da Bling.
							</Text>
							<ArrowLink href='#'>
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
							<ArrowLink href='#'>
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
								Desenvolvimento, Suporte e Manuteção em Websites com a
								utilização da ferramenta Wordpress. A Inovaki conta com
								profissionais capacitados e com experiência.
							</Text>
							<ArrowLink href='#'>
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
											<Button small color='#fff' bg='#333333'>Hotsite</Button>
											<Button small color='#fff' bg='#333333'>Landing Page</Button>
											<Button small color='#fff' bg='#333333'>E-commerce</Button>
											<Button small color='#fff' bg='#333333'>leads page</Button>
										</div>
										<Text className='my-5'>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
										</Text>
										<ArrowLink href='#'>
											Saiba mais
										</ArrowLink>
									</Tab.Pane>
									<Tab.Pane eventKey="second">
										<div className='d-flex flex-wrap gap-2'>
											<Button small color='#fff' bg='#333333'>WEBSITE</Button>
											<Button small color='#fff' bg='#333333'>Hotsite</Button>
											<Button small color='#fff' bg='#333333'>Landing Page</Button>
											<Button small color='#fff' bg='#333333'>E-commerce</Button>
											<Button small color='#fff' bg='#333333'>leads page</Button>
										</div>
										<Text className='my-5'>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
										</Text>
										<ArrowLink href='#'>
											Saiba mais
										</ArrowLink>
									</Tab.Pane>
									<Tab.Pane eventKey="third">
										<div className='d-flex flex-wrap gap-2'>
											<Button small color='#fff' bg='#333333'>WEBSITE</Button>
											<Button small color='#fff' bg='#333333'>Hotsite</Button>
											<Button small color='#fff' bg='#333333'>Landing Page</Button>
											<Button small color='#fff' bg='#333333'>E-commerce</Button>
											<Button small color='#fff' bg='#333333'>leads page</Button>
										</div>
										<Text className='my-5'>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
										</Text>
										<ArrowLink href='#'>
											Saiba mais
										</ArrowLink>
									</Tab.Pane>
									<Tab.Pane eventKey="four">
										<div className='d-flex flex-wrap gap-2'>
											<Button small color='#fff' bg='#333333'>WEBSITE</Button>
											<Button small color='#fff' bg='#333333'>Hotsite</Button>
											<Button small color='#fff' bg='#333333'>Landing Page</Button>
											<Button small color='#fff' bg='#333333'>E-commerce</Button>
											<Button small color='#fff' bg='#333333'>leads page</Button>
										</div>
										<Text className='my-5'>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
										</Text>
										<ArrowLink href='#'>
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
