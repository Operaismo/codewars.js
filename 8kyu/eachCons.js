function eachCons(array, n) {
  let result = [];
  console.log(`array: ${array}; n: ${n}`);
  for(let i = 0; i < array.length; i++){
    let subResult = [];
    for(let j = 0; j < n; j++){
      if (i + j >= array.length) return result;
      subResult.push(array[i + j]);
    }
    console.log("Sub Result:", subResult);
    result.push(subResult);
  }
  console.log("result:", result);
	return result;
}