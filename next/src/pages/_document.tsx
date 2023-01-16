import {
  Html, Head, Main, NextScript,
} from 'next/document';

export default function Document() {
  return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='crossorigin' />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

				<link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
				<link rel="shortcut icon" href="/images/favicon/favicon.ico"></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
  );
}
