import Image from 'next/image';
import { BsFillChatDotsFill } from 'react-icons/bs';
import BannerTop from '../components/UI/Banner/BannerTop';

import bg from '../assets/images/Sobre/bg-sobre.png';
import Layout from '../components/UI/Layout';

import styles from '../styles/pages/contato.module.scss';
import Text from '../components/UI/Text';
import Heading from '../components/UI/Heading';

export default function Contato() {
  return (
		<Layout>
			<BannerTop image={bg} auxiliaryText="Conheça nossa Agência!">
				<strong>FALE</strong>CONOSCO
			</BannerTop>
			<section className={styles.contact}>
				<div className={`${styles.formContainer} container`}>
					<div className={`${styles.arrowUp} mx-auto`}></div>
					<div className="text-center pt-4">
						<BsFillChatDotsFill size={65} color='#000'/>
					</div>
					<Text>
						Utilize o formulário abaixo para os enviar
						uma mensagem direta. Após o recebimento da
						mensagem entraremos em cotato pelo e-mail informado
						baixo. Para que o contato seja feito corretamente,
						preencha todos os campos.
					</Text>
					<form action="">
							<div className="row">
								<div className="col-lg-6">
									<label for="fname">SEU NOME</label>
									<input type="text" id="fname" name="fname" />
								</div>
								<div className="col-lg-6">
									<label for="lname">NOME DA EMPRESA</label>
									<input type="text" id="lname" name="lname" />
								</div>
							</div>
							<div className="row">
								<div className="col-lg-6">
									<label for="fname">E-MAIL DE CONTATO</label>
									<input type="text" id="fname" name="fname" />
								</div>
								<div className="col-lg-6">
									<label for="lname">TELEFONE OU WHATSAPP</label>
									<input type="text" id="lname" name="lname" />
								</div>
							</div>
							<div>
								<div>
									<label for="fname">ASSUNTO</label>
									<input type="text" id="fname" name="fname" />
								</div>
							</div>
							<div>
								<div>
									<label for="lname">MENSAGEM</label>
									<textarea name="message" rows="10" cols="30"></textarea>
								</div>
							</div>
						<div className={`${styles.botao} pb-5`}>
							<input type="submit" value="ENVIAR" />
						</div>
					</form>
				</div>
			</section>
		</Layout>
  );
}
