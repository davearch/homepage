import React from "react"
import { Link } from "gatsby"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import AlternateEmail from "@material-ui/icons/AlternateEmail"

const Navigation = () => {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <AlternateEmail />
        </ListItemIcon>
        <Link to="/page-2" style={linkStyle}>
          <ListItemText primary="Contact" />
        </Link>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemIcon />
        <ListItemText primary="Random" />
      </ListItem>
      <Divider />
      <ListItem>
        <Link to="/page-2" style={linkStyle}>
          <ListItemText primary="button text" />
        </Link>
      </ListItem>
    </List>
  )
}

const linkStyle = {
  textDecoration: "none",
}

export default Navigation
