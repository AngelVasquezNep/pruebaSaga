export default function(value, name = "hola") {
  let values = [];
  for (let i = 0; i < value; i++) {
    values.push({
      label: `${name}-${i}`,
      value: `${name}-${i}`
    });
  }
  return values;
}
