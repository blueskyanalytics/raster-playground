import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';

const Tooltips = ({ tipinfo }) => {
  return (
    <div>
      <Tooltip title={tipinfo} position="bottom" trigger="click">
        <FontAwesomeIcon icon={faInfoCircle} />
      </Tooltip>
    </div>
  );
};

export default Tooltips;
