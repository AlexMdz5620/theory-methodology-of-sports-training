import { useRef, useEffect } from "react";

function DynamicContent({ data, scrollToId }) {
  const sectionRefs = useRef({});

  useEffect(() => {
    if (scrollToId && sectionRefs.current[scrollToId]) {
      sectionRefs.current[scrollToId].scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToId]);

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

export default DynamicContent;
