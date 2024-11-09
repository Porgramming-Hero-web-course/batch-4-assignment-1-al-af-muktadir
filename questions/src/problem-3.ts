function countWordOccurrences(sentance:string,word:string){
    const modified=sentance.split(" ")

 const repeat= modified.filter(x=>x.toLowerCase()===word.toLowerCase())
 const repeatLength=repeat.length
 console.log(repeatLength)
    }
countWordOccurrences("Typescript is Love typeScrIpt","typescript")