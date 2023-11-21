import styled from "styled-components";
import {SubHeader} from "./index.tsx";
import React from "react";

interface BlockProps extends React.ComponentProps<typeof BlankWrapper>{
    header?: string
}

const BlankWrapper = styled.div`
  background: #D9D9D9;
  border-radius: 4px;
  align-items: center;
  display: flex;
  height: 100%;
  flex-direction: column;
  margin-top: 56px;
  gap: 8px;
  padding: 8px;
  overflow-y: scroll;
`

const Blank = ({ header, children }: BlockProps) => {
    return <BlankWrapper>
        {header && <SubHeader>{header}</SubHeader>}
        <>
            { children }
        </>
    </BlankWrapper>
}


export default Blank;
