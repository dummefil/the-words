import {css} from "styled-components";
import {GreenButtonStyles} from "./greenButtonStyles.tsx";
import {RedButtonStyles} from "./redButtonStyles.tsx";
import {DefaultButtonStyles} from "./defaultButtonStyles.tsx";
import React from "react";

export type ButtonProps = {
  scale : 1 | 2 | 3,
  color?: 'green' | 'red'
} & React.RefAttributes<HTMLAnchorElement>
export const ButtonStyles = css<ButtonProps>`
  font-size: ${({scale}) => 16 + 2 * scale + 'px'};
  text-align: center;
  border: none;
  padding: ${({scale}) => 8 + 4 * scale + 'px'};
  border-radius: 4px;
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
  }}`
