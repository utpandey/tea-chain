import React, { useEffect,useState, useRef } from 'react';
import { motion } from 'framer-motion';

import EthGirl from '../assets/ethGirl.svg';
import HomeImage from '../assets/home_img.png';
import TeaGif from '../assets/TeaGif.gif';
import Supply from '../assets/SupplyChain.svg';
import QR from '../assets/QR.svg';

import { gsap, Power4,TweenMax, TimelineLite,Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const homeContainerVariants = {
	hidden: {
		opacity: 0
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 1.5,
			duration: 2
		}
	},
	exit: {
		x: '-100vw',
		transition: {
			ease: 'easeInOut'
		}
	}
};

const Home: React.FC = () => {
	const t1 = gsap.timeline();
	const images = useRef<HTMLDivElement>(null);
	
	const app = useRef<HTMLDivElement>(null);

	const tlite = new TimelineLite()
	const [tl] = useState(gsap.timeline({delay: 5.8}));
	useEffect(() => {
		console.log(app, images)
		
		// const ethText = images.current?.firstElementChild as any
		// const ethGirl = images.current?.lastElementChild as any
		// console.log(images.current?.lastElementChild, ethText)

		// gsap.from("#text", {
		// 	x: -100,
		// 	stagger: { // wrap advanced options in an object
		// 		each: 0.8,
		// 		from: "center",
		// 		// grid: "auto",
		// 		ease: "power2.inOut",
		// 		repeat: 0 // Repeats immediately, not waiting for the other staggered animations to finish
		// 	}
		// })
		t1.from("#text-1", {
			x: "-100%",
			opacity: 0,
			duration: 2,
			ease: Power3.easeOut,
		}).from("#img-1", {
			x: "200%",
			// opacity: 0,
			duration: 2,
			ease: Power3.easeOut,
		},.5)
		.from("#img-2", {
			x: "-200%",
			// opacity: 0,
			duration: 2,
			ease: Power3.easeOut,
		},1.5)
		.from("#text-2", {
			x: "200%",
			// opacity: 0,
			duration: 2,
			ease: Power3.easeOut,
		},2)
		.from("#text-3", {
			x: "-200%",
			// opacity: 0,
			duration: 2,
			ease: Power3.easeOut,
		},2.5)
		.from("#img-3", {
			x: "200%",
			// opacity: 0,
			duration: 2,
			ease: Power3.easeOut,
		},3)

	},[tl])
	return (
		<motion.div className="home__cont" ref={app}>
			<motion.div className="home__cont__upper">
				<motion.div className="home__cont__upper__text">
					<motion.h1 className="home__cont__upper__text--title">TEA CHAIN</motion.h1>
					<motion.h4 className="home__cont__upper__text--content">
						A blockchain platform to showcase the journey of tea leaves
					</motion.h4>
				</motion.div>
				<motion.div className="home__cont__upper__imgCont">
					<motion.img src={TeaGif} className="home__cont__upper__imgCont--img gif" />
					<motion.img src={HomeImage} className="home__cont__imgCont--img" />
				</motion.div>
			</motion.div>
			<motion.div className="home__cont__lower">
				<motion.div className="home__cont__lower__about" ref={images}>
					<motion.div
						className="home__cont__lower__about__text"
						id="text-1"
						// initial={{x:-950, opacity: 0}}
						// animate={{ x: 0,y: 0 ,opacity: 1}}
						// transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
						// transition={{ from: 800, duration: 2 }}
						// transition={{delay: 0.5, type: "spring", bounce: 0.25}}
					>
						<motion.h2 className="home__cont__lower__about__text--title">Ethereum Network</motion.h2>
						<motion.h3 className="home__cont__lower__about__text--info">
							Store data in a public network trusted by millions.
						</motion.h3>
					</motion.div>
					<motion.img
						src={EthGirl}
						className="home__cont__lower__about__img ethGirl"
						id="img-1"
						// variants={homeContainerVariants}
						// initial='hidden'
						// animate='visible'
						// exit='exit'
					/>
				</motion.div>
				<motion.div className="home__cont__lower__about">
					<motion.img
						src={Supply}
						className="home__cont__lower__about__img"
						id="img-2"
						// variants={homeContainerVariants}
						// initial='hidden'
						// animate='visible'
						// exit='exit'
					/>
					<motion.div
						className="home__cont__lower__about__text"
						id="text-2"
						// variants={homeContainerVariants}
						// initial='hidden'
						// animate='visible'
						// exit='exit'
					>
						<motion.h2 className="home__cont__lower__about__text--title">
							Store supply chain parameters
						</motion.h2>
						<motion.h3 className="home__cont__lower__about__text--info">
							Data is stored in the blockchain by all the participants of the supply chain.
						</motion.h3>
					</motion.div>
				</motion.div>
				<motion.div className="home__cont__lower__about">
					<motion.div
							className="home__cont__lower__about__text"
							id="text-3"
							// variants={homeContainerVariants}
							// initial='hidden'
							// animate='visible'
							// exit='exit'
					>
						<motion.h2 className="home__cont__lower__about__text--title">Validate your product</motion.h2>
						<motion.h3 className="home__cont__lower__about__text--info">
							Verify your product by scanning a QR Code.
						</motion.h3>
					</motion.div>
					<motion.img
						src={QR}
						className="home__cont__lower__about__img"
						id="img-3"
						// variants={homeContainerVariants}
						// initial='hidden'
						// animate='visible'
						// exit='exit'
					/>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Home;
