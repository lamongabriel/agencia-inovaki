import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { BsFillChatDotsFill } from 'react-icons/bs';
import { useState } from 'react';
import BannerTop from '../components/UI/Banner/BannerTop';

import bg from '../assets/images/Sobre/bg-sobre.png';
import Layout from '../components/UI/Layout';

import styles from '../styles/pages/contato.module.scss';
import Text from '../components/UI/Text';
import Input from '../components/Form/Input';
import TextArea from '../components/Form/Textarea';

import { ContactFormData } from '../@types/form';
import sendContactForm from '../lib/contact';

const ContactFormDataSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório.'),
  organization: yup.string().required('Campo obrigatório.'),
  email: yup.string().required('Campo obrigatório.').email('E-mail inválido.'),
  tel: yup.string().required('Campo obrigatório.').min(10, 'Telefone inválido'),
  subject: yup.string().required('Campo obrigatório.'),
  message: yup.string().required('Campo obrigatório.'),
});

export default function Contato() {
  const [formSent, setFormSent] = useState(false);

  const { register, handleSubmit, formState } = useForm<ContactFormData>({
    resolver: yupResolver(ContactFormDataSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    await sendContactForm(data);
    setFormSent(true);
  };
  return (
		<Layout>
			<BannerTop image={bg} auxiliaryText="Conheça nossa Agência!">
				<strong>FALE</strong>CONOSCO
			</BannerTop>
			<section className={styles.contact}>
				<div className={`${styles.formContainer} container`}>
					<div className={`${styles.arrowUp} mx-auto`}></div>
					<div className="text-center pt-4">
						<BsFillChatDotsFill size={64} color='#000' />
					</div>
					<Text>
						{!formSent
						  ?	`Utilize o formulário abaixo para os enviar
								uma mensagem direta. Após o recebimento da
								mensagem entraremos em cotato pelo e-mail informado
								baixo. Para que o contato seja feito corretamente,
								preencha todos os campos.`
						  : 'Obrigado, em breve estaremos entrando em contato pelo e-mail informado.'
						}
					</Text>
					<form className={formSent ? styles.sent : ''} onSubmit={handleSubmit(onSubmit)}>
						<div className="row">
							<div className="col-lg-6">
								<Input
									id='name'
									type='text'
									label='Seu nome'
									autoComplete='name'

									{...register('name')}
									errors={formState.errors.name}
								/>
							</div>
							<div className="col-lg-6">
								<Input
									id='organization'
									type='text'
									label='nome da empresa'
									autoComplete='organization'

									{...register('organization')}
									errors={formState.errors.organization}
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6">
								<Input
									id='email'
									type='email'
									label='e-mail de contato'
									autoComplete='email'

									{...register('email')}
									errors={formState.errors.email}
								/>
							</div>
							<div className="col-lg-6">
								<Input
									id='tel'
									type='number'
									label='Telefone ou Whatsapp'
									autoComplete='tel'

									{...register('tel')}
									errors={formState.errors.tel}
								/>
							</div>
						</div>
						<div>
							<div>
								<Input
									id='subject'
									type='text'
									label='Assunto'
									autoComplete='off'

									{...register('subject')}
									errors={formState.errors.subject}
								/>
							</div>
						</div>
						<div>
							<TextArea
								id='message'
								label='MENSAGEM'
								autoComplete='off'

								{...register('message')}
								errors={formState.errors.message}
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
