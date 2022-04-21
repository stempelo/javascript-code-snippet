import pipe from './snippet/pipe_function.js'

const firstFunction = parameter => {return parameter * 5}
const secondFunction = parameter => {return parameter + 3}

const pipeToTheMoon = pipe(firstFunction, secondFunction);

console.log(`${pipeToTheMoon(5)}`); // 28 ( (5 * 5) + 3 )
console.log(`${pipeToTheMoon(7)}`); // 38 ( (7 * 5) + 3 )

