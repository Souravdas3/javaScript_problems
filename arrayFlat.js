

const flatten = (arr , depth) => {
  let temp = [];
  let x = (array, level) => {
    for (val of array){
      Array.isArray(val) && level > 0 ? x(array, level-1) : temp.push(val)
    }
  }
  x(arr, depth);
  return temp;
}
let arr = [2,3,4,[23,[45, 67, [45,74,[34,76],87],8,89],78,34,56], 89] 
  const c = flatten(arr, 3)
  console.log(c)
