let ages = [11, 17, 20, 42, 45]

let newArray1 = ages.map(age => `${age} year old`)

const newArray2 = newArray1.map(e => {
  const newElement = e.replace('old', '')
  return newElement
})

// const newArray2 = newArray1.map(e => e.replace('old',''))
console.log(newArray2)