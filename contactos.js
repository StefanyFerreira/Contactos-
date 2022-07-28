let NombresDeContactos = [
  "Paula Lemos",
  "Stefany Torres",
  "Alexandra Ferreira",
  "Nicolas Tovar",
];
function adicionarContacto(NombresDeContactos) {
  NombresDeContactos.push("Santiago Rodriguez", "Mauricio Duarte");
  return NombresDeContactos;
}
adicionarContacto(NombresDeContactos);
console.log(NombresDeContactos);

function eliminarContacto(NombresDeContactos) {
  NombresDeContactos.pop();
  return NombresDeContactos;
}
const conElim = eliminarContacto(NombresDeContactos);
console.log(conElim);

function mostrarContactos(NombresDeContactos) {
  console.log(NombresDeContactos);
}
mostrarContactos(NombresDeContactos);
