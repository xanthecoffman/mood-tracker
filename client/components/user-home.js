import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'
import ImageIcon from '@material-ui/icons/Image'
import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import Typography from '@material-ui/core/Typography'
import {fetchUser} from '../store/user'

import {connect} from 'react-redux'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
})

const ListElement = props => {
  const {score} = props
  return (
    <div>
      <Avatar>
        <SentimentVeryDissatisfiedIcon />
      </Avatar>
      <ListItemText primary={score.result} secondary={score.createdAt} />
    </div>
  )
}

export class UserHome extends Component {
  constructor() {
    super()
    this.state = {loaded: false}
  }

  async componentDidMount() {
    await fetchUser()
    this.setState({
      loaded: true
    })
  }

  render() {
    return this.props.user.scores ? (
      <div>
        <Typography>
          See your stress Journey, {this.props.user.email}!
        </Typography>
        <List>
          {this.props.user.scores.map(score => {
            return (
              <ListItem key={score.id}>
                <ListElement score={score} />
              </ListItem>
            )
          })}
        </List>
      </div>
    ) : (
      <div>Loading...</div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
})

export default connect(mapState, mapDispatch)(UserHome)
