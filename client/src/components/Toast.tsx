import styled, {css, keyframes} from "styled-components";
import {useCallback, useEffect, useState} from "react";
import {setError} from "../store/slice.main";
import {useAppDispatch} from "../hooks";


// Define the fade-in and slide-in animation
const fadeInAndSlideDown = keyframes`
  0% { opacity: 0; transform: translateY(-100%); }
  100% { opacity: 1; transform: translateY(0); }
`;

const fadeOutAndSlideUp = keyframes`
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-100%); }
`;


//todo fix bottom center && top center
const getPosition = (string = 'bottom') => {
    switch (string) {
        case 'bottom left':
            return {
                bottom: 0,
                left: 0,
            }
        case 'bottom right':
            return {
                bottom: 0,
                right: 0,
            }
        case 'top right':
            return {
                top: 0,
                right: 0,
            }
        case 'top left':
            return {
                top: 0,
                left: 0,
            }
        case 'bottom center':
            return {
                bottom: 0
            }
        case 'top center':
            return {
                top: 0
            }
    }
}

type ToastProps = {
    data?: Error | any
    show: boolean;
    type: 'error' | 'warn' | 'success' | 'plain'
    position: 'bottom left' | 'bottom right' | 'top right' | 'top left' | 'bottom center' | 'top center'
}

const Wrapper = styled.div<ToastProps>`
  position: absolute;
  animation: ${({ show }) => (show ? fadeInAndSlideDown : fadeOutAndSlideUp)} 0.5s ease-out forwards;
  ${({position})=> getPosition(position)}
  ${({type}) => {
      if (type === 'error') {
          return css`
            border-radius: 12px;
            background: red;
            color: white;
            padding: 12px 16px;
            margin: 16px;
          `
      }
  }}
`

const Toast = ({ position, data, type = 'plain' }: ToastProps) => {
    const dispatch = useAppDispatch();
    const [ localData, setLocalData ] = useState({});
    const [showToast, setShowToast] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowToast(false);
        }, 2500); // Duration after which the toast will disappear

        return () => clearTimeout(timer);
    }, []);

    const timeoutFunction = useCallback(() => {
        dispatch(setError(null))
    }, [dispatch]);


    useEffect(() => {
        setLocalData(data);
        const timeoutId = setTimeout(timeoutFunction, 3000); // 3000 ms = 3 seconds
        return () => clearTimeout(timeoutId);
    }, [data, timeoutFunction]);

    return <Wrapper show={showToast} position={position} type={type}>
        {localData?.toString()}
    </Wrapper>
}

export default Toast;
