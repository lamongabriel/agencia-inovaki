import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';
import InfiniteText from '../../InfiniteText';

import styles from './styles.module.scss';

interface BannerTopProps {
	auxiliaryText?: string
	children: ReactNode
	image: StaticImageData
}

export default function BannerTop({ image, children, auxiliaryText }: BannerTopProps) {
  return (
		<div className={styles.bannerTop} style={{ backgroundImage: `url(${image.src})` }}>
			<div>
				{auxiliaryText && <p>{auxiliaryText}</p>}
				<InfiniteText>
					{children}
				</InfiniteText>
			</div>
		</div>
  );
}
