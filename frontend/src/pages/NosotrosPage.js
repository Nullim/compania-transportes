import React from "react";
import '../styles/components/pages/NosotrosPage.css'

const NosostrosPage = (props) => {
  return (
    <main className="holder">
      <img src="img/home/img03.jpg" alt="Barco" />
      <div className="historia">
        <h2>Historia</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed vel leo consectetur, malesuada lectus at, hendrerit nulla.
        Vestibulum quis porta turpis, porttitor feugiat urna. Donec non ipsum ligula.
        Duis vestibulum vestibulum tincidunt. Duis dapibus mauris elit, ac scelerisque eros pretium at.
        </p>
        <p>
        Sed ultricies nunc nec sapien ultrices, at lacinia lectus fringilla.
        Suspendisse auctor odio placerat, interdum mi in, rutrum elit.
        Mauris in risus sit amet orci volutpat mollis ac porta nisl.
        Fusce vitae urna sit amet ex laoreet pretium vitae a ex.
        </p>
      </div>
      <div className="staff">
        <h2>Staff</h2>
        <div className="personas">
          <div className="persona">
            <img src="img/nosotros/nosotros1.jpg" alt="Juan Gomez" />
            <h3 className="nombre">Juan Gomez</h3>
            <h4 className="posicion">Gerente General</h4>
            <p className="descripcion">
              Praesent non enim euismod, viverra lectus non, gravida mauris.
              Pellentesque placerat interdum ante. 
              Sed blandit massa et condimentum sagittis.
            </p>
          </div>
          <div className="persona">
            <img src="img/nosotros/nosotros2.jpg" alt="Carla Figueroa" />
            <h3 className="nombre">Carla Figueroa</h3>
            <h4 className="posicion">Gerenta de Producción</h4>
            <p className="descripcion">
              Etiam sit amet orci et nulla egestas mattis et eu nulla. 
              Maecenas maximus consectetur sem et commodo. 
              Vivamus id arcu.  
            </p>
          </div>
          <div className="persona">
            <img src="img/nosotros/nosotros3.jpg" alt="Pablo Martinez" />
            <h3 className="nombre">Pablo Martinez</h3>
            <h4 className="posicion">Gerente Administrativo y Financiero</h4>
            <p className="descripcion">
              Fusce faucibus vestibulum tortor sit amet mattis. 
              Nam nec congue lacus. Mauris quis tempus velit, eu facilisis sem. 
              Integer eget. 
            </p>
          </div>
          <div className="persona">
            <img src="img/nosotros/nosotros4.jpg" alt="Azul Rodriguez" />
            <h3 className="nombre">Azul Rodriguez</h3>
            <h4 className="posicion">Gerenta Comercial</h4>
            <p className="descripcion">
              Donec id viverra mi. 
              Quisque ac velit quis turpis vestibulum feugiat vel nec sapien. 
              Phasellus placerat auctor lacus, non scelerisque. 
            </p>
          </div>
          <div className="persona">
            <img src="img/nosotros/nosotros5.jpg" alt="Garcia Lopez" />
            <h3 className="nombre">Garcia Lopez</h3>
            <h4 className="posicion">Gerente de Operaciones</h4>
            <p className="descripcion">
              Aenean sollicitudin, risus ac ultrices vulputate, nibh neque facilisis ligula, fermentum vestibulum dui lacus vel velit. 
              Cras accumsan, metus sed. 
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NosostrosPage;
