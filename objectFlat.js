let deepFlatten = (obj) => {
  let temp  = {};
  const flatten = (ob , parent = '') => {
    for (let key in ob){
      typeof ob[key] == 'object' ? flatten(ob[key], parent+ key + '-:-') : temp [parent + key] = ob[key]
     }
  }
  flatten(obj, '')
  return temp;
}
const obj = {
    A: "12",
    B: 23,
    f: {
        x:[12,23],
        y: 34,
        z: [34, 45 ,[34] ,45, [34,[34]]]  
    },
    C: {
      P: 23,
      O: {
         L: 56
      },
      Q: [1, 2]
     }   
  };

const result = deepFlatten(obj);
console.log(result)
