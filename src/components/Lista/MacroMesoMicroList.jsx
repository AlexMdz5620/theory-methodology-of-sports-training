const MacroMesoMicroList = ({ data }) => (
    <ul>
      {data.map(item => (
        <li key={item._id} className="cont_punto">
          {item.name}
        </li>
      ))}
    </ul>
  );

export default MacroMesoMicroList