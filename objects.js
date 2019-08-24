console.log("OBJECTS"s);

const bouncer = (age) => {
    if (age >= 21) {
    console.log('no drinks for you');
    } else {
    console.log('PARTAY!!!!!');
    };
};

bouncer(12);
bouncer(93);

const me = "Martin";
console.log(me.length);

const myObject = {
    name:"John",
    age: "41",
    theAnswerToLife: 42
};

console.log(myObject['name']);
console.log(myObject.name);


//Challenge

const findAndLogEmployeeStatus = (employee) => {
    if (employee.name.charAt(0).toLowerCase() ==='m') {
        employee.status = "vip";
    } else {
        employee.status = "pesant";
    };
    console.log(`${employee.name} is a total ${employee.status}`);
    return employee;
};

// const person ={
//     name: prompt(),
//     status: ''
// };

// findAndLogEmployeeStatus(person);

// findAndLogEmployeeStatus({
//     name: 'lester',
//     status: ''
// });

// findAndLogEmployeeStatus({
//     name: 'carl clark',
//     status: ''
// });

// findAndLogEmployeeStatus({
//     name: prompt("Enter Employee Name"),
//     status: ''
// });