import { useRouter } from 'next/router';
import Head from 'next/head';
import Button from '../components/UI/Button';
import Heading from '../components/UI/Heading';
import Layout from '../components/UI/Layout';

import bg from '../assets/images/404/bg_404.png';

import styles from '../styles/pages/404.module.scss';

export default function P404() {
  const router = useRouter();

  return (
		<Layout>
			<Head>
				<title>404 - Não encontrado</title>

				<meta name="robots" content="noindex" />
				<meta name="googlebot" content="noindex" />
			</Head>
			<div className={styles.box} style={{ backgroundImage: `url(${bg.src})` }}>
				<div>
					<Heading>
						<strong>404.</strong>
						<br />
						Página não encontrada
					</Heading>
					<div>
						<Button onClick={() => router.back()}>
							Voltar
						</Button>
						<Button onClick={() => router.push('/')}>
							Home
						</Button>
					</div>
				</div>
			</div>
		</Layout>
  );
}
