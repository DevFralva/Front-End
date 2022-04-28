import dayjs from "dayjs";

//Fechas a calcular
const fecha1 = dayjs("1992-10-09");//fecha a comparar
const fecha2 = dayjs();//fecha actual

//console.log(dayjs().format("DD/MM/YYYY")); //muestra la fecha actual formateada

let dias = fecha2.diff(fecha1, "day",true);
let meses = fecha2.diff(fecha1, "month",true);
let anios = fecha2.diff(fecha1, "year", true);

let msMes = anios / meses;
let msDia = anios / dias;
//Los milisegundos de los años, meses y dias varia segun los años a comparar
console.log(anios + " milisegundos es un año");
console.log(msMes + " milisegundos es un mes");
console.log(msDia + " milisegundos es un día");

let contAnios = 0;
let contMeses = 0;
let contDias = 0;

if (anios >= 1) {
  while (anios >= 1) {
    anios -= 1;
    contAnios++;
  }
}

while (anios >= msMes) {
  anios -= msMes;
  contMeses++;
}

while (anios >= msDia) {
  anios -= msDia;
  contDias++;
}

console.log(contAnios + " años");
console.log(contMeses + " meses");
console.log(contDias + " días");
