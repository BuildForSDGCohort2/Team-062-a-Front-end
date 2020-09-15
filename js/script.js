/*
let student ={
  name: "Peters Robertson",
  phone: "08037772177",
  age: "20",
  CGPA: "3.7",
  email: "petersrobertson@gmail.com",
  courses: ["GST111", "EPE453", "POP518", "TER421"],

  logginIn: function(){
    console.log("Peters Robertson is Logged in!");
  }
};

student.logginIn()
console.log("You are logged in");


console.log(student.name +" "+"is studying"+ " "+student.courses[3]);
/*
logginOut(){
  console.log("Thank you for coming" +this.name);
}
console.log(student.name);
console.log(student.phone);
console.log(student.age);

/*overriding the value of a property inside an object
student.age="21";

console.log(student.age);
console.log(student["email"]);
console.log(student.email);

student["CGPA"]="4.2";
console.log(student["CGPA"]);
*/


let student =[
  {name: "Promise",
  age: "33",
  email: "soft@gmail.com" },

  {name: "Pree",
  age: "33",
  email: "meet@gmail.com" },

  {name: "Mine",
  age: "33",
  email: "gee@gmail.com" }
];

student[0].name="Seyi"
console.log(student[0]);

student[0].age="23"
console.log(student[1]);

student[0].email="nobs@gamil.com"
console.log(student[2]);
