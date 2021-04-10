// print an array of only odd numbers
arrays = [4, 8, 3, 9, 1, 2, 3, 6, 10]
// const oddNum = arrays.filter(array => array % 2)
// console.log(oddNum)

/* ((array) => {
  return array % 2
}) */

for (let x = 0; x <= arrays.length - 1; x++) {
  if (arrays[x] % 2 === 0) {
  } else {
    console.log(arrays[x])
  }
}