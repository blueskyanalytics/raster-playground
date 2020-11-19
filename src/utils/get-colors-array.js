export default function getColorsArray(colors) {
  if (!colors) return [];
  return colors.split('-').map(color => `#${color}`);
}
