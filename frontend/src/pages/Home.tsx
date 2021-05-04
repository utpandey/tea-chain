// import React from 'react';
import { motion } from 'framer-motion';

import EthGirl from '../assets/ethGirl.svg';
import HomeImage from '../assets/home_img.png';
import TeaGif from '../assets/TeaGif.gif';
import Supply from '../assets/SupplyChain.svg';
import QR from '../assets/QR.svg';


// const homeContainerVariants = {
// 	hidden: {
// 		opacity: 0
// 	},
// 	visible: {
// 		opacity: 1,
// 		transition: {
// 			delay: 1.5,
// 			duration: 2
// 		}
// 	},
// 	exit: {
// 		x: '-100vw',
// 		transition: {
// 			ease: 'easeInOut'
// 		}
// 	}
// };

// const buttonVariants = {
//   hover: {
//     scale: 1.1,
//     textShadow: "0px 0px 8px rgb(255,255,255)",
//     boxShadow: "0px 0px 8px rgb(255,255,255)",
//     transition: {
//       duration: 0.3,
//       yoyo: Infinity
//     }
//   },
// }

const Home = () => {
	return (
		<motion.div className="home__cont">
			{/* variants={homeContainerVariants}
		 initial='hidden'
	   animate='visible'
		 exit='exit' */}
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
				<motion.div className="home__cont__lower__about">
					<motion.div className="home__cont__lower__about__text">
						<motion.h2 className="home__cont__lower__about__text--title">Ethereum Network</motion.h2>
						<motion.h3 className="home__cont__lower__about__text--info">Store data in a public network trusted by millions.</motion.h3>
					</motion.div>
					<motion.img src={EthGirl} className="home__cont__lower__about__img ethGirl"/>
				</motion.div>
				<motion.div className="home__cont__lower__about">
					<motion.img src={Supply} className="home__cont__lower__about__img"/>
					<motion.div className="home__cont__lower__about__text">
						<motion.h2 className="home__cont__lower__about__text--title">Store supply chain parameters</motion.h2>
						<motion.h3 className="home__cont__lower__about__text--info">Data is stored in the blockchain by all the participants of the supply chain.</motion.h3>
					</motion.div>
				</motion.div>
				<motion.div className="home__cont__lower__about">
					<motion.div className="home__cont__lower__about__text">
						<motion.h2 className="home__cont__lower__about__text--title">Validate your product</motion.h2>
						<motion.h3 className="home__cont__lower__about__text--info">Verify your product by scanning a QR Code.</motion.h3>
					</motion.div>
					<motion.img src={QR} className="home__cont__lower__about__img"/>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Home;
