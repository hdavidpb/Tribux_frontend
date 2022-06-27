import eggIcon from "../../assets/huevo.png";
import larva from "../../assets/larva.png";
import pupa from "../../assets/pupa.png";
import hormiga from "../../assets/hormiga.png";
import * as SC from "./styles";
import { theme } from "../../globalStyle/theme";

const Steps = () => {
  return (
    <SC.SectionContainer>
      <SC.CornerRight></SC.CornerRight>
      <SC.SectionTitle size="30px">Evolución de nuestra Tribu</SC.SectionTitle>
      <SC.StepsContainer>
        <SC.MemberProgressContainer>
          <SC.MemberProgress />
        </SC.MemberProgressContainer>
        <SC.StepCardContainer>
          <SC.IconContainer style={{ backgroundColor: theme.blueColor }}>
            <img src={eggIcon} alt="eggIcon" />
          </SC.IconContainer>
          <SC.SectionTitle size="20px">Huevo</SC.SectionTitle>
          <SC.DescContainer>
            <SC.DescInfo color={theme.blueColor} weight="600">
              Objetivo:
            </SC.DescInfo>
            <SC.DescInfo color="#FFFFFF" weight="bold">
              1K
            </SC.DescInfo>
            <SC.DescInfo color="#FFFFFF" weight="600">
              Miembros
            </SC.DescInfo>
          </SC.DescContainer>
          <SC.DescContainer>
            <SC.DescInfo color={theme.yellowColor} weight="600">
              Beneficio:
            </SC.DescInfo>
            <SC.DescInfo color="#FFFFFF" weight="600">
              1 Accion
            </SC.DescInfo>
          </SC.DescContainer>
        </SC.StepCardContainer>
        <SC.StepCardContainer>
          <SC.IconContainer>
            <img src={larva} alt="larva" />
          </SC.IconContainer>
          <SC.SectionTitle size="20px">Larva</SC.SectionTitle>
          <SC.DescContainer>
            <SC.DescInfo color={theme.blueColor} weight="600">
              Objetivo:
            </SC.DescInfo>
            <SC.DescInfo color="#FFFFFF" weight="bold">
              2K
            </SC.DescInfo>
            <SC.DescInfo color="#FFFFFF" weight="600">
              Miembros
            </SC.DescInfo>
          </SC.DescContainer>
          <SC.DescContainer>
            <SC.DescInfo color={theme.yellowColor} weight="600">
              Beneficio:
            </SC.DescInfo>
            <SC.DescInfo color="#FFFFFF" weight="600">
              2 Acciones
            </SC.DescInfo>
          </SC.DescContainer>
        </SC.StepCardContainer>
        <SC.StepCardContainer>
          <SC.IconContainer>
            <img src={pupa} alt="pupa" />
          </SC.IconContainer>
          <SC.SectionTitle size="20px">Pupa</SC.SectionTitle>
          <SC.DescContainer>
            <SC.DescInfo color={theme.blueColor} weight="600">
              Objetivo:
            </SC.DescInfo>
            <SC.DescInfo color="#FFFFFF" weight="bold">
              3K
            </SC.DescInfo>
            <SC.DescInfo color="#FFFFFF" weight="600">
              Miembros
            </SC.DescInfo>
          </SC.DescContainer>
          <SC.DescContainer>
            <SC.DescInfo color={theme.yellowColor} weight="600">
              Beneficio:
            </SC.DescInfo>
            <SC.DescInfo color="#FFFFFF" weight="600">
              3 Acciones
            </SC.DescInfo>
          </SC.DescContainer>
        </SC.StepCardContainer>
        <SC.StepCardContainer>
          <SC.IconContainer>
            <img src={hormiga} alt="hormiga" />
          </SC.IconContainer>
          <SC.SectionTitle size="20px">Hormiga</SC.SectionTitle>
          <SC.DescContainer>
            <SC.DescInfo color={theme.blueColor} weight="600">
              Objetivo:
            </SC.DescInfo>
            <SC.DescInfo color="#FFFFFF" weight="bold">
              4K
            </SC.DescInfo>
            <SC.DescInfo color="#FFFFFF" weight="600">
              Miembros
            </SC.DescInfo>
          </SC.DescContainer>
          <SC.DescContainer>
            <SC.DescInfo color={theme.yellowColor} weight="600">
              Beneficio:
            </SC.DescInfo>
            <SC.DescInfo color="#FFFFFF" weight="600">
              4 Acciones
            </SC.DescInfo>
          </SC.DescContainer>
        </SC.StepCardContainer>
      </SC.StepsContainer>
    </SC.SectionContainer>
  );
};

export default Steps;
