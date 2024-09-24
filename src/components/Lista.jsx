import { useContext } from "react";
import { ApiContext } from "../context/apiContext";
import TemasListas from "./TemasListas";
import ConditionalList from "./Lista/ConditionalList";
import CoordinativeList from "./Lista/CoordinativeList";
import MacroMesoMicroList from "./Lista/MacroMesoMicroList";
import DynamicList from "./Lista/DynamicList";
import SesionList from "./Lista/SesionList";

const Lista = () => {
  const { conditional, coordinative, dynamic, macro, meso, micro, sesion } =
    useContext(ApiContext);

  return (
    <ul id="lista">
      <TemasListas classes={"Capacidades Físicas"}>
        <ConditionalList data={conditional} />
        <CoordinativeList data={coordinative} />
      </TemasListas>
      <TemasListas classes={"Macrociclos"}>
        <MacroMesoMicroList data={macro} />
      </TemasListas>
      <TemasListas classes={"Mesociclos"}>
        <MacroMesoMicroList data={meso} />
      </TemasListas>
      <TemasListas classes={"Microciclos"}>
        <MacroMesoMicroList data={micro} />
      </TemasListas>
      <TemasListas classes={"Dinámicas"}>
        <DynamicList data={dynamic} />
      </TemasListas>
      <TemasListas classes={"Sesiones"}>
        <SesionList data={sesion} />
      </TemasListas>
    </ul>
  );
};

export default Lista;
