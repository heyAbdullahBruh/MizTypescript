// Enum is totally constant value provide and store-->
/*Enum data type have three types -> 1) Stirng , 2) Numaric , 3)hetergenous (Numaric and Stirng mixed) */
// Numaric -->
var StuentData;
(function (StuentData) {
    StuentData[StuentData["ReadData"] = 0] = "ReadData";
    StuentData[StuentData["CreateData"] = 1] = "CreateData";
    StuentData[StuentData["DeleteData"] = 2] = "DeleteData";
})(StuentData || (StuentData = {}));
// console.log(StuentData);
// console.log(StuentData.CreateData); /* 1 */
// console.log(StuentData["DeleteData"]); /* 2 */
// String -->
var WorkerData;
(function (WorkerData) {
    WorkerData["ReadData"] = "READ_DATA";
    WorkerData["CreateData"] = "CREATE_DATA";
    WorkerData["DeleteData"] = "DELETE_DATA";
})(WorkerData || (WorkerData = {}));
console.log(WorkerData);
console.log(WorkerData.ReadData); /* READ_DATA */
console.log(WorkerData["DeleteData"]); /* DELETE_DATA */
// hetergenous -->
var PeopleData;
(function (PeopleData) {
    PeopleData["ReadData"] = "READ_DATA";
    PeopleData[PeopleData["CreateData"] = 1] = "CreateData";
    PeopleData["EditData"] = "EDIT_DATA";
})(PeopleData || (PeopleData = {}));
console.log(PeopleData);
console.log(PeopleData.ReadData); /* READ_DATA */
console.log(PeopleData["EditData"]); /* EDIT_DATA */
