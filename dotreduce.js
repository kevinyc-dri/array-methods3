// const orders = [{
//   fullname, email, total, item, quantity, price
// }]

const money = [10, 5, 20, 1, 5, 10, 1] // 0 + 20, 0 + 20 + 5,

// const total = money.reduce((runningTotal, bill) => {
//   return runningTotal + bill // 0 - runnintTotal + 10 - bill
// }, 0)

let calcutation = money.reduce((runningTotal, bill) => runningTotal + bill, 0)

// accumulator
console.log(calcutation)

//------------------------------------------------------
const orders =
  [{ id: 1, item: 'pants', qty: 7 },
  { id: 1, item: 'shirts', qty: 7 },
  { id: 1, item: 'pants', qty: 7 },]
const sold = orders.reduce((accum, order) => {
  return accum[order.item] = order.qty + (accum[order.item] || 0)
}, {})