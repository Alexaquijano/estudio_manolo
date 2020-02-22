import React, { useState } from "react";

const EjemploSelect = () => {
    const [seleccion, setSeleccion]= useState(0);
  const opcionesMenu = [
    { value: 0, label: "" },
    { value: 1, label: "Si" },
    { value: 2, label: "No" },
    { value: 3, label: "Tal vez" },
    { value: 4, label: "No aplica" }
  ];
  var opciones = opcionesMenu.map(opcion => (
    <option selected={opcion.value == seleccion} value={opcion.value}>
      {opcion.label}
    </option>
  ));
  console.log(opciones);

  var metodo = seleccion => {
    setSeleccion(seleccion.target.value)
  };

  return( 
  <div>
  <select onChange={metodo}>{opciones}</select>
  <button
  onClick={()=>{
      setSeleccion(0)
  }}></button>
  </div>);
};

export default EjemploSelect;
