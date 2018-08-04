import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button, Image} from 'react-bootstrap'

const imgSrc =
  'https://png2.kisspng.com/sh/c5756b98c29c5ec2bf3b7a3a4e16b494/L0KzQYm3U8IxN5VtfZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TgJmbF51h950YT3nf8W0gBxqeF5miuY2cnXnPbP8lQRwdl5ue9H3LYDxd368gfIyOmQ4TKUEZEe4RXA7U8AxOGE1TqMAMkG4RYm6UsQzO2cARuJ3Zx==/kisspng-computer-icons-red-polka-dot-clip-art-red-button-icon-png-5ab1233439d755.4300000615215583242369.png'

export class UnconnectedStressClick extends Component {
  // constructor() {
  //   super()
  //   this.state = {}
  // }

  handleClick() {}
  render() {
    return (
      <div id="counter">
        <button style={{borderRadius: '50%'}}>
          {/* <Image src={imgSrc} circle /> */}
        </button>
      </div>
    )
  }
}
