const exampleSet = new Set( [1,2,3,4,2,1,2,3,4,2]);

exampleSet.add(5);
exampleSet.add(3).add(27);

console.log(exampleSet.delete(5));
console.log(exampleSet.has(27));// 값이 있나 없나
console.log(exampleSet);