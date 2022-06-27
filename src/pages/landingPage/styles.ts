import styled from "styled-components";
import bgHeader from "../../assets/fondo-header.png";
import { theme } from "../../globalStyle/theme";

interface IProps {
  weight?: string;
  size?: string;
  color?: string;
  stroke?: boolean;
  height?: string;
}

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  background: url(${bgHeader}) no-repeat right;
  border-bottom-right-radius: 135px;
`;

export const HeaderInfoContainer = styled.div`
  margin-left: 0;
  width: 80%;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 1.5rem;
`;

export const LegenContainer = styled.div`
  width: 443px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;
export const LegenMsgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;

export const LegenTitle = styled.h1`
  width: 100%;
  font-weight: ${({ weight }: IProps) => weight};
  color: #ffffff;
  font-size: 68px;
  -webkit-text-stroke: ${({ stroke }: IProps) => (stroke ? "medium" : "none")};
`;
export const ParagraphtMsg = styled.p`
  width: 100%;
  word-wrap: break-word;
  color: #ffffff;
  font-size: 22px;
`;

export const StadisticsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;

export const DataStadisticContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 38px;
`;

export const DataContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;

  & span {
    font-size: 18px;
    color: ${theme.blueColor};
  }
`;

export const TopDataContainer = styled(DataStadisticContainer)`
  gap: 5px;
  & img {
    width: 25px;
    height: 25px;
  }
  & h6 {
    font-size: 25px;
    color: #ffffff;
    font-weight: 900;
  }
`;

export const BarContainer = styled.div`
  width: 100%;
  height: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 6px;
  background: #202934;
`;

export const ProgressBar = styled.div`
  width: 70%;
  height: 100%;

  align-items: center;
  border-radius: 6px;
  background: ${theme.blueColor};
`;

export const JoinBtnContainer = styled(BarContainer)`
  height: auto;
  background: transparent;
`;

/********************** STEPS **************/

export const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 54vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  background: ${theme.bgBlack};
  border-top-left-radius: 135px;
  border-bottom-right-radius: 135px;
`;
export const CornerRight = styled.div`
  width: 200px;
  height: 160px;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${theme.bgBlack};
  z-index: -1;
`;

export const SectionTitle = styled.h1`
  font-size: ${({ size }: IProps) => size};
  color: #ffffff;
`;

export const StepsContainer = styled.div`
  width: 90%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
`;

export const StepCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  z-index: 40;
`;

export const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #39485c;

  & img {
    width: auto;
    height: auto;
  }
`;

export const DescContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const DescInfo = styled.p`
  font-size: 18px;
  font-weight: ${({ weight }: IProps) => weight};
  color: ${({ color }: IProps) => color};
`;

export const MemberProgressContainer = styled.div`
  position: absolute;
  top: 22%;
  margin-left: 11%;
  width: 78%;
  height: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #39485c;
`;
export const MemberProgress = styled.div`
  width: 33%;
  height: 100%;
  background-color: ${theme.blueColor};
`;

//CARDS//////

export const CardComponentContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  border-top-left-radius: 125px;
  padding: 2rem 0;
`;

export const Cardsontainer = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;

export const CardContainer = styled.div`
  margin: auto;
  position: relative;
  width: 95%;
  height: 450px;
  border-radius: 16px;
`;
export const CardImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  background: ${theme.blackColor};
  border-radius: 16px;
  padding: 15px;
  transition: all 0.4s;
  z-index: 100;
  box-shadow: 5px 5px 4px 0 rgba(0, 0, 0, 0.35);

  & img {
    width: 95%;
    flex: 1;
  }

  &:hover {
    z-index: 10;
  }
`;
export const CardInfoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  z-index: 50;
  background: ${theme.bgBlack};
  border-radius: 16px;
  padding: 15px;

  &:hover {
    z-index: 100;
  }
`;

export const CardInfoDesc = styled.div`
  width: 100%;
  height: ${({ height }: IProps) => (height ? height : "40%")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;

  & h1 {
    font-size: 25px;
    color: ${theme.yellowColor};
    font-weight: bold;
  }

  & p {
    font-size: 20px;
    color: #ffffff;
  }
`;
