import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import git2 from './github_2.svg';
// import git3 from './github_3.svg';
import { withRouter } from 'react-router';

import Logo from '../assets/logo.svg';

const svgVariants = {
	hidden: { rotate: -180 },
	visible: {
		rotate: 0,
		transition: { duration: 1 }
	}
};

// const pathVariants = {
//   hidden: {
//     opacity: 0,
//     pathLength: 0
//   },
//   visible: {
//     opacity: 1,
//     pathLength: 1,
//     transition: {
//       duration: 2,
//       ease: "easeOut"
//     }
//   }
// }

const Header = () => {
	return (
		<motion.div className="header__cont">
			{/* initial={{y:-250}}
		animate={{ y: -10, }}
		transition={{ delay: 0.5,type:'spring',stiffness: 120}} */}
			<motion.div
				drag={true}
				dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
				dragElastic={0.5}
			>
        <motion.svg
          className="header__cont__logo"
					width="139"
					height="120"
					viewBox="0 0 139 120"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<motion.path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M57.9899 64.8117C46.8533 62.0233 21.9616 63.7 13.8883 69.7883C13.8883 73.6133 14.2066 77.3367 14.8116 80.9167C6.59159 79.6117 1.98492 82.7083 1.11492 87.2783C-0.158414 93.98 6.60825 103.848 21.8099 107.637C13.1949 101.943 10.1799 96.42 10.6299 93.075C10.9866 90.4417 13.4933 89.1617 17.1083 90.22C22.4516 106.328 33.9149 117.97 47.5333 119.808C34.9816 115.09 25.3916 102.76 22.1016 84.1417C32.4466 89.2017 55.6316 90.41 72.8216 84.94C71.1533 83.4017 69.5549 81.7417 68.0516 79.9817C51.2549 82.565 28.6433 81.2933 17.7699 73.515C25.7816 68.6517 42.7699 65.3217 57.9899 64.8117Z"
						fill="white"
					/>
					<motion.path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M85.7446 87.7656C86.993 84.3348 88.2031 81.1587 89.2512 80.0399C96.0333 78.7971 105.54 74.9573 111.323 69.2925C117.061 63.6725 120.424 52.084 125.664 44.6636C105.571 47.9351 90.6946 55.9615 87.2471 74.4043C93.4474 66.4287 99.8238 62.1367 105.532 60.2576C98.0208 64.5056 88.8359 72.6657 86.527 79.3745C86.5294 82.1284 86.3135 84.9657 85.7446 87.7656ZM84.437 77.0119C84.6343 80.9014 84.4244 84.8588 83.5539 88.6078C82.284 94.0666 78.276 100.083 72.5655 104.68C81.0942 91.8919 81.7204 79.5487 79.9972 76.9152C70.2903 75.2054 59.1205 69.8138 52.8889 61.391C46.7033 53.0303 46.7634 35.581 42.132 24.4863C71.0823 28.9253 90.0273 40.6924 87.0473 68.5133C81.21 56.6032 73.4681 50.2686 65.665 47.5707C75.5141 54.0525 83.9398 67.1875 84.437 77.0119Z"
						fill="#5A6E29"
					/>
				</motion.svg>
			</motion.div>
			<motion.div className="header__cont__title">
				<Link to="/" style={{textDecoration: 'none'}}>
					<motion.h1 className="header__cont__title__text">
						{/* whileHover={{color: 'black',scale: '0.9'}} */}
						Sign In
					</motion.h1>
				</Link>
				<Link to="/" style={{textDecoration: 'none'}}>
					<motion.h1 className="header__cont__title__text">
						{/* whileHover={{color: 'black',scale: '0.9'}} */}
						Sign Up
					</motion.h1>
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default withRouter(Header);
