import React from 'react'
import {getMapData} from 'api/update-map'
import View from 'ol/View'
import {fromLonLat} from 'ol/proj';

export default function LocationButton(){
    const zoomToLocation = () => {
        let lonlat = fromLonLat([78.9629, 20.5937])
        let view = new View({ center: lonlat, zoom: 4 })
        
        let map = getMapData()
        map.setView(view)
    }

    return (
        <>
            <button onClick={() => zoomToLocation()}>Zoom To India</button>
        </>
    );
}