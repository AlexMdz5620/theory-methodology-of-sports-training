import { createContext, useState, useEffect } from "react";
import axios from 'axios'
import {
  urlConditional,
  urlCoordinative,
  urlDynamic,
  urlMacro,
  urlMeso,
  urlMicro,
  urlSesion
} from "../config/config";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [conditional, setConditional] = useState([])
  const [coordinative, setCoordinative] = useState([])
  const [dynamic, setDynamic] = useState([])
  const [macro, setMacro] = useState([])
  const [meso, setMeso] = useState([])
  const [micro, setMicro] = useState([])
  const [sesion, setSesion] = useState([])

  useEffect(() => {
    const fetchConditionals = async () => {
      try {
        const { data } = await axios.get(urlConditional)
        setConditional(data.conditional)
      }
      catch (error) {
        console.error('Error fetching conditionals:',error)
      }
    }
    const fetchCoordinatives = async () => {
      try {
        const { data } = await axios.get(urlCoordinative)
        setCoordinative(data.coordinative)
      }
      catch (error) {
        console.error('Error fetching coordinative:', error)
      }
    }
    const fetchDynamics = async () => {
      try {
        const { data } = await axios.get(urlDynamic)
        setDynamic(data.dynamic)
      }
      catch (error) {
        console.error('Error fetching dynamic:',error)
      }
    }
    const fetchMacros = async () => {
      try {
        const { data } = await axios.get(urlMacro)
        setMacro(data.macros)
      }
      catch (error) {
        console.error('Error fetching macrocicles:',error)
      }
    }
    const fetchMesos = async () => {
      try {
        const { data } = await axios.get(urlMeso)
        setMeso(data.meso)
      }
      catch (error) {
        console.error('Error fetching mesocicles:', error)
      }
    }
    const fetchCMicros = async () => {
      try {
        const { data } = await axios.get(urlMicro)
        setMicro(data.micro)
      }
      catch (error) {
        console.error('Error fetching microciclos:',error)
      }
    }
    const fetchSesions = async () => {
      try {
        const { data } = await axios.get(urlSesion)
        setSesion(data.sesion)
      }
      catch (error) {
        console.error('Error fetching sesions:',error)
      }
    }

    fetchConditionals();
    fetchCoordinatives();
    fetchDynamics();
    fetchMacros();
    fetchMesos();
    fetchCMicros();
    fetchSesions();
  }, []);

  return (
    <ApiContext.Provider value={{
      conditional,
      coordinative,
      dynamic,
      macro,
      meso,
      micro,
      sesion
    }}>
        {children}
    </ApiContext.Provider>
  )
};
