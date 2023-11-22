const string = "Esto es un texto";
const number = 123456;
const array = ["Práctica React", "Hola", 10000];
const boolean = true;
const funcion = () => 1 + 1;
const objeto = { nombre: "Práctica de React", duración: 40 };
const fecha = new Date();

export const PrimerComponente = () => {
  return (
    <>
      <h1>Variables en JSX</h1>
      <h3>variable de tipo funcion</h3> <p>{funcion}</p>
      <h3>Variable de tipo String</h3> <p>{string}</p>
      <h3>Variable e tipo number</h3> <p>{number}</p>
      <h3>Variable de tipo array</h3> <p>{array}</p>
      <h3>Variable de tipo boolean</h3> <p>{boolean}</p>
      <h3>variable de tipo objeto</h3> <p>{objeto}</p>
      <h3>variable de tipo fecha</h3> <p>{fecha}</p>
    </>
  );
};
