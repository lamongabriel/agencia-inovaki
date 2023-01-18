import BannerTop from '../components/UI/Banner/BannerTop';

import bg from '../assets/images/Sobre/bg-sobre.png';

export default function Sobre() {
  return (
		<section>
			<BannerTop image={bg} topText='Conheça nossa Agência!' infiniteText='QUEM SOMOS'/>
		</section>
  );
}
