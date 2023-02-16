import Image from 'next/image';

import {
  FaChartLine,
  FaLock,
  FaComments,
  FaCheck,
  FaPaintBrush,
  FaSearch,
  FaMobileAlt,
  FaDollarSign,
} from 'react-icons/fa';

import Link from 'next/link';
import BannerTop from '../../components/UI/Banner/BannerTop';
import Layout from '../../components/UI/Layout';
import Heading from '../../components/UI/Heading';
import Text from '../../components/UI/Text';
import SEO from '../../components/SEO';

import logoWordPress from '../../assets/images/logos/logo-wordpress.svg';
import bg from '../../assets/images/Servicos/Wordpress/bg-wordpress.png';
import arrowDown from '../../assets/images/Servicos/arrow-down.png';
import dottedPattern from '../../assets/images/dotted-pattern.png';

import wordPress2 from '../../assets/images/Servicos/Wordpress/wordpress-2.jpg';
import wordPress3 from '../../assets/images/Servicos/Wordpress/wordpress-3.png';
import wordPress4 from '../../assets/images/Servicos/Wordpress/wordpress-4.png';

import styles from '../../styles/pages/servicos/internal.module.scss';
import Button from '../../components/UI/Button';

export default function WordPress() {
  return (
		<Layout>
			<SEO
				pageTitle="Inovaki | WordPress"
				pageDescription="O WordPress é uma plataforma que permite aos usuários criar e gerenciar sites, blogs e lojas virtuais. Não perca mais tempo, entre em contato conosco e veja como podemos ajudá-lo a ter sucesso no mundo digital."
				pageUrl="https://inovaki.vercel.app/servicos/wordpress"
				pageImage="/images/wordpress.png"
			/>
			<BannerTop
				image={bg}
				auxiliaryText="Plataforma para criação e gerenciamento de sites"
			>
				<strong>WORDPRESS</strong> WORDPRESS
			</BannerTop>
			<div className={styles.wordPress}>
				<section className={styles.contentArea}>
					<div
						className={`${styles.arrowDown} container d-flex justify-content-center align-items-center`}
					>
						<Image src={arrowDown} alt="Seta apontando para baixo" />
					</div>

					<div className={`${styles.content} container mx-auto`}>
						<div
							className={`${styles.experienceContent} row container align-items-center`}
						>
							<div className="col-lg-5 text-end">
								<Image src={logoWordPress} alt="Logo WordPress" />
								<Heading small className="text-end">
									Crie sites e blogs com facilidade e velocidade!
								</Heading>
								<Text className="text-end">
									Você quer levar seu negócio digital ao próximo nível?
									<strong> Nós somos especialistas na plataforma WordPress </strong>, podemos
									oferecer a você um site personalizado, escalável e
									profissional que atende às necessidades do seu negócio.
								</Text>
								<Text>
									Já desenvolvemos soluções incríveis para empresas como
									<strong> IPB - Igreja Presbiteriana do Brasil</strong> e<strong> APECOM</strong>.
								</Text>
							</div>
							<Image
								className="col-lg-5 offset-lg-2"
								src={wordPress4}
								alt="WordPress"
							/>
						</div>

						<div
							className={`${styles.whatWeDoContent} container row align-items-center`}
						>
							<Image
								className="col-lg-5 order-lg-1 order-2"
								src={wordPress2}
								alt="WordPress"
							/>
							<div className="col-lg-5 offset-lg-2 order-lg-2 order-1 mb-lg-0">
								<Heading small className="text-start">
									O que fazemos?
								</Heading>
								<div>
									<div>
										<FaCheck size={24} />
										Criamos sites personalizados;
									</div>

									<div>
										<FaCheck size={24} />
										Desenvolvemos blogs;
									</div>

									<div>
										<FaCheck size={24} />
										Otimização para motores de busca (SEO);
									</div>

									<div>
										<FaCheck size={24} />
										Instalação e configuração de plugins;
									</div>

									<div>
										<FaCheck size={24} />
										Desenvolvimento de soluções de segurança;
									</div>

									<div>
										<FaCheck size={24} />
										Prestamos suporte e manutenção;
									</div>

									<div>
										<FaCheck size={24} />
										Possúimos múltiplos profissionais capacitados;
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className={styles.contactUs}>
					<div
						className={styles.teste}
						style={{
						  backgroundImage: `url(${wordPress3.src})`,
						}}
					></div>
					<div className={styles.contactText}>
						<div>
							Não perca mais tempo. Escolha a Inovaki e tenha a
							<strong>
								{' '}
								certeza de que seu negócio estará nas mãos de especialistas WordPress
							</strong>
							.
						</div>
						<Button bg="#464342" color="#fff" rightIcon={FaComments}>
							Fale com nosso comercial
						</Button>
					</div>
				</div>

				<section className={styles.projectSheet}>
					<div className={styles.buttonPlatform}>O QUE É O WORDPRESS?</div>
					<div className="container">
						<div className={styles.projectBox}>
							<p>
								O WordPress é uma plataforma de gerenciamento de conteúdo (CMS)
								que permite aos usuários criar e gerenciar sites, blogs e lojas
								virtuais de maneira fácil e intuitiva.
								Se você busca ter um site personalizado, profissional, eficaz e que
								ajuda a sua empresa a se destacar online, entre em contato com a
								Inovaki <strong>e faremos o seu projeto se tornar realidade</strong>. Não perca mais
								tempo e invista em um site de qualidade com o WordPress.
							</p>
						</div>
					</div>
					<div
						className={`${styles.projectSheetContent} container row row-cols-lg-3 row-cols-md-2`}
					>
						<div className={styles.benefits}>
							<div>
								<FaPaintBrush color="white" />
							</div>
							<Heading small>Designs personalizáveis</Heading>
							<Text>
								Oferecendo uma grande variedade de temas e plugins para
								personalizar o design e a funcionalidade do seu site,
								com o Wordpress é possível criar um site único e com a sua marca.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaSearch color="white" />
							</div>
							<Heading small>Pronto para SEO</Heading>
							<Text>
								O WordPress possui recursos de SEO incorporados, como a capacidade de editar meta
								tags e títulos de páginas, e pode ser estendido com plugins dedicados para SEO.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaMobileAlt color="white" />
							</div>
							<Heading small>Sites responsivos</Heading>
							<Text>
								Tanto para mobile quanto para desktop, o WordPress é capaz de entregar
								um site responsível a adaptável para todos os tamanhos de tela.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaChartLine color="white" />
							</div>
							<Heading small>Alto desempenho</Heading>
							<Text>
								Rápido e responsivo, é importante escolher um bom
								provedor de hospedagem, otimizar imagens, utilizar plugins de
								cache e escolher temas leves e otimizados podem ajudar a
								melhorar a velocidade do seu site.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaLock color="white" />
							</div>
							<Heading small>Alta segurança</Heading>
							<Text>
								O Wordpress é uma das plataformas mais seguras da atualidade,
								é frequentemente atualizado para corrigir falhas de segurança
								e melhorar a proteção do sistema.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaDollarSign color="white" />
							</div>
							<Heading small>Loja virtual</Heading>
							<Text>
								Usando plugins específicos para comércio eletrônico, como o WooCommerce, é possível
								desenvolver facilmente sua loja virtual. Ele oferece recursos robustos
								para gerenciar produtos, pedidos e pagamentos.
							</Text>
						</div>
					</div>

					<div className={`${styles.buttonsMore} row container mx-auto`}>
						<Link
							href="#"
							className={`${styles.buttonPlatform} col-12 col-md-4`}
						>
							CONHEÇA NOSSOS PROJETOS
						</Link>
						<Link
							href="https://wordpress.com/"
							className={`${styles.buttonPlatform} col-12 col-md-4 offset-md-1`}
						>
							ACESSE O WORDPRESS
						</Link>
					</div>

					<div className={styles.dottedPattern}>
						<Image
							src={dottedPattern}
							className="w-100"
							alt="Textura de bolinhas"
						/>
					</div>
				</section>
			</div>
		</Layout>
  );
}
