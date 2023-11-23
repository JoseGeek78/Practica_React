export const ContadorApp = () => {
  function handleClick(event) {
    console.log(event);
  }
  return (
    <>
      <h1>Contador:</h1>
      <button onClick={handleClick}>Soy un botón</button>
    </>
  );
};
