const MacroMesoMicroContent = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item._id}>
          <h1>{item.name}</h1>
          <p>Definición: {item.data["definition"]}</p>
          <div>
            <p>Descripción:{" "}</p> 
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
          </div>
          <p>
            Autor:{" "}
            {item.data["author"] !== undefined
              ? item.data["author"]
              : "No Hay un autor específico."}
          </p>
          <p>Ejemplo: {item.data["example"]}</p>
        </div>
      ))}
    </div>
  );
};

export default MacroMesoMicroContent;
