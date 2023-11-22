import PropTypes from "prop-types";
import "./PrimerComponente.css";

export const PrimerComponente = ({ titulo, subtitulo }) => {
  return (
    <>
      <h1> {titulo} </h1>
      <h2> {subtitulo} </h2>
    </>
  );
};

PrimerComponente.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
};

PrimerComponente.defaultProps = {
  titulo: "Práctica de React",
  subtitulo: "Sección de Props",
};
