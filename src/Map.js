import React, { useRef, useState, useEffect } from 'react'

import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const Map = ({
    centerLongitude,
    centerLatitude,
    zoom,
}) => {
    const mapContainerRef = useRef(null)
    const [map, setMap] = useState(null)

    useEffect(() => {
        const map = new maplibregl.Map({
            container: mapContainerRef.current,
            style: 'https://vectortiles.geo.admin.ch/styles/ch.swisstopo.leichte-basiskarte.vt/style.json',
            center: [centerLongitude, centerLatitude],
            zoom: zoom,
        })
        map.addControl(new maplibregl.NavigationControl())
        const scale = new maplibregl.ScaleControl({
            maxWidth: 80,
            unit: 'metric'
        })
        map.addControl(scale)
        setMap(map)
    }, [])

    return (
        <div
            ref={mapContainerRef}
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0, 
                bottom: 0,
            }}
        />
    )
}

export default Map