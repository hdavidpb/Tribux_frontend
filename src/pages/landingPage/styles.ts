import styled from "styled-components";
import bgHeader from "../../assets/fondo-header.png";
import { theme } from "../../globalStyle/theme";

interface IProps {
  weight?: string;
  size?: string;
  color?: string;
  stroke?: boolean;
}

export const HeaderContainer = styled.div`
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
  width: 345px;
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
  font-size: 50px;
  -webkit-text-stroke: ${({ stroke }: IProps) => (stroke ? "medium" : "none")};
`;
export const ParagraphtMsg = styled.p`
  width: 100%;
  word-wrap: break-word;
  color: #ffffff;
  font-size: 16px;
`;

export const StadisticsContainer = styled.div`
  width: auto;
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
    font-size: 15px;
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
  height: 65vh;
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
  top: -20%;
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
  font-size: 16px;
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
