const string = "Esto es un texto";
const number = 123456;
const array = ["Práctica React", "Hola", 10000];
const boolean = true;
const funcion = () => 1+1
const objeto = { nombre: "Práctica de React", duración: 40 };
const fecha = new Date();

export const PrimerComponente = () => {
  return (
    <h1>{ funcion() }</h1>
  );
};
