// Pipe function
const pipe = (firstFunction, secondFunction) => {
  // must return a function
  return (parameter) => {
    // call firstFunction
    const result1 = firstFunction(parameter);
    // call secondFunction
    return secondFunction(result1);
  }
}

export default pipe;

