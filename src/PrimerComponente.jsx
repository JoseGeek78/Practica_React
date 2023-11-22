import "./PrimerComponente.css";

const string = "Esto es un texto";
const number = 123456;
const array = ["Práctica React", "Hola", 10000];
const boolean = true;
const funcion = () => 1987 + 78891;

export const PrimerComponente = () => {
  return (
    <>
      <h1>Variables en JSX</h1>
      <h3>Variable de tipo String</h3> <p>{string}</p>
      <h3>Variable e tipo number</h3> <p>{number}</p>
      <h3>Variable de tipo array</h3> <p>{array}</p>
      <h3>Variable de tipo boolean</h3> <p>{boolean}</p>
      <h3>variable de tipo funcion</h3> <p>{funcion()}</p>
    </>
  );
};
