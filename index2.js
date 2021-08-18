const fs = require('fs')
const Schema = require("./employees_pb");

const roshan = new Schema.Employee();
roshan.setId(1001);
roshan.setName("rohan");
roshan.setSalary(1000);

const richie = new Schema.Employee();
richie.setId(1002);
richie.setName("richie");
richie.setSalary(1000000);


const rick = new Schema.Employee();
rick.setId(1003);
rick.setName("rick");
rick.setSalary(5000);

const employees = new Schema.Employees();

employees.addEmployees(roshan)
employees.addEmployees(richie)
employees.addEmployees(rick)

const bytes = employees.serializeBinary();

console.log("Binary: ",bytes)

fs.writeFileSync("employeesbinary", bytes)

const employees2 = Schema.Employees.deserializeBinary(bytes);

console.log(employees2.toString())