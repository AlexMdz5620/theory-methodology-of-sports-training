const MacroMesoMicroList = ({ data, handleScroll }) => (
    <ul>
      {data.map(item => (
        <li key={item._id} className="cont_punto" onClick={() => handleScroll(item._id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );

export default MacroMesoMicroList