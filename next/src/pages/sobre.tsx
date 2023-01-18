import BannerTop from '../components/UI/Banner/BannerTop';

import bg from '../assets/images/Sobre/bg-sobre.png';

export default function Sobre() {
  return (
		<section>
			<BannerTop image={bg} auxiliaryText='Conheça nossa Agência!'>
				<strong>QUEM</strong>SOMOS
			</BannerTop>
		</section>
  );
}
