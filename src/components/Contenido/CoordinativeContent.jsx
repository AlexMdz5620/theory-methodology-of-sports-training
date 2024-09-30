import { useEffect, useRef } from "react";

const CoordinativeContent = ({ data, scrollToId }) => {
  const sectionRefs = useRef({});

  useEffect(() => {
    if (scrollToId && sectionRefs.current[scrollToId]) {
      sectionRefs.current[scrollToId].scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToId]);

  return (
    <div>
      <h1>Coordinativas</h1>
      <p>Las Capacidades Físicas Coordinativas son aquellas que...</p>
      {data.map((item) => (
        <div key={item._id} ref={(el) => sectionRefs.current[item._id] = el}>
          <h1>{item.name}</h1>
          <p>
            <sapn>Descripción:</sapn> {item.data["Descripción"]}
          </p>
          <p>
            <sapn>Macrociclo:</sapn> {item.data["Macrociclo"]}
          </p>
          <p>
            <sapn>Mesociclo:</sapn> {item.data["Mesociclo"]}
          </p>
          <p>
            <sapn>Microciclo:</sapn> {item.data["Microciclo"]}
          </p>
          <p>
            <sapn>Autor:</sapn> {item.data["Autor"]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CoordinativeContent;
