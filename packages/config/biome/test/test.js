// This file contains various code examples to test Biome linting and formatting

// Variables that should trigger warnings/errors
const unusedVar = "This string should use single quotes";
var globalVar = 123; // Using var should trigger a warning

// Function with formatting issues
function badlyFormattedFunction(a, b, c) {
  // Indentation is off
  const result = a + b + c;

  if (result > 10) {
    console.log("Result is greater than 10");
    return "Success";
  } else {
    return "Failure";
  }
}

// Array with formatting issues
const array = [1, 2, 3, 4, 5];

// Object with formatting issues
const obj = {
  foo: "bar",
  baz: "qux",
  nested: {
    value: 42,
    another: "value",
  },
};

// Template literal that should be used instead
const greeting = "Hello, " + name + "!";

// Modern JS features
const arrowFunc = (x) => {
  return x * 2;
};

// Export default (would trigger noDefaultExport in some configs)
export default badlyFormattedFunction;
