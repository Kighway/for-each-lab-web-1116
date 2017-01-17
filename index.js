function iterativeLog(array) {
  function callback (element, index) {
    console.log(`${index}: ${element}`)
  }
  array.forEach(callback)
}

function iterate(callback) {
  var newArray = [2,3,5,7,11,13,17,19]
  newArray.forEach(callback)
  return newArray
}

function doToArray(array, callback) {
  return array.forEach(callback)
}
