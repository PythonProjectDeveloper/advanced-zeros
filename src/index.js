module.exports = function getZerosCount(number, base) {
  // your implementation
  
  // get the base number multipliers
  let i = 2
  let multipliers = {}
  while ( base !== 1  ){
    if ( base % i === 0 ){
      if ( multipliers.hasOwnProperty(i) ) multipliers[i] += 1
      else multipliers[i] = 1

      base /= i
      i = 2
    }
    else i += 1
  }

  // find the number of zeros for each multiplier
  let multiplier_zeros = []
  for ( let key in multipliers ){
    let num = number
    let zeros = 0
    while(num > 0){
      num =  parseInt(num / parseInt(key))
      zeros += num
    }
    zeros = parseInt(zeros / multipliers[key])
    multiplier_zeros.push(zeros)
  }

  return Math.min(...multiplier_zeros)
}
