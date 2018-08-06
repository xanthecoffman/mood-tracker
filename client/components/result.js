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
import {postScore} from '../store/user'

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}

class UnconnectedResult extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // let count = 0
    // console.log('being sent', this.props)
    // this.props.postScore(
    //   {
    //     result: this.props.result,
    //     userId: this.props.user.id
    //   },
    //   this.props.user
    // )
  }

  render() {
    return (
      <div>
        <div>
          <Card className={this.props.classes.card}>
            <CardMedia
              className={this.props.classes.media}
              image={this.props.result.image}
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                You are: {this.props.result.name}
              </Typography>
              <Typography component="p">
                Description: {this.props.result.description}
              </Typography>
              <Typography component="p">
                Feels like: {this.props.result.example}
              </Typography>
              <Typography component="p">
                My advice for you: {this.props.result.advice}
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
}

UnconnectedResult.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapState = state => ({
  result: state.result,
  user: state.user
})

const mapDispatch = dispatch => ({
  postScore: (score, user) => dispatch(postScore(score, user))
})

export const ConnectedResult = connect(mapState, mapDispatch)(
  withStyles(styles)(UnconnectedResult)
)
