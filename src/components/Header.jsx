import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Teoría y Metodología del Entrenamiento</h1>
      <nav>
        <NavLink
          to={"/"}
          className={"links"}
          style={({ isActive }) => ({
            color: isActive ? "#f47c57" : "#fff",
          })}
        >
          Inicio
        </NavLink>
        <NavLink
          to={"/dictionary"}
          className={"links"}
          style={({ isActive }) => ({
            color: isActive ? "#f47c57" : "#fff",
          })}
        >
          Diccionario
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
