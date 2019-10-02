import React from "react";
import MenuNavbar from "./MenuNavbar";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "#0066A7"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
              {" "}
              Ekart
            </Link>
          </Typography>
          <Typography variant="h6" className="MuiTypography-alignLeft ">
            <MenuNavbar />
          </Typography>

          <Link to="/login" style={{ color: "#fff" }}>
            Login/Signup
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
