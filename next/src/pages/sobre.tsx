import BannerTop from '../components/UI/Banner/BannerTop';

import bg from '../assets/images/Sobre/bg-sobre.png';
import Layout from '../components/UI/Layout';

export default function Sobre() {
  return (
		<Layout>
			<BannerTop image={bg} auxiliaryText='Conheça nossa Agência!'>
				<strong>QUEM</strong>SOMOS
			</BannerTop>
		</Layout>
  );
}
