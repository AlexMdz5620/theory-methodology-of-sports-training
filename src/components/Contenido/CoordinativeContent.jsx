const CoordinativeContent = ({ data }) => {
  return (
    <div>
      <h1>Coordinativas</h1>
      <p>Las Capacidades Físicas Coordinativas son aquellas que...</p>
      {data.map((item) => (
        <div key={item._id}>
          <h1>{item.name}</h1>
          <p>Descripción: {item.data["Descripción"]}</p>
          <p>Macrociclo: {item.data["Macrociclo"]}</p>
          <p>Mesociclo: {item.data["Mesociclo"]}</p>
          <p>Microciclo: {item.data["Microciclo"]}</p>
          <p>Autor: {item.data["Autor"]}</p>
        </div>
      ))}
    </div>
  )
}

export default CoordinativeContent