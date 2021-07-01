import { withRouter, useHistory } from "react-router";
import { motion } from "framer-motion";

const Footer = (props: any) => {
  const history = useHistory();
  if (history.location.pathname.includes("/status")) {
    return null;
  }
  return (
    <motion.div className="footer__cont">
      <motion.h2 className="footer__cont--text">
        Copyright © 2021 TeaChain. All Rights Reserved.
      </motion.h2>
    </motion.div>
  );
};

export default withRouter(Footer);
