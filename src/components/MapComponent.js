import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import MyGreatPlace from './MyGreatPlace'
import { indiaLatLong } from '../util/constants'

class MapComponent extends Component {
  static defaultProps = {
    center: indiaLatLong,
    zoom: 6,
  }

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        style={{ height: 100 + 'vh' }}
      >
        <MyGreatPlace lat={17.38} lng={78.48} text={'Hyderabad'} />
      </GoogleMapReact>
    )
  }
}

export default MapComponent
