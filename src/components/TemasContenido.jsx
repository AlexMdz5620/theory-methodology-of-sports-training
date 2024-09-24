const TemasContenido = ({ classes, children }) => {
  return (
    <div>
      <h1>{classes}</h1>
      <div>{children}</div>
    </div>
  );
};

export default TemasContenido;
