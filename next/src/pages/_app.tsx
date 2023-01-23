import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import { SSRProvider } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<SSRProvider>
				<Component {...pageProps} />
			</SSRProvider>
			<ToastContainer />
		</>
  );
}
