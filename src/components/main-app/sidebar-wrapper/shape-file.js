import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { updateShapeData } from 'redux/actions';
import { ReactComponent as UploadIcon } from 'assets/icons/upload.svg';
import { checkValidJSONString } from 'utils';

function ShapeFileUpload() {
  const [file, setFile] = useState();
  const dispatch = useDispatch();

  const allowedFileTypes = useMemo(() => ['geojson', 'topojson'], []);
  const acceptedTypes = allowedFileTypes.map(type => `.${type.trim()}`).join();

  useEffect(() => {
    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener('load', event => {
      const fileData = event.target.result;
      if (checkValidJSONString(fileData)) {
        const shapeData = {
          type: file.name.split('.').pop(),
          data: fileData,
        };

        dispatch(updateShapeData(shapeData));
      }
    });

    reader.readAsText(file);
  }, [file, allowedFileTypes, dispatch]);

  return (
    <section id="shape-file-upload-button">
      <header> Upload Shape File </header>
      <main>
        <span className="upload-text"> {file && file.name? file.name : "No Data"} </span>
        <span className="upload-button">
          <UploadIcon />
          <input
            type="file"
            onChange={event => {
              setFile(event.target.files[0]);
            }}
            accept={acceptedTypes}
          />
        </span>
      </main>
    </section>
  );
}

export default ShapeFileUpload;
