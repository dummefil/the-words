import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import {ButtonProps, ButtonStyles} from "./buttonStyles.tsx";

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



export const Button = styled.button<ButtonProps>`
  ${ButtonStyles}
`


export const ButtonLink = styled(Link)<ButtonProps>`
  text-decoration: none;
  ${ButtonStyles};
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
  border-radius: 4px;
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
export const CenterContainer = styled.div`
  ${centerStyles};
`



export const ImageStyled = styled(CenterContainer)`
  margin-left: 8px;
  cursor: pointer;
`
export const NavStyled = styled.nav`
  ${centerStyles};
  margin-top: 22px;
  position: relative;
`

export const Column = styled.div`
  flex-direction: column;
  display: flex;
`

export const RoomsScroll = styled(Column)`
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 8px;
`

export const Row = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 8px;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const CenterColumn = styled(Column)`
  ${centerStyles};
`
