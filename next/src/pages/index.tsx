import Footer from '../components/Footer';
import Header from '../components/Header';

import swiperTop1 from '../assets/images/Home/swiper-1.png';
import swiperTop2 from '../assets/images/Home/swiper-2.png';
import TopSwiper from '../components/UI/Swiper/TopSwiper';

const slides = [
  { image: swiperTop1, alt: 'Conheça nossas soluções.', href: 'https://google.com.br' },
  { image: swiperTop2, alt: 'Nós desenvolvemos sua solução com e-commerce.', href: 'https://google.com.br' },
];

export default function Home() {
  return (
		<>
			<Header />
			<section id="top-home">
				<TopSwiper slides={slides} />
			</section>
			<Footer />
		</>
  );
}
