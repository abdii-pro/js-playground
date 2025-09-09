/* JSON rules:
1. Data is in name/value pairs
2. Data is separated by commas
3. Curly braces hold objects
4. Square brackets hold arrays
5. Values must be one of the following data types:
    a. A string
    b. A number
    c. An object (JSON object)
    d. An array
    e. A boolean
    f. null
6. Strings must be in double quotes. */

// JSON String
const jsonString = '{"name":"John", "age":30, "city":"New York"}';

// Parse JSON string to JavaScript object
const obj = JSON.parse(jsonString);
console.log(obj);
obj.name = "Abdullah";
console.log(obj);

// Convert JavaScript object back to JSON string
const jsonStringUpdated = JSON.stringify(obj);
console.log(jsonStringUpdated);