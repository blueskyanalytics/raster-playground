import PropTypes from 'prop-types';
import { rgba } from 'polished';

function RgbaColorBox({ color }) {
  return (
    <p
      style={{
        width: 20,
        height: 20,
        backgroundColor: rgba(color.r, color.g, color.b, color.a),
      }}
    >
      {' '}
    </p>
  );
}

RgbaColorBox.propTypes = {
  color: PropTypes.object.isRequired,
  selectOnly: PropTypes.oneOf(['r', 'g', 'b']),
};

export default RgbaColorBox;
