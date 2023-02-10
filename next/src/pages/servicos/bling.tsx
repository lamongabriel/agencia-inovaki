import Image from 'next/image';

import {
  FaFileInvoiceDollar,
  FaShoppingCart,
  FaPiggyBank,
  FaDollarSign,
  FaShippingFast,
  FaClipboardList,
  FaComments,
  FaCheck,
} from 'react-icons/fa';

import Link from 'next/link';
import BannerTop from '../../components/UI/Banner/BannerTop';
import Layout from '../../components/UI/Layout';
import Heading from '../../components/UI/Heading';
import Text from '../../components/UI/Text';
import SEO from '../../components/SEO';

import logoBling from '../../assets/images/logos/logo-bling.svg';
import bg from '../../assets/images/Projetos/Aquamar/bg-aquamar.png';
import arrowDown from '../../assets/images/Servicos/arrow-down.png';
import dottedPattern from '../../assets/images/dotted-pattern.png';

import bling2 from '../../assets/images/Servicos/Bling/bling-2.png';
import bling3 from '../../assets/images/Servicos/Bling/bling-3.png';
import bling4 from '../../assets/images/Servicos/Bling/bling-4.png';

import styles from '../../styles/pages/servicos/internal.module.scss';
import Button from '../../components/UI/Button';

export default function Bling() {
  return (
		<Layout>
			<SEO
				pageTitle='Inovaki | VTEX'
				pageDescription='A VTEX é uma das melhores plataformas de e-commerce disponíveis no mercado. Não perca mais tempo, entre em contato conosco e veja como podemos ajudá-lo a ter sucesso no mundo digital.'
				pageUrl='https://inovaki.vercel.app/servicos/vtex'
				pageImage='/images/vtex.png'
			/>
			<BannerTop image={bg} auxiliaryText="A maior plataforma E-Commerce">
				<strong>BLING</strong> BLING
			</BannerTop>
			<div className={styles.bling}>
				<section className={styles.contentArea}>

					<div className={`${styles.arrowDown} container d-flex justify-content-center align-items-center`}>
						<Image src={arrowDown} alt='Seta apontando para baixo' />
					</div>

					<div className={`${styles.content} container mx-auto`}>

						<div className={`${styles.experienceContent} row container align-items-center`}>
							<div className='col-lg-5 text-end'>
								<Image src={logoBling} alt='Logo Bling' />
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
									<strong> FashionMasks</strong>,
									<strong> Fashly</strong>.
								</Text>
							</div>
							<Image className='col-lg-5 offset-lg-2' src={bling3} alt='Bling'/>
						</div>

						<div className={`${styles.whatWeDoContent} container row align-items-center`}>
							<Image className='col-lg-5 order-lg-1 order-2' src={bling4} alt='Bling'/>
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
								  backgroundImage: `url(${bling2.src})`,
								}}>
								</div>
								<div className={styles.contactText}>
									<div>
											Não perca mais tempo. Escolha a Inovaki e tenha a
											<strong> certeza de que seu negócio estará nas
											mãos de especialistas VTEX</strong>.
									</div>
										<Button bg='#0ad692' color='#fff' rightIcon={FaComments}>
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
								<FaFileInvoiceDollar color='white'/>
							</div>
							<Heading small>
								Emissões de Notas Fiscais
							</Heading>
							<Text>
								Efetue a emissão de notas fiscais de forma simplificada,
								completando a configuração inicial apenas uma vez.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaShoppingCart color='white'/>
							</div>
							<Heading small>
								Integração E-commerce Marketplaces
							</Heading>
							<Text>
								Integre a sua loja virtual às principais plataformas e
								marketplaces do mercado.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaPiggyBank color='white'/>
							</div>
							<Heading small>
								Gestão de Finanças e Orçamento
							</Heading>
							<Text>
								Mantenha o controle de suas contas e orçamento, tornando a gestão
								financeira de seu negócio mais eficiente e simplificada.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaDollarSign color='white'/>
							</div>
							<Heading small>
								Links de todos os Pagamentos
							</Heading>
							<Text>
								Aceite pagamentos via Boleto, Pix ou cartão de crédito sem a
								necessidade de uma máquina de cartão.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaShippingFast color='white'/>
							</div>
							<Heading small>
								Integração com os Correios
							</Heading>
							<Text>
								Imprima etiquetas de rastreamento e mantenha o cliente informado
								sobre o progresso das entregas.
							</Text>
						</div>
						<div className={styles.benefits}>
							<div>
								<FaClipboardList color='white'/>
							</div>
							<Heading small>
								Administração de Serviços
							</Heading>
							<Text>
								Aprimore a gestão de seu empreendimento com uma ampla gama de
								serviços fundamentais para o seu sucesso empresarial.
							</Text>
						</div>
					</div>

					<div className={`${styles.buttonsMore} row container mx-auto`}>
						<Link href='#' className={`${styles.buttonPlatform} col-12 col-md-4`}>
							CONHEÇA NOSSOS PROJETOS
						</Link>
						<Link href='https://vtex.com/br-pt/' className={`${styles.buttonPlatform} col-12 col-md-4 offset-md-1`}>
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
