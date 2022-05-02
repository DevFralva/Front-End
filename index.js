import dayjs from "dayjs";

//Fechas a calcular
const fecha1 = dayjs("2021-01-01"); //fecha a comparar
const fecha2 = dayjs("2021-12-31"); //fecha actual

//console.log(dayjs().format("DD/MM/YYYY")); //muestra la fecha actual formateada

let dias = Number.parseFloat(fecha2.diff(fecha1, "day", true));
console.log(dias);
let meses = Number.parseFloat(fecha2.diff(fecha1, "month", true));
console.log(meses);
let anios = Number.parseFloat(fecha2.diff(fecha1, "year", true));
console.log(anios);
console.log("___________________________________________")

let totalMs = Number.parseFloat(fecha2.diff(fecha1, "milliseconds", true));

let msAnio = Number.parseFloat(totalMs / anios);
console.log(Number.parseFloat(totalMs / anios));

let msMes = Number.parseFloat(totalMs / meses);
console.log(Number.parseFloat(totalMs / meses));

let msDia = Number.parseFloat(totalMs / dias);
console.log(Number.parseFloat(totalMs / dias));
console.log("___________________________________________")

//Los milisegundos de los años, meses y dias varia segun los años a comparar
console.log(totalMs + " Milisegundos en total");
console.log(msAnio + " milisegundos es un año");
console.log(msMes + " milisegundos es un mes");
console.log(msDia + " milisegundos es un día");

let contAnios = 0;
let contMeses = 0;
let contDias = 0;

while (Number.parseFloat(totalMs) >= Number.parseFloat(msAnio)) {
  totalMs -= Number.parseFloat(msAnio);
  contAnios++;
}

while (Number.parseFloat(totalMs) >= Number.parseFloat(msMes)) {
  totalMs -= Number.parseFloat(msMes);
  contMeses++;
}
console.log(totalMs);
while (Number.parseFloat(totalMs) >= Number.parseFloat(msDia)) {
  totalMs -= Number.parseFloat(msDia);
  contDias++;
}

console.log(dayjs(totalMs).diff(msDia, "hours"));

console.log(contAnios + " años");
console.log(contMeses + " meses");
console.log(contDias + " días");
