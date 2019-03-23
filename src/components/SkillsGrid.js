import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import SkillItem from "../components/SkillItem"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
})

class SkillsGrid extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item md>
          <SkillItem skill="Systems Administration" />
          <SkillItem skill="Front End Web Development" />
          <SkillItem skill="Back End Web Development" />
        </Grid>
        <Grid item md>
          <SkillItem skill="Systems Administration" />
          <SkillItem skill="Front End Web Development" />
          <SkillItem skill="Back End Web Development" />
        </Grid>
        <Grid item md>
          <SkillItem skill="Systems Administration" />
          <SkillItem skill="Front End Web Development" />
          <SkillItem skill="Back End Web Development" />
        </Grid>
      </Grid>
    )
  }
}

SkillsGrid.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SkillsGrid)
