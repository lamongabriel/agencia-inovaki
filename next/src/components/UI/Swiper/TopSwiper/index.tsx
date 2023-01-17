import { useRef } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

// swiper
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import styles from './styles.module.scss';

interface Slide {
	image: StaticImageData;
	alt: string;
	href: string;
}

interface TopSwiperProps {
	slides: Slide[]
}

export default function TopSwiper({ slides }: TopSwiperProps) {
  const swiper = useRef<SwiperRef>(null);

  return (
		<Swiper
		ref={swiper}
		className={styles.swiper}
		slidesPerView={1}
	>
		{slides.map((slide, index) => (
			<SwiperSlide key={index} className={styles.slide}>
				<Link href={slide.href}>
					<Image src={slide.image} alt={slide.alt} />
				</Link>
			</SwiperSlide>
		))}
		<div className={styles.navigation}>
			<button
				onClick={() => swiper.current?.swiper.slidePrev()}
				className={styles.next}
			>
				<FaAngleLeft size={32} />
			</button>
			<button
				onClick={() => swiper.current?.swiper.slideNext()}
				className={styles.next}
			>
				<FaAngleRight size={32} />
			</button>
		</div>
	</Swiper>
  );
}
