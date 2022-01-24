console.log("hola");

// explicita
let phone: number;
phone = 54234567;
/* phone = "hola"; */ //Error

// Inferida
let phoneInferido = 1;
phoneInferido = 2;

let hex: number = 0xf00d;
let binary: number = 0b1001;
let octal: number = 0o1547;

let isPro: boolean;
isPro = true;

let funct: object;
funct = () => {
    console.log(isPro);
}