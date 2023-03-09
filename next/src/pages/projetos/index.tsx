import { ReactNode, useContext } from 'react';

// Bootstrap
import { AccordionContext } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

// Components
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import BannerTop from '../../components/UI/Banner/BannerTop';
import Layout from '../../components/UI/Layout';

// Images
import bg from '../../assets/images/Sobre/bg-sobre.png';
import aquamar from '../../assets/images/Projetos/projeto-aquamar.jpg';
import custaPouco from '../../assets/images/Projetos/projeto-custa.jpg';
import fashionMasks from '../../assets/images/Projetos/projeto-fashionmasks.jpg';
import ipb from '../../assets/images/Projetos/projeto-ipb.jpg';
import ipbSites from '../../assets/images/Projetos/projeto-ipbsites.jpg';
import masterCar from '../../assets/images/Projetos/projeto-mastercar.jpg';

// Styles
import styles from '../../styles/pages/projetos.module.scss';
import Heading from '../../components/UI/Heading';
import Text from '../../components/UI/Text';
import SEO from '../../components/SEO';

interface CustomToggleProps {
	children: ReactNode;
	eventKey: string;
	callback?: any;
}

function ContextAwareToggle({
  children,
  eventKey,
  callback,
}: CustomToggleProps) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
		<button type="button" className="" onClick={decoratedOnClick}>
			{children}
			{isCurrentEventKey ? (
				<AiOutlineMinus size={36} />
			) : (
				<AiOutlinePlus size={36} />
			)}
		</button>
  );
}

export default function Projetos() {
  return (
		<Layout>
			<SEO
				pageTitle="Inovaki | Cases e Projetos"
				pageDescription="Conheça as nossas soluções em inovação e desenvolvimento digital."
				pageUrl="https://inovaki.vercel.app/projetos"
				pageImage="/images/inovaki-bg.png"
			/>
			<BannerTop image={bg} auxiliaryText="Conheça nossa Agência!">
				<strong>CASES</strong> E PROJETOS
			</BannerTop>
			<section className="container">
				<div className={styles.accordionDiv}>
					<Accordion
						defaultActiveKey="0"
						alwaysOpen
						className={styles.accordion}
					>
						<Card className={styles.accordionItem}>
							<Card.Header className={styles.accordionButton}>
								<ContextAwareToggle eventKey="0">E-COMMERCE</ContextAwareToggle>
							</Card.Header>
							<Accordion.Collapse eventKey="0" className={styles.accordionBody}>
								<Card.Body className={`${styles.accordionBody} row pb-5`}>
									<div className="col-lg-5">
										<Link href='/projetos/aquamar'>
											<Image src={aquamar} alt="Loja aquamar" />

											<Heading small>
												<strong>AQUAMAR</strong>
											</Heading>
											<Text>
												Atuamos diretamente no E-commerce da marca prestando
												Suporte e Manutenção na plataforma Vtex e desenvolvendo
												soluções inovadoras para o público do varejo.
											</Text>
										</Link>
									</div>

									<div className="col-lg-5 offset-lg-2">
										<Link href='/projetos/fashionmasks'>
											<Image src={fashionMasks} alt="Costureiras Fashion Masks" />

											<Heading small>
												<strong>FASHION MASKS</strong>
											</Heading>
											<Text>
												Em 2020 fomos desafiados por uma pandemia e abraçamos um
												projeto com foco em ajudar pessoas e famílias, e em menos
												de 6 meses alcançamos o resultado de arrecadação de mais
												de R$1 milhão.
											</Text>
										</Link>
									</div>

									<div className="col-lg-5">
										<Link href='/projetos/custapouco'>
											<Image src={custaPouco} alt="Loja Custa Pouco Seduzir" />

											<Heading small>
												<strong>CUSTA POUCO SEDUZIR</strong>
											</Heading>
											<Text>
												Oferecemos o serviço de análise e otimização do site,
												incluindo a melhoria do layout e a identificação de falhas
												no processo de cadastro e envio de produtos. Desenvolvemos
												novas funcionalidades e recursos de mídia para a marca,
												com o objetivo de aprimorar a experiência do usuário e
												maximizar a eficiência operacional.
											</Text>
										</Link>
									</div>
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card className={styles.accordionItem}>
							<Card.Header className={styles.accordionButton}>
								<ContextAwareToggle eventKey="1">
									SOLUÇÕES E INTEGRAÇÕES
								</ContextAwareToggle>
							</Card.Header>
							<Accordion.Collapse eventKey="1" className={styles.accordionBody}>
								<Card.Body className={`${styles.accordionBody} row pb-5`}>
									<div className="col-lg-5">
										<Link href='/projetos/ipbsites'>
											<Image src={ipbSites} alt="Imagem IPB Sites" />

											<Heading small>
												<strong>IPB - PLATAFORMA DE CRIAÇÃO DE SITES</strong>
											</Heading>
											<Text>
												Desenvolvemos uma plataforma em que é possível gerar um
												site personalizado para sua igreja. Ao acessar o IPB
												Sites, é possível registrar suas informações e nós criamos
												um novo site do zero exclusivamente para a sua igreja
												local. Mais de 100 sites, por todo o Brasil, já foram
												criados por esta plataforma!
											</Text>
										</Link>
									</div>

									{/*
									<div className="col-lg-5 offset-lg-2">
										<Link href='#'>
											<Image src={fashly} alt="Costureiras Fashion Masks" />

											<Heading small>
												<strong>FASHION MASKS - BLING</strong>
											</Heading>
											<Text>
												Integramos a plataforma VTEX e o sistema ERP Bling para o
												projeto Fashion Masks, garantindo uma conexão completa e
												confiável. Através dessa integração, foi possível
												gerenciar o sistema de emissão de notas fiscais, controle
												de estoque e envio de produtos de maneira ágil e
												eficiente.
											</Text>
										</Link>
									</div>
									 */}

								</Card.Body>
							</Accordion.Collapse>
						</Card>
						{/*
						<Card className={styles.accordionItem}>
							<Card.Header className={styles.accordionButton}>
								<ContextAwareToggle eventKey="2">SISTEMAS</ContextAwareToggle>
							</Card.Header>
							<Accordion.Collapse eventKey="2" className={styles.accordionBody}>
								<Card.Body className={`${styles.accordionBody} row pb-5`}>
									 <div className="col-lg-5">
										<Link href='#'>
											<Image src={vitorContabilidade} alt="Imagem Vitor Contabilidades" />

											<Heading small>
												<strong>
													VITOR CONTABILIDADE - SISTEMAS DE COBRANÇA
												</strong>
											</Heading>
											<Text>
												Gerenciamos todos os clientes da área contábil,
												enfatizando as emissões de cobranças por meio de e-mail,
												SMS e boletos impressos, onde o foco do projeto foi:
												Reduzir o tempo de processo, custos bancários e
												inadimplência. São realizados mais de 900 disparos mensais
												de cobrança.
											</Text>
										</Link>
									</div>

									<div className="col-lg-5 offset-lg-2">
										<Link href='#'>
											<Image src={granilha} alt="Imagem Granilha" />

											<Heading small>
												<strong>GRANILHA - SISTEMA DE ORÇAMENTO</strong>
											</Heading>
											<Text>
												O nosso serviço B2B (Business-to-Business) consiste em
												disponibilizar um vendedor externo para atender outras
												empresas da região, oferecendo o gerenciamento completo
												dos pedidos de vendas. Através do nosso sistema, é
												possível cadastrar os pedidos de forma ágil e eficiente,
												otimizando o processo de compra e venda entre empresas.
											</Text>
										</Link>
									</div>

									<div className="col-lg-5">
										<Link href='#'>
											<Image src={granilhaFinanceiro} alt="imagem Granilha" />

											<Heading small>
												<strong>GRANILHA - GESTÃO FINANCEIRA</strong>
											</Heading>
											<Text>
												Fomos responsáveis pela criação de um sistema de controle
												de contas, entradas e saídas do caixa, controle de
												clientes, emissão de boletos e controle de pagamentos.
											</Text>
										</Link>
									</div>

								</Card.Body>
							</Accordion.Collapse>
						</Card>
						*/}
						<Card className={styles.accordionItem}>
							<Card.Header className={styles.accordionButton}>
								<ContextAwareToggle eventKey="3">WEBSITES</ContextAwareToggle>
							</Card.Header>
							<Accordion.Collapse eventKey="3" className={styles.accordionBody}>
								<Card.Body className={`${styles.accordionBody} row pb-5`}>
									<div className="col-lg-5">
										<Link href='/projetos/ipb'>
											<Image src={ipb} alt="Imagem IPB" />

											<Heading small>
												<strong>IPB - SITE OFICIAL</strong>
											</Heading>
											<Text>
												Nossa agência foi responsável pelo desenvolvimento do novo
												site oficial da instituição religiosa no Igreja
												Presbiteriana do Brasil. Contendo áreas para notícias,
												eventos, compartilhamento de documentos e muito mais!
											</Text>
										</Link>
									</div>

									{/* <div className="col-lg-5 offset-lg-2">
										<Link href='#'>
											<Image src={acaiMax} alt="Imagem Acaí do Max" />

											<Heading small>
												<strong>AÇAÍ DO MAX</strong>
											</Heading>
											<Text>
												Fomos responsáveis pelo desenvolvimento do site, design e
												criação de conteúdo. Oferecendo novas oportunidades e um
												alcance muito maior, que apenas a loja física não seria
												capaz de disponibilizar.
											</Text>
										</Link>
								</div> */}

									<div className="col-lg-5 offset-lg-2">
										<Link href='/projetos/mastercar'>
											<Image src={masterCar} alt="Imagem Mastercar" />

											<Heading small>
												<strong>MASTERCAR - ABM</strong>
											</Heading>
											<Text>
												Veja como é fácil contratar a proteção do seu carro! Em um
												site bonito e moderno, conteúdos atualizados e de fácil
												entendimento, desenvolvemos tudo com atenção e cuidado, o
												mesmo tratamento que seu carro irá receber!
											</Text>
										</Link>
									</div>

									{/* <div className="col-lg-5 offset-lg-2">
										<Link href='#'>
											<Image src={parKids} alt="Imagem Parkids" />

											<Heading small>
												<strong>PARKIDS RECREAÇÃO</strong>
											</Heading>
											<Text>
												Um site seguro e bonito, projetado para facilitar o seu
												acesso, conhecer mais a sua estrutura e fazer orçamentos.
												Tendo a missão de trazer segurança e diversão as crianças,
												assim como conforto e tranquilidade para os pais.
											</Text>
										</Link>
							</div> */}
								</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
				</div>
			</section>
		</Layout>
  );
}
