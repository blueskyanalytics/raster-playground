import React from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  updateShapeData,
  resetShapeData,
} from '../../../redux/actions/shape-data-actions';

function ShapeUpload() {
  const dispatch = useDispatch();
  const uploadData = e => {
    if (e.target.files && e.target.files[0]) {
      resetShapeData();
      let fr = new FileReader();
      let shapeFile = e.target.files[0];
      fr.onload = event => {
        const fileData = event.target.result;
        const parsedFileData = JSON.parse(fileData);
        let fileType;
        if (parsedFileData[`type`] === 'Topology') {
          fileType = 'topojson';
        } else if (parsedFileData[`type`] === 'FeatureCollection') {
          fileType = 'geojson';
        }
        const shapeData = {
          fileType,
          parsedFileData,
        };
        dispatch(updateShapeData(shapeData));
      };
      fr.readAsText(shapeFile);
    } else {
      alert('There was an error!');
    }
  };
  return (
    <>
      <p>Upload Shape (Topo JSON and Geo JSON)</p>
      <input
        type="file"
        className="upload-button"
        onChange={uploadData}
        accept="application/json"
      />
    </>
  );
}

export default connect(updateShapeData)(ShapeUpload);
