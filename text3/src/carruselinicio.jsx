import React, { useEffect, useState } from "react";
import retrato from "./imagenes/Inicio/retrato.jpg";
import paisaje from "./imagenes/Inicio/paisaje.jpg";
import conceptual from "./imagenes/Inicio/conceptual.jpg";
import fauna from "./imagenes/Inicio/fauna.jpg";
import styled from "styled-components";

/** opacidad para que empiece en negro.  Transition modificación temporal. Pasara de negro a verse. 
const CarruselImg = styled.img`
  max-width: 800px;
  width: auto;
  height: 100%;
  opacity: 0;
  transition: 1s; // modificación temporal
  &.louded: {
    opacity: 1;    }   `;   */

const CarruselContenedor = styled.div`
  display: flex;
  background-color: black;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const Carruselinico = () => {
  const images = [retrato, paisaje, fauna, conceptual];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [selectedImage, setSelectedImage] = useState(images[0]);

  // Ocultar componente
  const [ocultar, setOcultar] = useState(false);

  useEffect((props) => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, images);
    }, 3000);
    return () => clearInterval(interval);
  });

  /** Creamos un método para simplificar. 2 parámetros, un selectedIndex que va a ser un número y dos una imagen es un strig.    Ponemos una propiedad sin parámetro. (next=true) que nos pregunta si vas al siguiente o al otro.*/

  const selectNewImage = (selectedIndex, images, next = true) => {
    setTimeout(() => {
      /** En caso de ir adelante comprobamos next ? ( selectedIndex < images.lenth -1)
 y si no (:)  unificamos las dos condiciones  */
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;

      /** ¿es next? ¿Se cumple la condición?  Hacemos la condición del sigiente index next.
         * y si no, ponemos la condición del previews (:)  si no, (:) ¿Se cumple la condición?  
         Es como escribir if(next){if(condition){return selectedIndex +1;}else{return 0}}*/
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;

      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
      console.log(
        "nextIndex , selectedIndex ,selectedImage",
        selectedIndex,
        nextIndex,
        selectedImage,
        setSelectedImage(images[nextIndex])
      );
    }, 3000);
  };

  /**  previous es directamente llamar a  selectNewImage () Pasarle selectedIndex,  
        conjunto images, y  previous que no es next  y por ello, se le pone false.*/
  const previous = () => {
    selectNewImage(selectedIndex, images, false);
    setOcultar(true);
  };

  // no se pone false porque voy al siguiente.
  const next = () => {
    selectNewImage(selectedIndex, images);
    setOcultar(true);
  };

  return (
    <>
      <CarruselContenedor>
        <img height="auto" width="65%" src={selectedImage} alt="paisaje" />

        {ocultar && <button onClick={previous}> {"<"} </button>}
        {ocultar && <button onClick={next}> {">"} </button>}
      </CarruselContenedor>
    </>
  );
};
export default Carruselinico;
