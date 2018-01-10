import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import MyGreatPlace from './MyGreatPlace';

class MapComponent extends Component {
  static defaultProps = {
    center: {lat: 21.14, lng: 79.09},
    zoom: 6
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        style={{height: 100 + 'vh'}}
      >
        <MyGreatPlace
          lat={17.38}
          lng={78.48}
          text={'Hyderabad'}
        />
      </GoogleMapReact>
    );
  }
}

export default MapComponent;