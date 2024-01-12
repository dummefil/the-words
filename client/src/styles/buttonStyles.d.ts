import React from "react";
export type ButtonProps = {
    scale: 1 | 2 | 3;
    color?: 'green' | 'red';
} & React.RefAttributes<HTMLAnchorElement>;
export declare const ButtonStyles: import("styled-components").RuleSet<ButtonProps>;
