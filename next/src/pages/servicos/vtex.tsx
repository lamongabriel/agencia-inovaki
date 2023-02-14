import Image from 'next/image';

import {
  FaClipboardList,
  FaPencilAlt,
  FaGlobeAmericas,
  FaChartLine,
  FaLock,
  FaCity,
  FaComments,
  FaCheck,
} from 'react-icons/fa';

import Link from 'next/link';
import BannerTop from '../../components/UI/Banner/BannerTop';
import Layout from '../../components/UI/Layout';
import Heading from '../../components/UI/Heading';
import Text from '../../components/UI/Text';
import SEO from '../../components/SEO';

import logoVtex from '../../assets/images/logos/logo-vtex.svg';
import bg from '../../assets/images/Projetos/Aquamar/bg-aquamar.png';
import arrowDown from '../../assets/images/Servicos/arrow-down.png';
import dottedPattern from '../../assets/images/dotted-pattern.png';

import vtex1 from '../../assets/images/Servicos/Vtex/vtex-1.png';
import vtex3 from '../../assets/images/Servicos/Vtex/vtex-3.png';
import vtex4 from '../../assets/images/Servicos/Vtex/vtex-4.png';

import styles from '../../styles/pages/servicos/internal.module.scss';
import Button from '../../components/UI/Button';

export default function VTEX() {
  return (
		<Layout>
			<SEO
				pageTitle='Inovaki | VTEX'
				pageDescription='A VTEX é uma das melhores plataformas de e-commerce disponíveis no mercado. Não perca mais tempo, entre em contato conosco e veja como podemos ajudá-lo a ter sucesso no mundo digital.'
				pageUrl='https://inovaki.vercel.app/servicos/vtex'
				pageImage='/images/vtex.png'
			/>
			<BannerTop image={bg} auxiliaryText="A maior plataforma E-Commerce">
				<strong>VTEX</strong> VTEX
			</BannerTop>
			<div className={styles.vtex}>
				<section className={styles.contentArea}>

					<div className={`${styles.arrowDown} container d-flex justify-content-center align-items-center`}>
						<Image src={arrowDown} alt='Seta apontando para baixo' />
					</div>

					<div className={`${styles.content} container mx-auto`}>

						<div className={`${styles.experienceContent} row container align-items-center`}>
							<div className='col-lg-5 text-end'>
								<Image src={logoVtex} alt='Logo VTEX' />
								<Heading small className='text-end'>
									A plataforma de comércio digital para empresas!
								</Heading>
								<Text className='text-end'>
									Você quer levar seu negócio digital ao próximo nível?
									<strong> Nós somos especialistas na plataforma VTEX </strong>
									e temos uma vasta experiência no desenvolvimento
									de lojas virtuais para empresas de todos os setores,
									incluindo gigantes do comércio brasileiro.
								</Text>
								<Text>
									Já desenvolvemos soluções incríveis para empresas como
									<strong> Aquamar</strong>,
									<strong> Hope Lingerie</strong>,
									<strong> Fashly</strong> e
									<strong> Custa Pouco Seduzir</strong>.
								</Text>
							</div>
							<Image className='col-lg-5 offset-lg-2' src={vtex1} alt='VTEX'/>
						</div>

						<div className={`${styles.whatWeDoContent} container row align-items-center`}>
							<Image className='col-lg-5 order-lg-1 order-2' src={vtex3} alt='VTEX'/>
							<div className='col-lg-5 offset-lg-2 order-lg-2 order-1 mb-lg-0'>
								<Heading small className='text-start'>
									O que fazemos?
								</Heading>
								<div>
									<div>
										<FaCheck size={24} />
										<p>Somos especiadivstas em VTEX IO</p>
									</div>

									<div>
										<FaCheck size={24} />
										Desenvolvemos soluções de pagamento;
										</div>

									<div>
										<FaCheck size={24} />
										Customizamos layouts com sua marca;
										</div>

									<div>
										<FaCheck size={24} />
										Criamos Landing Pages que convertem;
										</div>

									<div>
										<FaCheck size={24} />
										Integramos outras plataformas na VTEX;
										</div>

									<div>
										<FaCheck size={24} />
										Prestamos suporte e manutenção de lojas;
										</div>

									<div>
										<FaCheck size={24} />
										Possuímos equipe multifuncional;
										</div>
								</div>
							</div>
						</div>

					</div>
				</section>

							<div className={styles.contactUs}>
								<div className={styles.teste} style={{
								  backgroundImage: `url(${vtex4.src})`,
								}}>
								</div>
								<div className={styles.contactText}>
									<div>
											Não perca mais tempo. Escolha a Inovaki e tenha a
											<strong> certeza de que seu negócio estará nas
											mãos de especialistas VTEX</strong>.
									</div>
										<Button bg='#e31c58' color='#fff' rightIcon={FaComments}>
											Fale com nosso comercial
										</Button>
								</div>
							</div>

				<section className={styles.projectSheet}>
					<div className={styles.buttonPlatform}>
						O QUE É A VTEX?
					</div>
						<div className='container'>
							<div className={styles.projectBox}>
								<p>
									Se você está procurando por uma solução completa para o
									sucesso do seu negócio digital, então você precisa conhecer a plataforma
									<strong> VTEX</strong>.
									Ela é diferenciada por oferecer recursos incríveis, como
									<strong> facilidade de uso, gestão centralizada,
										customização e estabilidade</strong>,
									tornando-a a escolha perfeita para
									empresas que buscam <strong>excelência na gestão do e-commerce</strong>.
								</p>
							</div>
						</div>
					<div className={`${styles.projectSheetContent} container row row-cols-lg-3 row-cols-md-2`}>

						<div className={styles.benefits}>
							<div>
								<FaClipboardList color='white'/>
							</div>
							<Heading small>
								Gestão centralizada do seu negócio
							</Heading>
							<Text>
								Com a plataforma, o lojista tem uma completa gestão do seu
								negócio, incluindo a administração de produtos, ofertas,
								gestão de estoque e controle de vendas.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaPencilAlt color='white'/>
							</div>
							<Heading small>
								Personalize sua loja com a sua marca
							</Heading>
							<Text>
								A VTEX é altamente flexível em relação a personalização,
								permitindo que o lojista escolha como será sua loja virtual,
								de acordo com suas necessidades e metas.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaGlobeAmericas color='white'/>
							</div>
							<Heading small>
								Múltiplas línguas e moedas
							</Heading>
							<Text>
								Expanda seus negócios para o mundo inteiro com lojas multilíngues
								e gerencie moedas e formas de pagamento locais com tranquilidade.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaChartLine color='white'/>
							</div>
							<Heading small>
								Estabilidade e escalabilidade
							</Heading>
							<Text>
							Com a VTEX, você pode ter a tranquilidade de uma loja virtual
							sempre funcional. Além disso, a escalabilidade da
							plataforma garante seu negócio sempre no topo.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaLock color='white'/>
							</div>
							<Heading small>
								Segurança nas operações
							</Heading>
							<Text>
								Escolha a plataforma e tenha uma experiência de
								compra e venda sempre segura e tranquila,
								tanto para o lojista quanto para o comprador.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaCity color='white'/>
							</div>
							<Heading small>
								Plataforma omnichannel
							</Heading>
							<Text>
								Com a VTEX, você pode integrar diversos canais de venda,
								desde marketplaces até redes sociais, tornando a venda mais fácil e eficiente.
							</Text>
						</div>
					</div>

					<div className={`${styles.buttonsMore} row container mx-auto`}>
						<Link href='#' className={`${styles.buttonPlatform} col-12 col-md-4`}>
							CONHEÇA NOSSOS PROJETOS
						</Link>
						<Link href='https://vtex.com/br-pt/' target={'_blank'} className={`${styles.buttonPlatform} col-12 col-md-4 offset-md-1`}>
							ACESSE A VTEX
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
