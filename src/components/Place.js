import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
class Place extends Component {
  static propTypes = {
    text: PropTypes.string,
    img: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
  }

  static defaultProps = {
    img:
      'https://instagram.fdel1-4.fna.fbcdn.net/vp/9c64e9abf43ef2c77fdd134e95942b0d/5AE31FE1/t51.2885-15/e35/26068528_180471972688336_7329798806625583104_n.jpg',
  }

  render() {
    const StyledPlace = styled.div`
      background: white;
      position: absolute;
      padding 0.2em;
    `
    return (
      <StyledPlace>
        <img src={this.props.img} width={100} alt="random" />
      </StyledPlace>
    )
  }
}

export default Place
