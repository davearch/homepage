import React from "react"
import { Link } from "gatsby"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import AlternateEmail from "@material-ui/icons/AlternateEmail"
import PersonAdd from "@material-ui/icons/PersonAdd"
import { withStyles } from "@material-ui/core"
import ShowChart from "@material-ui/icons/ShowChart"
import Code from "@material-ui/icons/Code"
import Fingerprint from "@material-ui/icons/Fingerprint"

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    ...theme.mixins.toolbar,
  },
})

const Navigation = () => {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <Code />
        </ListItemIcon>
        <Link to="/" style={linkStyle}>
          <ListItemText primary="Home" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ShowChart />
        </ListItemIcon>
        <Link to="/portfolio" style={linkStyle}>
          <ListItemText primary="Portfolio" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PersonAdd />
        </ListItemIcon>
        <Link to="/about" style={linkStyle}>
          <ListItemText primary="About" />
        </Link>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <AlternateEmail />
        </ListItemIcon>
        <Link to="/contact" style={linkStyle}>
          <ListItemText primary="Contact" />
        </Link>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <Fingerprint />
        </ListItemIcon>
        <Link to="/security" style={linkStyle}>
          <ListItemText primary="Security" />
        </Link>
      </ListItem>
      <Divider />
    </List>
  )
}

const linkStyle = {
  textDecoration: "none",
}

export default withStyles(styles)(Navigation)
