import type { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Component {...pageProps} />
		</>
  );
}
