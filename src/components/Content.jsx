import { useContext } from "react";
import { ApiContext } from "../context/apiContext";
import TemasContenido from "./TemasContenido";
import ConditionalContent from "./Contenido/ConditionalContent";
import CoordinativeContent from "./Contenido/CoordinativeContent";
import MacroMesoMicroContent from "./Contenido/MacroMesoMicroContent";
import DynamicContent from "./Contenido/DynamicContent";
import SesionContent from "./Contenido/SesionContent";

const Content = ({ scrollToId }) => {
  const { conditional, coordinative, dynamic, macro, meso, micro, sesion } =
    useContext(ApiContext);

  return (
    <div id="contenido">
      <div className="content">
        <TemasContenido classes={"Capacidades Físicas"}>
          <ConditionalContent data={conditional} scrollToId={scrollToId} />
          <CoordinativeContent data={coordinative} scrollToId={scrollToId} />
        </TemasContenido>
        <TemasContenido classes={"Macrociclos"}>
          <MacroMesoMicroContent data={macro} scrollToId={scrollToId} />
        </TemasContenido>
        <TemasContenido classes={"Mesociclos"}>
          <MacroMesoMicroContent data={meso} scrollToId={scrollToId} />
        </TemasContenido>
        <TemasContenido classes={"Microciclos"}>
          <MacroMesoMicroContent data={micro} scrollToId={scrollToId} />
        </TemasContenido>
        <TemasContenido classes={"Dinámicas"}>
          <DynamicContent data={dynamic} scrollToId={scrollToId} />
        </TemasContenido>
        <TemasContenido classes={"Sesiones"}>
          <SesionContent data={sesion} scrollToId={scrollToId} />
        </TemasContenido>
      </div>
    </div>
  );
};

export default Content;
