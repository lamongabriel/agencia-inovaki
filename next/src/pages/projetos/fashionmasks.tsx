import Image from 'next/image';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';
import Link from 'next/link';
import BannerTop from '../../components/UI/Banner/BannerTop';
import bg from '../../assets/images/Projetos/FashionMasks/bg-fashionmasks.png';

import Layout from '../../components/UI/Layout';
import Heading from '../../components/UI/Heading';
import Text from '../../components/UI/Text';

import Button from '../../components/UI/Button';

import styles from '../../styles/pages/projetos/internal.module.scss';

import logoFashionMasks from '../../assets/images/logos/logo-fashionmasks.png';
import imageFashionMasks1 from '../../assets/images/Projetos/FashionMasks/img-fashion1.png';
import imageFashionMasks2 from '../../assets/images/Projetos/FashionMasks/img-fashion2.png';
import imageFashionMasks3 from '../../assets/images/Projetos/FashionMasks/img-fashion3.png';

export default function FashionMasks() {
  return (
		<Layout>
			<BannerTop image={bg} auxiliaryText="FASHION MASKS">
				<strong>CASES</strong> E PROJETOS
			</BannerTop>
			<section className={styles.contentArea}>
				<div className={`${styles.yellowBox} container row mx-auto`}>
					<div className='col-lg-3 col-12 text-center'>
						<div className={`${styles.arrowUp} mx-auto`}></div>
					</div>
					<Heading small className='d-flex align-items-center'>
						<strong>
							Na pandemia surgiu a Fashion Masks, uma startup de moda de máscaras
							com uma arrecadação superior a R$ 1 Milhão em 2020 via e-commerce.
							Seu foco foi na inclusão social e a geração de renda para os trabalhadores
							informais.
						</strong>
					</Heading>
				</div>
				<div className={`${styles.content} container mx-auto`}>
					<Text>
							No ano de 2020 fomos desafiados por uma pandemia, não foi um ano fácil para todos,
							porém em meio as dificuldades abraçamos um projeto inovador e com foco em ajudar
							pessoas e famílias. A Fashion Masks Brasil foi idealizada pelo CEO Brenno Faro onde
							sua vontade era ressaltar a importância das pessoas e da renda que elas precisavam
							para manter seus lares.
					</Text>
					<Text>
						Após algumas reuniões de apresentação do projeto nossa equipe iniciou a caminhada junto
						desse projeto incrível desenvolvendo então ações on-line para a Fashion Masks. No início
						desenvolvemos algumas Landing Pages para ações de venda de máscaras e apresentação do
						projeto, com o sucesso e os resultados expressivos  decidimos então ampliar o projeto
						para o mercado	de varejo com venda de diversos tipos de máscaras e facilitar a
						compra de	materiais básicos	para a confecção de máscaras.
					</Text>
					<div className='text-center'>
						<Image src={imageFashionMasks1} alt='Imagem Fashion Masks'/>
					</div>
					<Text className='my-5'>
						Em menos de 1 mês após o lançamento da primeira landing page, a primeira loja virtual da
						Fashion Masks já estava liberada para acesso e recebendo pedidos de todo Brasil.
						Chegamos também em um resultado incrível onde em menos de 6 meses alcançamos o
						resultado de arrecadação de mais de R$1 milhão.
					</Text>
					<div className='text-center'>
						<Image src={imageFashionMasks2} alt='Imagem Fashion Masks'/>
					</div>
					<div className='text-center'>
						<Image src={imageFashionMasks3} alt='Imagem Fashion Masks'/>
					</div>
					<Heading className={styles.titleFashionMasks}>
						MAIS DE R$1 MILHÃO <br />
						<strong>EM VENDAS EM MENOS</strong> <br />
						DE 6 MESES DE PROJETO
					</Heading>
				</div>
			</section>
			<section className={styles.projectSheet}>
				<div>
					<Button small color='#fff' bg='#333'>FICHA DO PROJETO</Button>
				</div>
				<div className={`${styles.projectSheetContent} container row mx-auto`}>
					<div>
						<div>
							<strong>Plataforma: </strong> <span>Vtex</span>
						</div>
						<div>
							<strong>Período: </strong> <span>2020 - 2021</span>
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
							<Link href="https://www.eaquamar.com.br/">
								<Image src={logoFashionMasks} alt='Logo Fashion Masks'/>
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
