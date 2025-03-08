let json =
  '{"fact":"There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.","length":100}';
console.log(json);

//JSON.parse is used to convert JSON data to js object.
let validRes = JSON.parse(json);
console.log(validRes.fact);
console.log(validRes.length);

//JSON.stringify is used to convert js object to JSON data.
let student = {
  name: "Syed Farhan Ali",
  age: 20,
  education: "undergrad",
};
console.log(student);
let jsonConvert = JSON.stringify(student);
console.log(jsonConvert);
