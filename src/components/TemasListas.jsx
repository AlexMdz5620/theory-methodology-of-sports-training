import { useState } from "react";

const TemasListas = ({ classes, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToogle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="punto">
      <div className="cont_punto" onClick={handleToogle}>
        <h1>{classes}</h1>
      </div>
      <ul className={`resp ${isOpen ? 'respActive' : ''}`}>
        {children || <li>No hay elementos disponibles</li>}
      </ul>
    </div>
  );
}

export default TemasListas;
