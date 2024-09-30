import { useEffect, useRef } from "react";

const ConditionalContent = ({ data, scrollToId }) => {
  const sectionRefs = useRef({});

  useEffect(() => {
    if (scrollToId && sectionRefs.current[scrollToId]) {
      sectionRefs.current[scrollToId].scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToId]);

  return (
    <div>
      <h1>Condicionales</h1>
      <p>Las Capacidades Físicas Condicionales son aquellas que...</p>
      {data.map((item) => (
        <div key={item._id} ref={(el) => sectionRefs.current[item._id] = el}>
          <h1>{item.name}</h1>
          <p>
            <span>Descripción:</span> {item.data["Descripción"]}
          </p>
          <p>
            <span>Macrociclo:</span> {item.data["Macrociclo"]}
          </p>
          <p>
            <span>Mesociclo:</span> {item.data["Mesociclo"]}
          </p>
          <p>
            <span>Microciclo:</span> {item.data["Microciclo"]}
          </p>
          <p>
            <span>Autor:</span> {item.data["Autor"]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ConditionalContent;
