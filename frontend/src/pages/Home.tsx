import React from 'react';
import { motion } from 'framer-motion';

import HomeImage from '../assets/home_img.png'
import TeaGif from '../assets/TeaGif.gif'

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
			<motion.div className="home__cont__text">
				<motion.h1 className="home__cont__text__title">TEA CHAIN</motion.h1>
				<motion.h4 className="home__cont__text__content">
					A blockchain platform to showcase the journey of tea leaves
				</motion.h4>
      </motion.div>
      <motion.div className="home__cont__imgCont">
        <motion.img src={TeaGif} className="home__cont__imgCont__img gif"/> 
        <motion.img src={HomeImage} className="home__cont__imgCont__img"/>
      </motion.div>
		</motion.div>
	);
};

export default Home;
