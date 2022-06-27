import Nabvar from "../../components/Nabvar";
import userIcon from "../../assets/userIcon.png";
import arcoIcon from "../../assets/arco.png";
import * as SC from "./styles";
import { Button } from "../../components/styles";
import { theme } from "../../globalStyle/theme";
const Header = () => {
  return (
    <SC.HeaderContainer>
      <Nabvar />
      <SC.HeaderInfoContainer>
        <SC.InfoContainer>
          <SC.LegenContainer>
            <SC.LegenMsgContainer>
              <SC.LegenTitle weight="400">UN CLUB DE</SC.LegenTitle>
              <SC.LegenTitle weight="900" stroke={true}>
                BENEFICIOS
              </SC.LegenTitle>
              <SC.ParagraphtMsg>
                Cupones de descuentos y beneficios, lanzamientos, ¡ahorro en
                moneda digital y mucho más!
              </SC.ParagraphtMsg>
            </SC.LegenMsgContainer>
          </SC.LegenContainer>
          <SC.StadisticsContainer>
            <SC.DataStadisticContainer>
              <SC.DataContainer>
                <SC.TopDataContainer>
                  <img src={userIcon} alt="userIcon" />
                  <h6>2340</h6>
                </SC.TopDataContainer>
                <span>Miembros afiliados</span>
              </SC.DataContainer>
              <SC.DataContainer>
                <SC.TopDataContainer>
                  <img src={arcoIcon} alt="arcoIcon" />
                  <h6>78%</h6>
                </SC.TopDataContainer>
                <span>% Cumplimiento 2da etapa</span>
              </SC.DataContainer>
            </SC.DataStadisticContainer>
            <SC.BarContainer>
              <SC.ProgressBar />
            </SC.BarContainer>
          </SC.StadisticsContainer>
          <SC.JoinBtnContainer>
            <Button
              bgColor={theme.yellowColor}
              color={theme.blackColor}
              style={{ fontWeight: "bold" }}
            >
              Únete
            </Button>
          </SC.JoinBtnContainer>
        </SC.InfoContainer>
      </SC.HeaderInfoContainer>
    </SC.HeaderContainer>
  );
};

export default Header;
