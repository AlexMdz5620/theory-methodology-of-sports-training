import { useEffect, useRef } from "react";

const MacroMesoMicroContent = ({ data, scrollToId }) => {
  const sectionRefs = useRef({});

  useEffect(() => {
    if (scrollToId && sectionRefs.current[scrollToId]) {
      sectionRefs.current[scrollToId].scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToId]);
  return (
    <div>
      {data.map((item) => (
        <div key={item._id} ref={(el) => sectionRefs.current[item._id] = el}>
          <h1>{item.name}</h1>
          <p><span>Definición:</span> {item.data["definition"]}</p>
          <p><span>Descripción:</span> </p>
          {typeof item.data["description"] !== "object" ? (
            <p>{item.data["description"]}</p>
          ) : (
            <ul>
              {Object.keys(item.data["description"]).map((key) => {
                return (
                  <li key={key}>
                    {key}: {item.data["description"][key]}
                  </li>
                );
              })}
            </ul>
          )}
          <p>
            <span>Autor:</span>{" "}
            {item.data["author"] !== undefined
              ? item.data["author"]
              : "No Hay un autor específico."}
          </p>
          <p><span>Ejemplo:</span> {item.data["example"]}</p>
        </div>
      ))}
    </div>
  );
};

export default MacroMesoMicroContent;
