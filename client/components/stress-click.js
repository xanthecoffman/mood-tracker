import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import {getResult} from '../store/result'

const imgSrc =
  'https://png2.kisspng.com/sh/c5756b98c29c5ec2bf3b7a3a4e16b494/L0KzQYm3U8IxN5VtfZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TgJmbF51h950YT3nf8W0gBxqeF5miuY2cnXnPbP8lQRwdl5ue9H3LYDxd368gfIyOmQ4TKUEZEe4RXA7U8AxOGE1TqMAMkG4RYm6UsQzO2cARuJ3Zx==/kisspng-computer-icons-red-polka-dot-clip-art-red-button-icon-png-5ab1233439d755.4300000615215583242369.png'

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
