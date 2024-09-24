function SesionContent({ data }) {
  const groupedData = data.reduce((acc, item) => {
    const typeMap = {
      "naturaleza-tareas": "Naturaleza de las Tareas",
      "magnitud-cargas": "Magnitud de las Cargas",
      "orientacion-contenido": "Orientación del Contenido",
    };

    const typeKey = item.type;
    const listName = typeMap[typeKey] || typeKey;

    if (!acc[listName]) {
      acc[listName] = [];
    }
    acc[listName].push(item);
    return acc;
  }, {});

  return (
    <div>
      <h1>Sesiones de Entrenamiento</h1>
      <p>Son una manera de que...</p>
      {Object.entries(groupedData).map(([listName, items]) => (
        <div key={listName}>
          <h1>{listName}</h1>
          {items.map((item, index) => (
            <div key={index}>
              <h1>{item.name}</h1>
              <p>Definición: {item.data["definition"]}</p>
              <p>Descripción: {item.data["description"]}</p>
              <p>Ejemplo: {item.data["example"]}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SesionContent;
