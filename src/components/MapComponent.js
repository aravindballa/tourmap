import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import Place from './Place'
import { indiaLatLong } from '../util/constants'

// TODO: center the Place component

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
        <Place lat={17.38} lng={78.48} />
      </GoogleMapReact>
    )
  }
}

export default MapComponent
