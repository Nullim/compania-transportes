import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../styles/components/pages/NovedadesPage.css'
import NovedadItem from "../components/novedades/NovedadItem";

const NovedadesPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async() => {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/novedades');
      setNovedades(response.data);
      setLoading(false);
    };

    cargarNovedades()
  }, []);

  return (
    <section className="holder">
      <img src="img/home/img04.jpg" alt="Ruta" className="imagen-central" />
      <h2>Novedades</h2>
      <div className="novedades">
        { loading ? (
          <p>Cargando...</p>
        ) : (
          novedades.map(item => <NovedadItem
            key={item.id}
            titulo={item.titulo}
            subtitulo={item.subtitulo}
            imagen={item.imagen}
            body={item.cuerpo} 
            />
          )
        )}
      </div>
    </section>
  );
}

export default NovedadesPage;
