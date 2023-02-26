export default function findComplementaryColors(color) {
  const num = parseFloat(color.match(/\d{1,3}/).join(""));
  const complementNum = num > 180 ? num - 180 : num + 180;
  const newColor = color.replace(/\d{1,3}/, complementNum.toString());

  return newColor;
}