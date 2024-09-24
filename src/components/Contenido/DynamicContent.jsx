function DynamicContent({ data }) {
  const groupedData = data.reduce((acc, item) => {
    const typeMap = {
      "sist-consts": "Sistema de Constantes",
      "sum-vert-sup-100": "Suma Vertical Superior al 100%",
      "sum-vert-equ-100": "Suma Vertical Igual al 100%",
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
      <h1>Dinámicas del Entrenamiento</h1>
      <p>Son formas de distribución...</p>
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

export default DynamicContent;
