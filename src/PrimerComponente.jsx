import "./PrimerComponente.css";

export const PrimerComponente = ({ titulo, subtitulo }) => {
  console.log(titulo);
  console.log(subtitulo);
  return (
    <>
      <h1> {titulo} </h1>
      <h2> {subtitulo} </h2>
    </>
  );
};
