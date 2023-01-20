import { BsFillChatDotsFill } from 'react-icons/bs';
import BannerTop from '../components/UI/Banner/BannerTop';

import bg from '../assets/images/Sobre/bg-sobre.png';
import Layout from '../components/UI/Layout';

import styles from '../styles/pages/contato.module.scss';
import Text from '../components/UI/Text';
import Input from '../components/Form/Input';
import TextArea from '../components/Form/Textarea';

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
									<Input
										id='name'
										name='name'
										type='text'
										label='Seu nome'
										autoComplete='name'
									/>
								</div>
								<div className="col-lg-6">
									<Input
										id='organization'
										name='organization'
										type='text'
										label='nome da empresa'
										autoComplete='organization'
									/>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-6">
									<Input
										id='email'
										name='email'
										type='email'
										label='e-mail de contato'
										autoComplete='email'
									/>
								</div>
								<div className="col-lg-6">
									<Input
										id='tel'
										name='tel'
										type='tel'
										label='Telefone ou Whatsapp'
										autoComplete='tel'
									/>
								</div>
							</div>
							<div>
								<div>
									<Input
										id='subject'
										name='subject'
										type='text'
										label='Assunto'
										autoComplete='off'
									/>
								</div>
							</div>
							<div>
								<TextArea
									id='message'
									name='message'
									label='MENSAGEM'
									autoComplete='off'
								/>
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
