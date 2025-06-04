// Enum is totally constant value provide and store-->
/*Enum data type have three types -> 1) Stirng , 2) Numaric , 3)hetergenous (Numaric and Stirng mixed) */

// Numaric -->
enum StuentData {
  ReadData,
  CreateData,
  DeleteData,
}
// console.log(StuentData);
// console.log(StuentData.CreateData); /* 1 */
// console.log(StuentData["DeleteData"]); /* 2 */

// String -->
enum WorkerData {
  ReadData = "READ_DATA",
  CreateData = "CREATE_DATA",
  DeleteData = "DELETE_DATA",
}
console.log(WorkerData);
console.log(WorkerData.ReadData); /* READ_DATA */
console.log(WorkerData["DeleteData"]); /* DELETE_DATA */

// hetergenous -->
enum PeopleData {
  ReadData = "READ_DATA",
  CreateData = 1,
  EditData = "EDIT_DATA",
}
console.log(PeopleData);
console.log(PeopleData.ReadData); /* READ_DATA */
console.log(PeopleData["EditData"]); /* EDIT_DATA */
