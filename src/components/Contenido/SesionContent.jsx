import { useEffect, useRef } from "react";

function SesionContent({ data, scrollToId }) {
  const sectionRefs = useRef({});

  useEffect(() => {
    if (scrollToId && sectionRefs.current[scrollToId]) {
      sectionRefs.current[scrollToId].scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToId]);
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
            <div key={index} ref={(el) => sectionRefs.current[item._id] = el}>
              <h1>{item.name}</h1>
              <p><span>Definición:</span> {item.data["definition"]}</p>
              <p><span>Descripción:</span> {item.data["description"]}</p>
              <p><span>Ejemplo:</span> {item.data["example"]}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SesionContent;
