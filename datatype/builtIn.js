//  Built in Data Type in TypeScript ---> Number , String ,boolean, Void , null , undifined,
//  String Data Type --->
var stuName;
var stuId;
var stuClass;
stuName = "Mr. Carly Luz Cubas";
stuId = "121";
stuClass = "O level";
// console.log({ stuName, stuClass, stuId }); // -->{ stuName: 'Mr. Carly Luz Cubas', stuClass: 'O level', stuId: '121' }
//  Number Data Type --->
var bdTotalPopulation = 18000000;
console.log({ bdTotalPopulation: bdTotalPopulation }); // -->{ bdTotalPopulation: 18000000 }
//  boolean Data Type --->
var isLoggedIn;
isLoggedIn = true;
// console.log({ isLoggedIn }); // -->{ isLoggedIn: true,  }
function logOut() {
    return (isLoggedIn = false);
}
var islogOut = logOut();
// console.log({ isLoggedIn, islogOut }); // -->{ isLoggedIn: false, islogOut: false }
// Void Data Type -->
/* Note : @void is a data type that's  a unable returned function */
function Students(name, id, className) {
    console.log({
        name: name,
        id: id,
        className: className,
    });
}
Students("Viba Merphy", 123, "Nine"); //{ name: 'Viba Merphy', id: 123, className: 'Nine' }
Students("Judians Mia", "321", "Hoonors"); //{ name: 'Judians Mia', id: '321', className: 'Hoonors' }
Students("Miz Sumona", 143, "Honorns 3rd"); //{ name: 'Miz Sumona', id: 143, className: 'Honorns 3rd' }
