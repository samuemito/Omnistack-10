export default function parseStrArr(arrAsStr) {
  return arrAsStr.split(',').map(tech => tech.trim());
}