import { useState } from "react";

const ConditionalList = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState({});

  const handleToogle = () => {
    setIsOpen(!isOpen);
    if(isOpen) setOpenCategories({})
  };

  const handleToogleCategory = (type) => {
    setOpenCategories((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const groupedData = data.reduce((acc, item) => {
    const typeKey = item.type.toLowerCase();
    if (!acc[typeKey]) {
      acc[typeKey] = [];
    }
    acc[typeKey].push(item.name);
    return acc;
  }, {});

  return (
    <div className="punto">
      <div className="cont_punto" onClick={handleToogle}>
        <h2>Condicionales</h2>
      </div>
      {Object.entries(groupedData).map(([type, names]) => (
        <div key={type}>
            <h3
              className={`cont_punto resp ${isOpen ? "respActive" : ""}`}
              onClick={() => handleToogleCategory(type)}
            >
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </h3>
          <ul className={`resp ${openCategories[type] ? "respActive" : ""}`}>
            {names.map((name) => (
              <li className="cont_punto sangria" key={name}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ConditionalList;
