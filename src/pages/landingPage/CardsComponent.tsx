import * as SC from "./styles";
import a1 from "../../assets/1.png";
import a2 from "../../assets/2.png";
import a3 from "../../assets/3.png";
import a4 from "../../assets/4.png";
import a5 from "../../assets/5.png";
import a6 from "../../assets/6.png";
const CardsComponent = () => {
  return (
    <SC.CardComponentContainer>
      <SC.SectionTitle size="35px">
        Conoce un poco más sobre cada una de nuestras fases
      </SC.SectionTitle>
      <SC.Cardsontainer>
        <SC.CardContainer>
          <SC.CardImageContainer>
            <img src={a1} alt="image 1" />
            <SC.CardInfoDesc height="40%">
              <h1>Convocar a la TribuӾ </h1>
              <p>
                Somos la comunidad que defiende nuestro derecho de recibir el
                mejor servicio y máximo ahorro!
              </p>
            </SC.CardInfoDesc>
          </SC.CardImageContainer>
          <SC.CardInfoContainer>
            <SC.CardInfoDesc height="100%">
              <h1>Convocar a la TribuӾ </h1>
              <p>
                Somos la comunidad que defiende nuestro derecho de recibir el
                mejor servicio y máximo ahorro! "Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit.
              </p>
            </SC.CardInfoDesc>
          </SC.CardInfoContainer>
        </SC.CardContainer>
        <SC.CardContainer>
          <SC.CardImageContainer>
            <img src={a2} alt="image 2" />
            <SC.CardInfoDesc height="40%">
              <h1>Conquistar aliados</h1>
              <p>
                Las mejores marcas quieren atendernos, pero antes deben
                conocernos!
              </p>
            </SC.CardInfoDesc>
          </SC.CardImageContainer>
          <SC.CardInfoContainer>
            <SC.CardInfoDesc height="100%">
              <h1>Conquistar aliados</h1>
              <p>
                Las mejores marcas quieren atendernos, pero antes deben
                conocernos! "Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
            </SC.CardInfoDesc>
          </SC.CardInfoContainer>
        </SC.CardContainer>
        <SC.CardContainer>
          <SC.CardImageContainer>
            <img src={a3} alt="image 3" />
            <SC.CardInfoDesc height="40%">
              <h1>Beta (En veremos)</h1>
              <p>Llega el día de poner en modo prueba toda la teoría, vamos!</p>
            </SC.CardInfoDesc>
          </SC.CardImageContainer>
          <SC.CardInfoContainer>
            <SC.CardInfoDesc height="100%">
              <h1>Beta (En veremos)</h1>
              <p>
                Llega el día de poner en modo prueba toda la teoría, vamos!
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu.
              </p>
            </SC.CardInfoDesc>
          </SC.CardInfoContainer>
        </SC.CardContainer>
        <SC.CardContainer>
          <SC.CardImageContainer>
            <img src={a4} alt="image 4" />
            <SC.CardInfoDesc height="40%">
              <h1>Conquistar Ciudades</h1>
              <p>
                Todo marcha según lo previsto, hay cosas en qué mejorar, pero ya
                podemos expandir nuestros confines.
              </p>
            </SC.CardInfoDesc>
          </SC.CardImageContainer>
          <SC.CardInfoContainer>
            <SC.CardInfoDesc height="100%">
              <h1>Conquistar Ciudades</h1>
              <p>
                <SC.CardInfoDesc height="100%">
                  <h1>Conquistar Ciudades</h1>
                  <p>
                    Todo marcha según lo previsto, hay cosas en qué mejorar,
                    pero ya podemos expandir nuestros confines.
                  </p>
                </SC.CardInfoDesc>
              </p>
            </SC.CardInfoDesc>
          </SC.CardInfoContainer>
        </SC.CardContainer>
        <SC.CardContainer>
          <SC.CardImageContainer>
            <img src={a5} alt="image 5" />
            <SC.CardInfoDesc height="40%">
              <h1>Lanzamiento Oficial</h1>
              <p>
                Nunca terminan los detalles, sin embargo, aquí vamos. Esta es
                nuestra app oficial!
              </p>
            </SC.CardInfoDesc>
          </SC.CardImageContainer>
          <SC.CardInfoContainer>
            <SC.CardInfoDesc height="100%">
              <h1>Lanzamiento Oficial</h1>
              <p>
                Nunca terminan los detalles, sin embargo, aquí vamos. Esta es
                nuestra app oficial! "Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </SC.CardInfoDesc>
          </SC.CardInfoContainer>
        </SC.CardContainer>
        <SC.CardContainer>
          <SC.CardImageContainer>
            <img src={a6} alt="image 6" />
            <SC.CardInfoDesc height="40%">
              <h1>Vamos por más!</h1>
              <p>
                El crecimiento no se detiene, nuestra comunidad se expande hacia
                otras latitudes.
              </p>
            </SC.CardInfoDesc>
          </SC.CardImageContainer>
          <SC.CardInfoContainer>
            <SC.CardInfoDesc height="100%">
              <h1>Vamos por más!</h1>
              <p>
                El crecimiento no se detiene, nuestra comunidad se expande hacia
                otras latitudes. "Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </SC.CardInfoDesc>
          </SC.CardInfoContainer>
        </SC.CardContainer>
      </SC.Cardsontainer>
    </SC.CardComponentContainer>
  );
};

export default CardsComponent;
