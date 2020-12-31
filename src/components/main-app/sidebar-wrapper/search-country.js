import React, {useState} from 'react'
import {getMapData} from 'api/update-map'
import View from 'ol/View'
import {fromLonLat} from 'ol/proj';

export default function SearchCountry(){
    const [countryName, setCountryName] = useState('');

    const centerCountry = () => {
        let jsonData = require('../../../assets/countries.json')
        let name = countryName.toLowerCase()
        
        for(let i = 0; i < jsonData.length; i++){
            if(name === jsonData[i].name.toLowerCase()){
                let country = jsonData[i], lonlat = fromLonLat([country.latlng[1], country.latlng[0]])
                let view = new View({ center: lonlat, zoom: 4 })
                
                let map = getMapData()
                map.setView(view)
            }
        }
        
      }

    return (
        <>
            <input 
                key="searchBar"
                value={countryName}
                placeholder={"search country"}
                onChange={(e) => setCountryName(e.target.value)}
            />
            <button onClick={() => centerCountry()}>Search</button>
        </>
    );
}