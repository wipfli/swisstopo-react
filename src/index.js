import React from 'react'
import ReactDOM from 'react-dom'

import Map from './Map'

ReactDOM.render((
  <Map
    centerLongitude={8.55301}
    centerLatitude={47.35257}
    zoom={8}
  />
), document.getElementById('root'))
