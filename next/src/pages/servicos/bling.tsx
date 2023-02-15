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
				pageTitle='Inovaki | Bling'
				pageDescription='Bling é o sistema de gestão online que descomplica o seu negócio! Nossa agência trabalha com a integração e desenvolvimento de soluções que integrem sua plataforma com as aplicações da Bling.'
				pageUrl='https://inovaki.vercel.app/servicos/bling'
				pageImage='/images/bling.jpg'
			/>
			<BannerTop image={bg} auxiliaryText="ERP de Notas Ficais e Gestões">
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
									O sistema de gestão online que descomplica o seu negócio!
								</Heading>
								<Text className='text-end'>
									Você quer levar seu negócio digital ao próximo nível?
									<strong> Nós somos especialistas no sistema Bling</strong>,
									a solução completa e intuitiva que pode revolucionar a maneira
									como você administra sua empresa. Podemos integrar sua loja virtual
									aos principais marketplaces e plataformas, de forma simples e prática,
									com uma equipe capacitada e experiente no assunto!
								</Text>
								<Text>
									Já desenvolvemos soluções incríveis para empresas como
									<strong> Fashion Masks</strong>,
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
										Integração com Plataformas e Marketplaces;
									</div>

									<div>
										<FaCheck size={24} />
										Controle Financeiro;
									</div>

									<div>
										<FaCheck size={24} />
										Recebimento de Pagamentos;
									</div>

									<div>
										<FaCheck size={24} />
										Rastreamento de Entregas;
									</div>

									<div>
										<FaCheck size={24} />
										Gerenciamento de Estoque;
									</div>

									<div>
										<FaCheck size={24} />
										Emissão de Notas Fiscais;
									</div>

									<div>
										<FaCheck size={24} />
										Integrações Logísticas;
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
								mãos de especialistas no Sistema Bling</strong>.
						</div>
							<Button bg='#0ad692' color='#fff' rightIcon={FaComments}>
								Fale com nosso comercial
							</Button>
					</div>
				</div>

				<section className={styles.projectSheet}>
					<div className={styles.buttonPlatform}>
						O QUE É O BLING?
					</div>
					<div className='container'>
						<div className={styles.projectBox}>
							<p>
								É a solução de gestão empresarial que você precisa para otimizar
								seus processos e alcançar o sucesso!
								O <strong> BLING</strong> oferece uma ampla gama de serviços indispensáveis
								para o sucesso de sua empresa, tornando a
								<strong> gestão de seu negócio mais eficiente e simplificada.	</strong>
								Não perca mais tempo com soluções complicadas e ineficientes, experimente o
								<strong> BLING</strong> agora e comece a <strong>alavancar o sucesso de sua
								empresa!</strong>
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
						<Link href='https://www.bling.com.br/' target={'_blank'} className={`${styles.buttonPlatform} col-12 col-md-4 offset-md-1`}>
							ACESSE O BLING
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
