import Image from 'next/image';

import {
  FaComments,
  FaCheck,
  FaEnvelope,
  FaAdversal,
  FaEnvelopeOpenText,
  FaDesktop,
  FaToolbox,
  FaListAlt,
} from 'react-icons/fa';

import Link from 'next/link';
import BannerTop from '../../components/UI/Banner/BannerTop';
import Layout from '../../components/UI/Layout';
import Heading from '../../components/UI/Heading';
import Text from '../../components/UI/Text';
import SEO from '../../components/SEO';

import logoSendgrid from '../../assets/images/logos/logo-sendgrid.svg';
import bg from '../../assets/images/Servicos/Sendgrid/bg-sendgrid.png';
import arrowDown from '../../assets/images/Servicos/arrow-down.png';
import dottedPattern from '../../assets/images/dotted-pattern.png';

import sendgrid2 from '../../assets/images/Servicos/Sendgrid/sendgrid-2.png';
import sendgrid3 from '../../assets/images/Servicos/Sendgrid/sendgrid-3.png';
import sendgrid4 from '../../assets/images/Servicos/Sendgrid/sendgrid-4.png';

import styles from '../../styles/pages/servicos/internal.module.scss';
import Button from '../../components/UI/Button';

export default function Sendgrid() {
  return (
		<Layout>
			<SEO
				pageTitle='Inovaki | Sendgrid'
				pageDescription='Gerenciamos e integramos a ferramenta SendGrid em sistema e websites para disparos eficientes de e-mail e mail marketing.'
				pageUrl='https://inovaki.vercel.app/servicos/sendgrid'
				pageImage='/images/sendgrid.png'
			/>
			<BannerTop image={bg} auxiliaryText="Plataforma de Envio de E-mails">
				<strong>SENDGRID</strong> SENDGRID
			</BannerTop>
			<div className={styles.sendGrid}>
				<section className={styles.contentArea}>

					<div className={`${styles.arrowDown} container d-flex justify-content-center align-items-center`}>
						<Image src={arrowDown} alt='Seta apontando para baixo' />
					</div>

					<div className={`${styles.content} container mx-auto`}>

						<div className={`${styles.experienceContent} row container align-items-center`}>
							<div className='col-lg-5 text-end'>
								<Image src={logoSendgrid} alt='Logo Sendgrid' />
								<Heading small className='text-end'>
									A plataforma de envio de emails em larga escala e de alta qualidade!
								</Heading>
								<Text className='text-end'>
									Você quer levar seu negócio digital ao próximo nível?
									<strong> Nós somos especialistas na plataforma Sendgrid</strong>.
									Com uma infraestrutura escalável e recursos avançados, junto com uma equipe
									qualificada para o trabalho, sua empresa poderá enviar milhões de emails por
									dia com alta taxa de entrega e eficácia
								</Text>
								<Text>
									Já desenvolvemos soluções incríveis para empresas como
									<strong> Fashion Masks</strong> e
									<strong> Fashly</strong>
								</Text>
							</div>
							<Image className='col-lg-5 offset-lg-2' src={sendgrid4} alt='VTEX'/>
						</div>

						<div className={`${styles.whatWeDoContent} container row align-items-center`}>
							<Image className='col-lg-5 order-lg-1 order-2' src={sendgrid3} alt='VTEX'/>
							<div className='col-lg-5 offset-lg-2 order-lg-2 order-1 mb-lg-0'>
								<Heading small className='text-start'>
									O que fazemos?
								</Heading>
								<div>
									<div>
										<FaCheck size={24} />
										Configuramos e Implementamos a plataforma
									</div>

									<div>
										<FaCheck size={24} />
										Design de Templates Exclusivos;
									</div>

									<div>
										<FaCheck size={24} />
										Criamos Estratégias de E-mails personalizadas;
									</div>

									<div>
										<FaCheck size={24} />
										Segmentação de Lista de Contatos;
									</div>

									<div>
										<FaCheck size={24} />
										Fluxos de Automação de E-mai;
									</div>

									<div>
										<FaCheck size={24} />
										Monitoramento e Análise de Desempenho;
									</div>

									<div>
										<FaCheck size={24} />
										Integrações Personalizadas de Marketing;
									</div>
								</div>
							</div>
						</div>

					</div>
				</section>

				<div className={styles.contactUs}>
					<div className={styles.teste} style={{
					  backgroundImage: `url(${sendgrid2.src})`,
					}}>
					</div>
					<div className={styles.contactText}>
						<div>
								Não perca mais tempo. Escolha a Inovaki e tenha a
								<strong> certeza de que seu negócio estará nas
								mãos de especialistas Sendgrid</strong>.
						</div>
							<Button bg='#1a82e2' color='#fff' rightIcon={FaComments}>
								Fale com nosso comercial
							</Button>
					</div>
				</div>

				<section className={styles.projectSheet}>
					<div className={styles.buttonPlatform}>
						O QUE É O SENDGRID?
					</div>
					<div className='container'>
						<div className={styles.projectBox}>
							<p>
								Se você está procurando por uma plataforma líder em envio de emails
								em larga escala, oferecendo uma solução completa e confiável para empresas,
								você precisa conhecer o <strong> Sendgrid</strong>.
								Possui diversas soluções para ajudar as empresas a
								<strong> otimizar suas campanhas de e-mail</strong>, incluindo ferramentas
								de <strong> personalização</strong>, <strong> automação de e-mails</strong>,
								<strong> testes A/B</strong> e muito mais.
							</p>
						</div>
					</div>
					<div className={`${styles.projectSheetContent} container row row-cols-lg-3 row-cols-md-2`}>

						<div className={styles.benefits}>
							<div>
								<FaEnvelope color='white'/>
							</div>
							<Heading small>
								Automação de E-mails
							</Heading>
							<Text>
							Envie de forma confiável em grande escala com o serviço SMTP —
							sem a necessidade de servidores e aumente as taxas de entrega
							com a API de validação de e-mail.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaAdversal color='white'/>
							</div>
							<Heading small>
								Recursos de campanhas de marketing
							</Heading>
							<Text>
							Do design à capacidade de entrega, eleve o nível em todos os e-mails
							enviados com campanhas de marketing.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaEnvelopeOpenText color='white'/>
							</div>
							<Heading small>
								Monitore o envio de E-mails
							</Heading>
							<Text>
							Ferramentas de monitoramento e análise de desempenho de envio de emails,
							permitindo que as empresas acompanhem as métricas de abertura, cliques e conversões
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaDesktop color='white'/>
							</div>
							<Heading small>
								Compatibilidade e Integração
							</Heading>
							<Text>
							Compatibilidade com várias linguagens de programação e integrações com
							várias plataformas populares.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaToolbox color='white'/>
							</div>
							<Heading small>
								Testes de E-mails
							</Heading>
							<Text>
							Testes A/B, permitindo que as empresas testem diferentes versões de suas mensagens
							para melhorar a eficácia do envio de email
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaListAlt color='white'/>
							</div>
							<Heading small>
								Gerencie sua Lista de Contatos
							</Heading>
							<Text>
							Gerenciamento de listas de email, permitindo que as empresas gerenciem e segmentem
							suas listas de contatos para envio de mensagens mais relevantes e direcionadas
							</Text>
						</div>
					</div>

					<div className={`${styles.buttonsMore} row container mx-auto`}>
						<Link href='#' className={`${styles.buttonPlatform} col-12 col-md-4`}>
							CONHEÇA NOSSOS PROJETOS
						</Link>
						<Link href='https://sendgrid.com/' className={`${styles.buttonPlatform} col-12 col-md-4 offset-md-1`}>
							ACESSE O SENDGRID
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
