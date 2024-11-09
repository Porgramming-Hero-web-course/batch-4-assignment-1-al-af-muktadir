function removeDuplicates(x:number[]){
    const finalarr=  x.filter((dup,idx)=>x.indexOf(dup)===idx)
    return finalarr
  
  }
  const arr1=removeDuplicates([1,2,3,5,2,3,4,5])
  console.log(arr1)
  