import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updateShapeData } from 'redux/actions/shape-data-actions'

export default function UploadShapeFile() {
    const [file, setFile] = useState()
    const fileTypes = '.geojson, .topojson'
    const dispatch = useDispatch()

    const shape = useSelector(state => state)

    const handleShapeFileUpload = () => {
        if (file == null){
            alert('No file chosen or file does not exist.')
        }

        let fileReader = new FileReader()

        fileReader.onload = evt => {
            const data = evt.target.result
            console.log('entered')
            if(JSON.parse(data)){
                console.log('parsed')
                const shape = {
                    type: file.type,
                    data                
                }
                console.log(shape)
                dispatch(updateShapeData(shape))
            }
        }

        let type = file.name.split('.').pop();

        console.log(shape)

        // fileReader.removeEventListener('load', loadHandler)
    }

    return (
        <>
            <p>Upload Shape File</p>
            <input
                type="file"
                className="input-text"
                onChange={(evt) => {
                    setFile(evt.target.files[0]) 
                }}
                accept = {fileTypes}
            />
            <button
                onClick={() => handleShapeFileUpload()}
            >
                Upload
            </button>
        </>
    )
}