//  Built in Data Type in TypeScript ---> Number , String ,boolean, Void , null , undifined,

//  String Data Type --->
let stuName: String;
let stuId: String | number;
let stuClass: String;
stuName = "Mr. Carly Luz Cubas";
stuId = "121";
stuClass = "O level";

// console.log({ stuName, stuClass, stuId }); // -->{ stuName: 'Mr. Carly Luz Cubas', stuClass: 'O level', stuId: '121' }

//  Number Data Type --->
const bdTotalPopulation: Number = 18000000;
console.log({ bdTotalPopulation }); // -->{ bdTotalPopulation: 18000000 }

//  boolean Data Type --->

let isLoggedIn: Boolean;
isLoggedIn = true;
// console.log({ isLoggedIn }); // -->{ isLoggedIn: true,  }

function logOut() {
  return (isLoggedIn = false);
}
let islogOut = logOut();
// console.log({ isLoggedIn, islogOut }); // -->{ isLoggedIn: false, islogOut: false }

// Void Data Type -->
/* Note : @void is a data type that's  a unable returned function */
function Students(name: string, id: number | string, className: string): void {
  console.log({
    name,
    id,
    className,
  });
}

Students("Viba Merphy", 123, "Nine"); //{ name: 'Viba Merphy', id: 123, className: 'Nine' }
Students("Judians Mia", "321", "Hoonors"); //{ name: 'Judians Mia', id: '321', className: 'Hoonors' }
Students("Miz Sumona", 143, "Honorns 3rd"); //{ name: 'Miz Sumona', id: 143, className: 'Honorns 3rd' }


/* Note : number | string is a unioon data type  */