import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateShapeData } from 'redux/actions/shape-data-actions';

export default function UploadShapeFile() {
  const [file, setFile] = useState();
  const fileTypes = '.geojson,.json';
  const dispatch = useDispatch();

  const handleShapeFile = () => {
    if (!file) {
      alert('no file exist please select file');
    } else {
      let fileReader = new FileReader();

      fileReader.onload = e => {
        const type = file.name.split('.').pop();
        const data = e.target.result;

        if (JSON.parse(data)) {
          const shapeData = {
            type,
            data,
          };
          dispatch(updateShapeData(shapeData));
        }
      };
      fileReader.readAsText(file);
    }
  };

  return (
    <>
      <p>upload shape files(Topo & Geo JSON)</p>

      <div className="container-background">
        <div className="second-container">
          <input
            type="file"
            className="input-text"
            onChange={e => {
              setFile(e.target.files[0]);
            }}
            accept={fileTypes}
          />

          <button id="btn" onClick={() => handleShapeFile()}>
            upload
          </button>
        </div>
      </div>
    </>
  );
}
