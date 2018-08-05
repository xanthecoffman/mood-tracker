import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

const Navbar = ({handleClick, isLoggedIn, name}) => (
  <div>
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/home" style={{color: 'white'}}>
            <Button color="inherit">
              {' '}
              <Typography
                variant="title"
                color="inherit"
                style={{fontWeight: 'bolder', fontStlye: 'italic'}}
              >
                Stress Button
              </Typography>
            </Button>
          </Link>
          {!isLoggedIn && (
            <div>
              <Link to="/login" style={{color: 'white'}}>
                <Button color="inherit">Login</Button>
              </Link>
              <Link to="/signup" style={{color: 'white'}}>
                <Button color="inherit">Sign Up</Button>
              </Link>
            </div>
          )}
          {isLoggedIn && (
            <React.Fragment>
              <div>
                <p>Hi, {name}</p>
              </div>
              <Link to="/logout" style={{color: 'white'}}>
                <Button color="inherit" onClick={handleClick}>
                  Log Out
                </Button>
              </Link>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
      <h1>How stressed are you?!?!</h1>
      <p>
        Feeling down, stressed, depressed? Who needs a therapist when a computer
        can diagnose you instead!!? Let out all your stress on the button below,
        submit your score, and I'll calculate your stress levels! *beep* *beep*
      </p>
    </div>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    name: state.user.firstName
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
