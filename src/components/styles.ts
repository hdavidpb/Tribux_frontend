import styled from "styled-components";

interface IProps {
  bgColor?: string;
  color?: string;
  borderColor?: string;
}

export const NavbarContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 1.2rem;
`;

export const LogoContainer = styled.div`
  width: 60px;
  height: 50px;
`;
export const LogoImg = styled.img``;

export const NavOptionsContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  background-color: ${({ bgColor }: IProps) => bgColor};
  border-radius: 10px;
  border: ${({ borderColor }: IProps) =>
    borderColor ? `1px solid ${borderColor}` : "none"};
  color: ${({ color }: IProps) => color};
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
`;
