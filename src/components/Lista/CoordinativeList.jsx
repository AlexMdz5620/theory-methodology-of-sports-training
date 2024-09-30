import { useState } from "react";

const CoordinativeList = ({ data, handleScroll }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToogle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="punto">
      <div className="cont_punto" onClick={handleToogle}>
        <h2>Condicionales</h2>
      </div>
      <ul>
        {data.map((item) => (
          <li
            key={item._id}
            className={`cont_punto resp ${isOpen ? "respActive" : ""}`}
            onClick={() => handleScroll(item._id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoordinativeList;
