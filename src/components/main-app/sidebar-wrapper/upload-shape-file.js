import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { updateShapeData } from 'redux/actions/shape-data-actions'

export default function UploadShapeFile() {
    const [file, setFile] = useState()
    const fileTypes = '.geojson, .topojson'
    const dispatch = useDispatch()

    const handleShapeFileUpload = () => {
        if (file == null){
            alert('No file chosen or file does not exist.')
        } else{
            let fileReader = new FileReader()

            fileReader.onload = evt => {
                const type = file.name.split('.').pop()
                const data = evt.target.result

                if(JSON.parse(data)){
                    const shapeData = {
                        type,
                        data                
                    }
                    dispatch(updateShapeData(shapeData))
                }
            }

            fileReader.readAsText(file)
        }
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
                className="copy-btn"
                id="upload-btn"
            >
                Upload
            </button>
        </>
    )
}