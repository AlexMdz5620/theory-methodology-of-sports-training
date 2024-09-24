import { useState } from "react";

const SesionList = ({ data }) => {
  const [openCategories, setOpenCategories] = useState({});

  const handleToogleCategory = (type) => {
    setOpenCategories((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };
  // Reducir los datos en grupos basados en el tipo
  const groupedData = data.reduce((acc, item) => {
    const typeMap = {
      "naturaleza-tareas": "Naturaleza de las Tareas",
      "magnitud-cargas": "Magnitud de las Cargas",
      "orientacion-contenido": "Orientación del Contenido",
    };

    const typeKey = item.type;
    const listName = typeMap[typeKey] || typeKey; // Obtiene el nombre legible o usa el tipo si no está en el mapa

    if (!acc[listName]) {
      acc[listName] = [];
    }
    acc[listName].push(item.name); // Agrega el nombre de la sesión
    return acc;
  }, {});

  return (
    <div>
      {/* Mapear los grupos y renderizar las listas */}
      {Object.entries(groupedData).map(([listName, names]) => (
        <div key={listName} className="punto">
          <div
            className="cont_punto"
            onClick={() => handleToogleCategory(listName)}
          >
            <h3>{listName}</h3>
          </div>
          <ul
            className={`resp ${openCategories[listName] ? "respActive" : ""}`}
          >
            {names.map((name) => (
              <li key={name} className="cont_punto sangria">
                {name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SesionList;
