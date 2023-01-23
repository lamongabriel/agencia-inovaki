import { ReactNode, useContext } from 'react';

// Bootstrap
import { AccordionContext } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

// Components
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Image from 'next/image';
import BannerTop from '../../components/UI/Banner/BannerTop';
import Layout from '../../components/UI/Layout';

// Images
import bg from '../../assets/images/Sobre/bg-sobre.png';
import aquamar from '../../assets/images/Projetos/aquamar.png';
import custaPouco from '../../assets/images/Projetos/custa-pouco.png';
import Fashly from '../../assets/images/Projetos/fashion-masks.png';

// Styles
import styles from '../../styles/pages/projetos/index.module.scss';
import Heading from '../../components/UI/Heading';
import Text from '../../components/UI/Text';

interface CustomToggleProps {
	children: ReactNode
	eventKey: string
	callback?: any
}

function ContextAwareToggle({ children, eventKey, callback }: CustomToggleProps) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
			className=''
      onClick={decoratedOnClick}
    >
      {children}
			{isCurrentEventKey ? <AiOutlineMinus size={36} /> : <AiOutlinePlus size={36} />}
    </button>
  );
}

export default function Projetos() {
  return (
		<Layout>
			<BannerTop image={bg} auxiliaryText='Conheça nossa Agência!'>
				<strong>CASES</strong> E PROJETOS
			</BannerTop>
			<section className='container'>
				<div className={styles.accordionDiv}>
					<Accordion defaultActiveKey="0" className={styles.accordion} >
						<Card className={styles.accordionItem}>
							<Card.Header className={styles.accordionButton}>
								<ContextAwareToggle eventKey="0">E-COMMERCE</ContextAwareToggle>
							</Card.Header>
							<Accordion.Collapse eventKey="0" className={styles.accordionBody}>
								<Card.Body className={`${styles.accordionBody} row pb-5`}>
									<div className="col-lg-5">
										<Image src={aquamar} alt='Loja aquamar' />

										<Heading small>
											<strong>AQUAMAR</strong>
										</Heading>
										<Text>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sed voluptas quisquam ipsa minima dolorem nesciunt ex architecto.
											Quibusdam esse sapiente, placeat libero,
											 in illo necessitatibus non nihil ipsa, dolorem consequatur!
										</Text>
									</div>

									<div className="col-lg-5 offset-lg-2">
										<Image src={Fashly} alt='Costureiras Fashion Masks' />

										<Heading small>
											<strong>FASHION MASKS</strong>
										</Heading>
										<Text>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sed voluptas quisquam ipsa minima dolorem nesciunt ex architecto.
											Quibusdam esse sapiente, placeat libero,
											in illo necessitatibus non nihil ipsa, dolorem consequatur!
										</Text>
									</div>

									<div className="col-lg-5">
										<Image src={custaPouco} alt='Loja Custa Pouco Seduzir' />

										<Heading small>
											<strong>CUSTA POUCO SEDUZIR</strong>
										</Heading>
										<Text>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sed voluptas quisquam ipsa minima dolorem nesciunt ex architecto.
											Quibusdam esse sapiente, placeat libero,
											in illo necessitatibus non nihil ipsa, dolorem consequatur!
										</Text>
									</div>
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card className={styles.accordionItem}>
							<Card.Header className={styles.accordionButton}>
								<ContextAwareToggle eventKey="1">SOLUÇÕES E INTEGRAÇÕES</ContextAwareToggle>
							</Card.Header>
							<Accordion.Collapse eventKey="1" className={styles.accordionBody}>
								<Card.Body className={`${styles.accordionBody} row pb-5`}>
									<div className="col-lg-5">
										<Image src={aquamar} alt='Loja aquamar' />

										<Heading small>
											<strong>AQUAMAR</strong>
										</Heading>
										<Text>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sed voluptas quisquam ipsa minima dolorem nesciunt ex architecto.
											Quibusdam esse sapiente, placeat libero,
											 in illo necessitatibus non nihil ipsa, dolorem consequatur!
										</Text>
									</div>

									<div className="col-lg-5 offset-lg-2">
										<Image src={Fashly} alt='Costureiras Fashion Masks' />

										<Heading small>
											<strong>FASHION MASKS</strong>
										</Heading>
										<Text>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sed voluptas quisquam ipsa minima dolorem nesciunt ex architecto.
											Quibusdam esse sapiente, placeat libero,
											in illo necessitatibus non nihil ipsa, dolorem consequatur!
										</Text>
									</div>

									<div className="col-lg-5">
										<Image src={custaPouco} alt='Loja Custa Pouco Seduzir' />

										<Heading small>
											<strong>CUSTA POUCO SEDUZIR</strong>
										</Heading>
										<Text>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sed voluptas quisquam ipsa minima dolorem nesciunt ex architecto.
											Quibusdam esse sapiente, placeat libero,
											in illo necessitatibus non nihil ipsa, dolorem consequatur!
										</Text>
									</div>
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card className={styles.accordionItem}>
							<Card.Header className={styles.accordionButton}>
								<ContextAwareToggle eventKey="2">SISTEMAS</ContextAwareToggle>
							</Card.Header>
							<Accordion.Collapse eventKey="2" className={styles.accordionBody}>
								<Card.Body className={`${styles.accordionBody} row pb-5`}>
									<div className="col-lg-5">
										<Image src={aquamar} alt='Loja aquamar' />

										<Heading small>
											<strong>AQUAMAR</strong>
										</Heading>
										<Text>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sed voluptas quisquam ipsa minima dolorem nesciunt ex architecto.
											Quibusdam esse sapiente, placeat libero,
											 in illo necessitatibus non nihil ipsa, dolorem consequatur!
										</Text>
									</div>

									<div className="col-lg-5 offset-lg-2">
										<Image src={Fashly} alt='Costureiras Fashion Masks' />

										<Heading small>
											<strong>FASHION MASKS</strong>
										</Heading>
										<Text>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sed voluptas quisquam ipsa minima dolorem nesciunt ex architecto.
											Quibusdam esse sapiente, placeat libero,
											in illo necessitatibus non nihil ipsa, dolorem consequatur!
										</Text>
									</div>

									<div className="col-lg-5">
										<Image src={custaPouco} alt='Loja Custa Pouco Seduzir' />

										<Heading small>
											<strong>CUSTA POUCO SEDUZIR</strong>
										</Heading>
										<Text>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sed voluptas quisquam ipsa minima dolorem nesciunt ex architecto.
											Quibusdam esse sapiente, placeat libero,
											in illo necessitatibus non nihil ipsa, dolorem consequatur!
										</Text>
									</div>
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card className={styles.accordionItem}>
							<Card.Header className={styles.accordionButton}>
								<ContextAwareToggle eventKey="3">WEBSITES</ContextAwareToggle>
							</Card.Header>
							<Accordion.Collapse eventKey="3" className={styles.accordionBody}>
								<Card.Body className={`${styles.accordionBody} row pb-5`}>
									<div className="col-lg-5">
										<Image src={aquamar} alt='Loja aquamar' />

										<Heading small>
											<strong>AQUAMAR</strong>
										</Heading>
										<Text>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sed voluptas quisquam ipsa minima dolorem nesciunt ex architecto.
											Quibusdam esse sapiente, placeat libero,
											 in illo necessitatibus non nihil ipsa, dolorem consequatur!
										</Text>
									</div>

									<div className="col-lg-5 offset-lg-2">
										<Image src={Fashly} alt='Costureiras Fashion Masks' />

										<Heading small>
											<strong>FASHION MASKS</strong>
										</Heading>
										<Text>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sed voluptas quisquam ipsa minima dolorem nesciunt ex architecto.
											Quibusdam esse sapiente, placeat libero,
											in illo necessitatibus non nihil ipsa, dolorem consequatur!
										</Text>
									</div>

									<div className="col-lg-5">
										<Image src={custaPouco} alt='Loja Custa Pouco Seduzir' />

										<Heading small>
											<strong>CUSTA POUCO SEDUZIR</strong>
										</Heading>
										<Text>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Sed voluptas quisquam ipsa minima dolorem nesciunt ex architecto.
											Quibusdam esse sapiente, placeat libero,
											in illo necessitatibus non nihil ipsa, dolorem consequatur!
										</Text>
									</div>
								</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
				</div>
			</section>
		</Layout>
  );
}
