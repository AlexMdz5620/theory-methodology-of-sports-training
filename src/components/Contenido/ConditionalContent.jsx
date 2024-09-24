const ConditionalContent = ({ data }) => {
  return (
    <div>
      <h1>Condicionales</h1>
      <p>Las Capacidades Físicas Condicionales son aquellas que...</p>
      {data.map((item) => (
        <div key={item._id}>
          <h1>{item.name}</h1>
          <p>Descripción: {item.data["Descripción"]}</p>
          <p>Macrociclo: {item.data["Macrociclo"]}</p>
          <p>Mesociclo: {item.data["Mesociclo"]}</p>
          <p>Microciclo: {item.data["Microciclo"]}</p>
          <p>Autor: {item.data["Autor"]}</p>
        </div>
      ))}
    </div>
  );
};

export default ConditionalContent;
