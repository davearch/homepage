import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import profile from "../images/me.jpg"

const styles = theme => ({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120,
    backgroundColor: theme.palette.background.paper,
  },
})

function BigAvatar(props) {
  const { classes } = props
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Me" src={profile} className={classes.bigAvatar} />
      <Typography variant="h1" gutterBottom>
        David Archuleta Jr.
      </Typography>
    </Grid>
  )
}

BigAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(BigAvatar)
