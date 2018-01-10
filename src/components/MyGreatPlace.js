import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class MyGreatPlace extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  render() {
    const Place = styled.div`
      background: white;
      position: absolute;
      padding 1.2em;
    `
    return (
       <Place>
          {this.props.text}
       </Place>
    );
  }
}