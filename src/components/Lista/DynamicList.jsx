import { useState } from "react";

const DynamicList = ({ data }) => {
  const [openCategories, setOpenCategories] = useState({});

  const handleToogleCategory = (type) => {
    setOpenCategories((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

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
    acc[listName].push(item.name);
    return acc;
  }, {});

  return (
    <div>
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

export default DynamicList;
