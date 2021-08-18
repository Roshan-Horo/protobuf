const employees = []
const fs = require('fs')

employees.push({
    "name": "roshan",
    "salary": 1000,
    "id": 1000

})
employees.push({
    "name": "richie",
    "salary": 1000000,
    "id": 1001

})
employees.push({
    "name": "Rick",
    "salary": 5000,
    "id": 1002

})

console.log(JSON.stringify(employees))
fs.writeFileSync("jsonData.json",JSON.stringify(employees))