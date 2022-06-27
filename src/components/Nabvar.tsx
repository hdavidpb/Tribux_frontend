import * as SC from "./styles";
import logo from "../assets/logo.png";
import { theme } from "../globalStyle/theme";
const Nabvar = () => {
  return (
    <SC.NavbarContainer>
      <SC.LogoContainer>
        <SC.LogoImg src={logo} alt="tribux-logo.png" />
      </SC.LogoContainer>
      <SC.NavOptionsContainer>
        <SC.Button color={theme.yellowColor}>Aliados</SC.Button>
        <SC.Button
          color={theme.yellowColor}
          bgColor={theme.blackColor}
          borderColor={theme.yellowColor}
        >
          Miembros
        </SC.Button>
      </SC.NavOptionsContainer>
    </SC.NavbarContainer>
  );
};

export default Nabvar;
