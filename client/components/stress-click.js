import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import {getResult} from '../store/result'

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiButton: {
      // Name of the rule
      root: {
        // Some CSS
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
      }
    }
  }
})

export class UnconnectedStressClick extends Component {
  constructor() {
    super()
    this.state = {
      score: 0,
      result: 1
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick() {
    if (this.state.score > 10 && this.state.score < 30) {
      this.setState({
        result: 2
      })
    } else if (this.state.score > 30 && this.state.score < 70) {
      this.setState({
        result: 3
      })
    } else if (this.state.score > 70 && this.state.score < 150) {
      this.setState({
        result: 4
      })
    } else if (this.state.score > 150 && this.state.score < 250) {
      this.setState({
        result: 5
      })
    } else if (this.state.score > 250 && this.state.score < 400) {
      this.setState({
        result: 6
      })
    } else if (this.state.score > 400) {
      this.setState({
        result: 7
      })
    }
    this.setState({
      score: this.state.score + 1
    })
  }

  handleSubmit() {
    this.props.getResult(this.state.result)
  }
  render() {
    console.log('state', this.state)
    return (
      <div>
        <h1>Your SCORE: {this.state.score}</h1>
        <div>
          <MuiThemeProvider theme={theme}>
            <Button
              variant="fab"
              color="secondary"
              aria-label="Add"
              type="submit"
              onClick={this.handleClick}
              style={{height: 200, width: 200}}
            >
              <AddIcon />
            </Button>
          </MuiThemeProvider>
        </div>
        <div>
          <Link to={`/result`}>
            <button onClick={this.handleSubmit}>Submit your score</button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getResult: id => dispatch(getResult(id))
})

export const ConnectedStressClick = connect(null, mapDispatchToProps)(
  UnconnectedStressClick
)
