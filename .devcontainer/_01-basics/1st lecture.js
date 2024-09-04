const createAccount="amhfhfjgfk@hcgshck"   // const type variable can not changed after initialized 
let createEmail="fbdhbd@dvjc"
var Password="4546712"
accountCity="jaipur" // allowed in javascript but not preferable method
//createAccount=45 throws an error
let accountState;

console.log(createAccount)
createEmail="bvg@hhdv"
Password="7894"
accountCity="delhi"
console.table([createAccount,createEmail,Password,accountCity,accountState])// (index) │ Values  
/* Output  means const not changed let and var can changed            │
┌

│ ┌─────────┬──────────────────────┐
│ (index) │ Values               │
├─────────┼──────────────────────┤
│ 0       │ 'amhfhfjgfk@hcgshck' │
│ 1       │ 'bvg@hhdv'           │
│ 2       │ '7894'               │
│ 3       │ 'delhi'              │
│ 4       │ undefined            │
└─────────┴──────────────────────┘      
*/
/* prefer not to use var because use of block and functional scope.*/
