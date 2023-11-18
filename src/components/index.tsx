import styled, {css} from "styled-components";
import {GreenButtonStyles} from "./greenButtonStyles.tsx";
import {DefaultButtonStyles} from "./defaultButtonStyles.tsx";
import {RedButtonStyles} from "./redButtonStyles.tsx";

const centerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 8px;
  flex-direction: column;
  height: 100%;
`
export const Block = styled.div`
  display: flex;
  flex-direction: row;
`

type ButtonProps = {
  scale : 1 | 2 | 3,
  color?: 'green' | 'red'
}

export const Button = styled.button<ButtonProps>`
  font-size: ${({ scale }) => 16 + 2 * scale + 'px'};
  text-align: center;
  border: none;
  padding: ${({ scale }) => 8 + 4 * scale + 'px'};
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  ${({color}) => {
    if (color === 'green') {
      return GreenButtonStyles;
    }
    if (color === 'red') {
      return RedButtonStyles;
    }
    
    return DefaultButtonStyles
  }}
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: auto;
  height: 100%;
  justify-content: center;
`
export const Label = styled.label`
  margin-left: 8px;
  font-size: 16px;
`
export const Input = styled.input`
  border: #D9D9D9 solid 2px;
  border-radius: 2px;
  font-size: 18px;
  color: #2c2c2c;

  &[type="text"], &[type="password"] {
    text-align: center;
    padding: 12px;

    &::placeholder {
      color: #d0cfcf;
      text-align: center;
    }
  }

  &[type="checkbox"] {
    label {
      color: #D9D9D9;
    }
  }
`
export const Header = styled.h1`
  font-weight: normal;
`

export const SubHeader = styled.h2`
  font-weight: normal;
`

export const Exit = styled.a`
  position: absolute;
  right: 0;
  cursor: pointer;
`
export const CenterContainerStyled = styled.div`
  ${centerStyles};
`
export const ImageStyled = styled(CenterContainerStyled)`
  margin-left: 8px;
  cursor: pointer;
`
export const NavStyled = styled.nav`
  ${centerStyles};
  margin-top: 22px;
  position: relative;
`
