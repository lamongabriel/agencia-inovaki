import {
  Html, Head, Main, NextScript,
} from 'next/document';

import Favicon from '../components/SEO/Favicon';

export default function Document() {
  return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='crossorigin' />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

				<Favicon />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
  );
}
