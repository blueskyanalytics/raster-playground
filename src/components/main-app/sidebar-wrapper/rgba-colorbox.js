import PropTypes from 'prop-types';

function RgbaColorBox({ color }) {
  const bgColor = `rgba(${color.a}, ${color.g}, ${color.b}, ${color.a})`;
  return <p style={{ width: 20, height: 20, backgroundColor: bgColor }}> </p>;
}

RgbaColorBox.propTypes = {
  color: PropTypes.object.isRequired,
  selectOnly: PropTypes.oneOf(['r', 'g', 'b']),
};

export default RgbaColorBox;
