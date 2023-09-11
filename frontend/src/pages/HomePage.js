import React from "react";
import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
  return (
    <main className="holder">
      <div className="homeimg">
        <img src="img/home/img02.jpg" alt="Camion" />
      </div>
      <div className="columnas">
        <div className="bienvenidos">
          <h2 id="title">Bienvenidos</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Phasellus dui dui, euismod
              a volutpat et, rhoncus non elit. Fusce tincidunt
              nisi id ex faucibus suscipit. Donec eu
              posuere est, in euismod lorem. Aliquam erat 
              volutpat. Morbi placerat eleifend ligula facilisis 
              fringilla. 
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Phasellus dui dui, euismod
              a volutpat et, rhoncus non elit. Fusce tincidunt
              nisi id ex faucibus suscipit. Donec eu
              posuere est, in euismod lorem. Aliquam erat 
              volutpat. Morbi placerat eleifend ligula facilisis 
              fringilla.
            </p>
        </div>
        <div className="testimonios">
          <h2>Testimonios</h2>
          <div className="testimonio">
            <span className="cita">"Simplemente Excelente"</span> <br />
            <span className="autor">Juan Perez - zapatos.com</span>
          </div>
          <div className="testimonio">
            <span className="cita">"Lo recomiendo a todos!"</span> <br />
            <span className="autor">Maria Magdalena - supermercados.com</span>
          </div>
          <div className="testimonio">
            <span className="cita">"Nunca usare otro servicio"</span> <br />
            <span className="autor">Pepito Fernandez - madereros.com</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
