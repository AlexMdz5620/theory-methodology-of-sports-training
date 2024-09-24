import { useContext } from "react";
import { ApiContext } from "../context/apiContext";
import TemasContenido from "./TemasContenido";
import ConditionalContent from "./Contenido/ConditionalContent";
import CoordinativeContent from "./Contenido/CoordinativeContent";
import MacroMesoMicroContent from "./Contenido/MacroMesoMicroContent";
import DynamicContent from "./Contenido/DynamicContent";
import SesionContent from "./Contenido/SesionContent";

const Content = () => {
  const { conditional, coordinative, dynamic, macro, meso, micro, sesion } =
    useContext(ApiContext);

  return (
    <div id="contenido">
      <h1>Teoría y Metodología del Entrenamiento.</h1>
      <p>
        Bienvenidos a nuestra página web de Teoría y Metodología del
        Entrenamiento que tiene el objetivo de poder brindar de manera más
        rápida y directa conceptos claves para el correcto desarrollo de los
        Macrcíclos de Entrenamiento.
      </p>
      <p>
        Comprendemos que los conceptos aquí mostrados les falta más información
        y estamos dispuestos a recibir el feedback de ustedes para así poder
        mejorar nuestra página y brindarles la mejor experiencia posible.
      </p>
      <TemasContenido classes={"Capacidades Físicas"}>
        <ConditionalContent data={conditional} />
        <CoordinativeContent data={coordinative} />
      </TemasContenido>
      <TemasContenido classes={"Macrociclos"}>
        <MacroMesoMicroContent data={macro} />
      </TemasContenido>
      <TemasContenido classes={"Mesociclos"}>
        <MacroMesoMicroContent data={meso} />
      </TemasContenido>
      <TemasContenido classes={"Microciclos"}>
        <MacroMesoMicroContent data={micro} />
      </TemasContenido>
      <TemasContenido classes={"Dinámicas"}>
        <DynamicContent data={dynamic} />
      </TemasContenido>
      <TemasContenido classes={"Sesiones"}>
        <SesionContent data={sesion} />
      </TemasContenido>
    </div>
  );
};

export default Content;
