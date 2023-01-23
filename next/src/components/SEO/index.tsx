import Head from 'next/head';

interface SEOProps {
	pageTitle: string
	pageDescription: string
	pageUrl: string
	pageImage: string
}

function SEO(
  {
    pageTitle, pageDescription, pageUrl, pageImage,
  }: SEOProps,
) {
  return (
		<Head>
			<title>{pageTitle}</title>
			<meta name="title" content={pageTitle} />
			<meta name="description" content={pageDescription} />

			<meta property="og:type" content="website" />
			<meta property="og:url" content={pageUrl} />
			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={pageDescription} />
			<meta property="og:image" content={pageImage} />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={pageUrl} />
			<meta property="twitter:title" content={pageTitle} />
			<meta property="twitter:description" content={pageDescription} />
			<meta property="twitter:image" content={pageImage} />
		</Head>
  );
}

export default SEO;
