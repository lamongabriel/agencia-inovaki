import { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';

// swiper
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { FaAngleLeft, FaAngleRight, FaTag } from 'react-icons/fa';
import Text from '../../Text';

import styles from './styles.module.scss';
import Heading from '../../Heading';

interface Slide {
	title: string
	text: string
	image: StaticImageData
	tag: string
}

interface CasesSwiperProps {
	slides: Slide[]
}

export default function CasesSwiper({ slides }: CasesSwiperProps) {
  const swiper = useRef<SwiperRef>(null);

  return (
		<Swiper
		ref={swiper}
		loop
		className={styles.swiper}
		slidesPerView={1}
		spaceBetween={100}
	>
		{slides.map((slide, index) => (
			<SwiperSlide key={index} className={styles.slideWrapper}>
				<div className={styles.slide}>
					<span className={styles.tag}><FaTag /> {slide.tag}</span>
					<div>
						<div>
							<Heading><strong>{slide.title}</strong></Heading>
							<Text>{slide.text}</Text>
						</div>
						<Image src={slide.image} alt={slide.title} />
					</div>
				</div>
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
