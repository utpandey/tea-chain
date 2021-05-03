import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import git2 from './github_2.svg';
// import git3 from './github_3.svg';
import {withRouter} from 'react-router';


const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: {duration : 1 }
  }
}

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
    <header>

      <motion.div className="title"
        // initial={{y:-250}}
        // animate={{ y: -10, }}
        // transition={{ delay: 0.5,type:'spring',stiffness: 120}}
      >

        <Link to='/'>
          <motion.h1
            className="findmyrepo"
            style={{color: 'black'}}
            // whileHover={{color: 'black',scale: '0.9'}}
          >
          FindMyRepo
          </motion.h1>
        </Link>
        
      </motion.div>
      
    </header>
  )
}

export default withRouter(Header);