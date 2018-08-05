import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}

const UnconnectedResult = props => {
  const {classes} = props
  return (
    <div>
      <div>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={props.result.image} />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              You are: {props.result.name}
            </Typography>
            <Typography component="p">
              Description: {props.result.description}
            </Typography>
            <Typography component="p">
              Feels like: {props.result.example}
            </Typography>
            <Typography component="p">
              My advice for you: {props.result.advice}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/">
              <Button size="small" color="primary">
                Back to Button
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

UnconnectedResult.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapState = state => ({
  result: state.result
})

export const ConnectedResult = connect(mapState)(
  withStyles(styles)(UnconnectedResult)
)
