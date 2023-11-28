import {css} from "styled-components";

export const DefaultButtonStyles = css`
  background: #D9D9D9;
  color: #2c2c2c;
  &:disabled {
    background: #e0e0e0;
    color: #b7b7b7;
  }

  &:not(:disabled) {
    &:hover {
      background: #d0d0d0;
      color: #1c1c1c;
    }

    &:active {
      background: #bebebe;
      color: #000000;
    }
  }
`
