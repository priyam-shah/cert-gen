import { AppBar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
//importing styles file -> styles.js
import useStyles from "./styles.js";

// img
import cglogo from "../../images/cert-gen-logo.png";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          CERTIFICATE GENERATOR
        </Typography>

        <img className={classes.image} src={cglogo} alt="icon" height="70px" />
      </div>
    </AppBar>
  );
};

export default Navbar;
