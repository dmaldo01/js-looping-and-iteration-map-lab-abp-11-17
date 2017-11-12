// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(name){
    return name.toLowerCase()
  })
}

function nameToAttributes(drivers){
  return names.map(function(name){
    let fname = name.split(" ")[0]
    let lname = name.split(" ")[1]
    return {firstName: fname, lastName: lname}
  })
