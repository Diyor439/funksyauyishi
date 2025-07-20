// 1. Function Declaration
function age(age) {
    console.log(`Sizning yoshingiz: ${age}`);
}
age(16);

const age2 = function (age) {
    console.log(`Sizning yoshingiz: ${age}`);
};
age2(17);

// 3. Arrow Function
const age3 = (age) => {
    console.log(`Sizning yoshingiz: ${age}`);
};
age3(18);

function raqam(a, b) {

    console.log(`javob: ${a + b}`)
}

raqam(6, 7)


const raqam2 = function (a, b) {
    console.log(`javob: ${a + b}`);
};
raqam2(3, 10);



const raqam3 = (a, b) => {
    console.log(`javob: ${a + b}`);
};

raqam3(5, 8);


function name(ism) {
    console.log(`Sizni Ismingiz ${ism}`);
}

name("Isfandiyor");




const name2 = function (ism) {
    console.log(`Sizni Ismingiz ${ism}`);
};

name2("Boburbek");


const name3 = (ism) => {
    console.log(`Sizni Ismingiz ${ism}`);
};
name3("Asilbek");


function sharfi (sharfi) {
    console.log(`Sizni Ism Familyangiz: ${sharfi}`);
}
sharfi("Isafndiyor MUhammadjonov")

const sharfi2 = function (sharfi2) {
    console.log(`Sizni Ism Familyangiz: ${sharfi2}`);
}

sharfi2 ("Boburjon Olimov")

const sharfi3 = (sharfi3) => {
    console.log(`Sizni Ism Familyangiz: ${sharfi3}`);
};
sharfi3("Ayubxon");


function tortburchak(uzunlik, eni) {
    const P = 2 * (uzunlik + eni);
    console.log(`To‘rtburchak javobi: ${P}`);
  }
  
  tortburchak(40, 30); 


  const tortburchak2 = function(uzunlik, eni) {
    const P = 2 * (uzunlik + eni);
    console.log(`To‘rtburchak javobi: ${P}`);
  };
  
  tortburchak2(45, 100); 


  const tortburchak3 = (uzunlik, eni) => {
    const P = 2 * (uzunlik + eni);
    console.log(`Sizning yoshingiz: ${P}`);
};
tortburchak3(120,314);


function qiymatlar(a, b, c) {
    console.log(`1-qiymat: ${a}`);
    console.log(`2-qiymat: ${b}`);
    console.log(`3-qiymat: ${c}`);
  }
  
  qiymatlar(10, 20, 30);

  const qiymatlar2 = function(a,b,c) {
    console.log(`4-qiymat: ${a}`);
    console.log(`5-qiymat: ${b}`);
    console.log(`6-qiymat: ${c}`);
  }
  
  qiymatlar2(40,50,60)

  const qiymatlar3 = (a,b,c) => {
    console.log(`7-qiymat: ${a}`);
    console.log(`8-qiymat: ${b}`);
    console.log(`9-qiymat: ${c}`);
  }
qiymatlar3(70,80,90)



function kvadrat(raqam) {
    console.log(`kvadrati: ${raqam * raqam}`);
  }
  
  kvadrat(9); 

  const kvadrat2 = function (raqam) {
    console.log(`kvadrati: ${raqam * raqam}`);
  };
  
  kvadrat2(99);

  const kvadrat3 = (raqam) => {
    console.log(`kvadrati: ${raqam * raqam}`);
  }
  kvadrat3(999)



  function mushuk(mushuk, yosh,) {
    console.log(`Bu ${mushuk} ${yosh} yoshda. va oq rangda. `);
}

mushuk("mushuk", 3);

const mushuk2 = function (it,yosh) {
    console.log(`Bu ${it} ${yosh} yoshda. va qora rangda. `);
}

mushuk2 ("it",5)

const mushuk3 = (echki,yosh) => {
    console.log(`Bu ${echki} ${yosh} yoshda. va qora rangda. `);
}

mushuk3("echki", 25)



function hello(hello) {
    console.log("hello world-1");
    
}
hello(hello)


const hello2 = function (hello) {
    console.log("hello world-2");
}

hello2(hello)


const hello3 = (hello) => {
    console.log("hello World-3");
}

hello3("hello")



function ismlar(ism1, ism2, ism3, ism4, ism5) {
    console.log(ism1);
    console.log(ism2);
    console.log(ism3);
    console.log(ism4);
    console.log(ism5);
}

ismlar("Isfandiyor", "Boburbek", "Ayubxon", "Asilbek", "Asliddin");

const ismlar2 = function (ism1, ism2, ism3, ism4, ism5) {
    console.log(ism1);
    console.log(ism2);
    console.log(ism3);
    console.log(ism4);
    console.log(ism5);
}

ismlar2("Qulpiniso","Diyor","Nodir","Asrorbek","Muhammadziyo")

  












