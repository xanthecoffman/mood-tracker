import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

export class Result extends Component {
  constructor() {
    super()
    this.state = {
      score: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick() {
    this.setState({
      score: this.state.score + 1
    })
  }

  handleSubmit() {}
  render() {
    return (
      <div>
        <h1>Your score: {this.state.score}</h1>
        <div>
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
        </div>
        <div>
          <Link to={`/result`}>
            <button>Submit your score</button>
          </Link>
        </div>
      </div>
    )
  }
}
