import React from "react";

const NovedadItem = (props) => {
  const { titulo, subtitulo, imagen, body } = props;

  return (
    <div className="novedad">
      <h3 className="titulo">{ titulo }</h3>
      <h4 className="subtitulo">{ subtitulo }</h4>
      <img src={imagen} alt=""/>
      <div className="detalles" dangerouslySetInnerHTML={{ __html: body }} />
      <hr />
    </div>
  )
}

export default NovedadItem;
