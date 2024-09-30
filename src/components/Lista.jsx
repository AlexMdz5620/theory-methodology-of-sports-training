import { useContext } from "react";
import { ApiContext } from "../context/apiContext";
import TemasListas from "./TemasListas";
import ConditionalList from "./Lista/ConditionalList";
import CoordinativeList from "./Lista/CoordinativeList";
import MacroMesoMicroList from "./Lista/MacroMesoMicroList";
import DynamicList from "./Lista/DynamicList";
import SesionList from "./Lista/SesionList";

const Lista = ({ handleScroll }) => {
  const { conditional, coordinative, dynamic, macro, meso, micro, sesion } =
    useContext(ApiContext);

  return (
    <ul id="lista">
      <TemasListas classes={"Capacidades Físicas"}>
        <ConditionalList data={conditional} handleScroll={handleScroll} />
        <CoordinativeList data={coordinative} handleScroll={handleScroll} />
      </TemasListas>
      <TemasListas classes={"Macrociclos"}>
        <MacroMesoMicroList data={macro} handleScroll={handleScroll} />
      </TemasListas>
      <TemasListas classes={"Mesociclos"}>
        <MacroMesoMicroList data={meso} handleScroll={handleScroll} />
      </TemasListas>
      <TemasListas classes={"Microciclos"}>
        <MacroMesoMicroList data={micro} handleScroll={handleScroll} />
      </TemasListas>
      <TemasListas classes={"Dinámicas"}>
        <DynamicList data={dynamic} handleScroll={handleScroll} />
      </TemasListas>
      <TemasListas classes={"Sesiones"}>
        <SesionList data={sesion} handleScroll={handleScroll} />
      </TemasListas>
    </ul>
  );
};

export default Lista;
