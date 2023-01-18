import { StaticImageData } from 'next/image';

import styles from './styles.module.scss';

interface BannerTopProps {
	topText: string
	infiniteText: string
	image: StaticImageData
}

export default function BannerTop({ image, infiniteText, topText }: BannerTopProps) {
  return (
		<div className={styles.bannerTop} style={{ backgroundImage: `url(${image.src})` }}>
			<div>
				<p>{topText}</p>
				<h2>{infiniteText}</h2>
			</div>
		</div>
  );
}
